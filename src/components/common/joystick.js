import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fromEvent, interval } from 'rxjs';
import { mapTo, pairwise, take, debounceTime, tap, throttleTime } from 'rxjs/operators';

import joystickNeutral from '../../images/joystick-neutral.svg';
import joystickUp from '../../images/joystick-up.svg';
import joystickDown from '../../images/joystick-down.svg';

const JoystickWrapper = styled.div`
  position: fixed;
  bottom: 150px;
  left: 50px;
  opacity: .4;
  &.moving {
    opacity: 1;
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
          mapTo(windowGlobal.scrollY || windowGlobal.document.documentElement.scrollTop),
          throttleTime(300)
        ).subscribe(values => {
          // left here make sure the class none is added when the user stops scrolling
        }, error => console.log('ERROR', error));

    return () => {
      scrollSubscription.unsubscribe();
    };
  })

  return (
    <JoystickWrapper style={style} className={moveClass}>
      <img src={joystickNeutral} alt="Game on" />
    </JoystickWrapper>
  );
};

Joystick.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}
