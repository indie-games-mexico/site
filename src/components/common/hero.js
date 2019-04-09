import React from 'react';
import logo from '../../images/indie-games-logo.svg';
// import { fromEvent } from 'rxjs';
// import { map, debounceTime } from 'rxjs/operators';


const Hero = ({toggleMenuStyles}) => {
  // after removing social links from the top we dont need this effect but it may be useful
  // if the main menu has sub options.

  const ref = React.createRef();
  /*
  const windowGlobal = typeof window !== 'undefined' && window;
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
  */
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
