// this has to use the image component provided gatsby because it optimies for the screen
import React from 'react';
import { Parallax } from 'react-parallax';

export default () => (
  <Parallax
            bgImage="https://s3.amazonaws.com/assets.indiegames/hero.png"
            bgImageAlt="Gaming company"
            strength={200}
            >
             <div style={{ height: '400px' }} />
  </Parallax>
);
