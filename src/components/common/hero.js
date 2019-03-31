import React, { useEffect } from 'react';
import logo from '../../images/indie-games-logo.svg';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';


const Hero = ({toggleMenuStyles}) => {
  const windowGlobal = typeof window !== 'undefined' && window;
  // convert into reusable effectHook
  // use context to set the right styles in hover social networks hover descriptions
  const ref = React.createRef();
  const windowScroll$ = fromEvent(windowGlobal, 'scroll')
                       .pipe(
                         debounceTime(200),
                         map(() => ref.current.getBoundingClientRect().bottom - 150 > 0?  true : false)
                       );


  useEffect(() => {
    const subscription = windowScroll$.subscribe(
                          onScreen => {
                            if (onScreen) {
                              toggleMenuStyles('light');
                            } else {
                              toggleMenuStyles('dark');
                            }
                          }
    );
    return () => {
      subscription.unsubscribe();
    };
  });

  return (
    <>
      <img src={logo} alt="Indie Games Mexico" />
      <div ref={ref}></div>
    </>
  );
}

export default (props) => (
  <Hero {...props} />
);
