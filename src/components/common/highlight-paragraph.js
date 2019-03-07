import React from 'react';


export const HighLightParagraph = ({ text }) => (
  <div
    style={{
      width: '100%',
      backgroundColor: 'rgba(242,242,242,1)',
      padding: '20px 120px',
      textAlign: 'center',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 1.25
    }}
  >
    <p>{ text }</p>
  </div>
);
