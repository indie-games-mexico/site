import React, { useEffect } from 'react';
import logo from '../../images/indie-games-logo.svg';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

const Image = () => {
  // convert into reusable effectHook
  // use context to set the right styles in hover social networks hover descriptions
  const ref = React.createRef();
  const windowScroll$ = fromEvent(window, 'scroll')
                       .pipe(
                         debounceTime(500),
                         map(() => ref.current.getBoundingClientRect().bottom - 150 > 0?  true : false)
                       );
  useEffect(() => {
    const subscription = windowScroll$.subscribe(
                          onScreen => console.log('OnScreen', onScreen)
    )
    return () => {
      subscription.unsubscribe();
    }
  });

  return (
    <>
    <img src={logo} alt="Indie Games Mexico" />
    <div ref={ref}></div>
    </>
  );
}
export default () => (
  <Image />
);
