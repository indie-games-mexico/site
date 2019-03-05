import React from 'react'

export const JustiedParagraph = ({ children }) => {
  const style = {
    display:'inline-block',
    textAlign: 'justify'
  };
  return (<p style={style}>{children}</p>)

};
