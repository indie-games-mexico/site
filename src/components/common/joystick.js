import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fromEvent } from 'rxjs';
import { map, pairwise, debounceTime, tap } from 'rxjs/operators';

import joystickNeutral from '../../images/joystick-neutral.svg';
import joystickUp from '../../images/joystick-up.svg';
import joystickDown from '../../images/joystick-down.svg';

const JoystickWrapper = styled.div`
  position: fixed;
  bottom: 25px;
  right: 35px;
  opacity: .8;
  &.moving {
    opacity: 1;
  }
  @media (max-width: 800px) {
    display:none;
  }
`;

export const Joystick = ({width, height}) => {
  const windowGlobal = typeof window !== 'undefined' && window;
  const style = {
    width,
    height
  }

  const [moveClass, setMoveClass] = useState('');
  const [joystickState, setJoystickState] = useState(joystickNeutral);

  useEffect(() => {
    const scrollSubscription = fromEvent(windowGlobal, 'scroll')
        .pipe(
          tap(() => setMoveClass('moving')),
          map(() => windowGlobal.scrollY || windowGlobal.document.documentElement.scrollTop),
          pairwise(),
          tap(values => {
            const [ previous, current ] = values;
            if (previous < current) {
              setJoystickState(joystickDown);
            } else {
              setJoystickState(joystickUp);
            }
          }),
          debounceTime(50)
        ).subscribe(values => {
          setJoystickState(joystickNeutral);
          setMoveClass('');
        }, error => console.log('ERROR', error));

    return () => {
      scrollSubscription.unsubscribe();
    };
  })

  return (
    <JoystickWrapper style={style} className={moveClass}>
      <img src={joystickState} alt="Game on" />
    </JoystickWrapper>
  );
};

Joystick.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}
