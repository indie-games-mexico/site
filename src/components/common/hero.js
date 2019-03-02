import React from 'react';
import { Parallax } from 'react-parallax';

export default () => (
  <Parallax
            bgImage="https://s3.amazonaws.com/assets.indiegames/hero.png"
            bgImageAlt="Gaming company"
            blur={{ min: -1, max: 3 }}>
             <div style={{ height: '400px' }} />
  </Parallax>
);
