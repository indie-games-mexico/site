// Context options.
// follow this tutorial to setup context.
// https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/
// // https://swizec.com/blog/react-context-effectively/swizec/8844
import React from 'react';
import { ThemeProvider } from './src/context/Application';

export const wrapRootElement = ({element}) => (
  <ThemeProvider>{element}</ThemeProvider>
)
