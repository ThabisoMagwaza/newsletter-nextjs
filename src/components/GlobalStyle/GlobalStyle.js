'use client';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


  @font-face { 
    font-family: "Roboto"; 
    src: url('/fonts/Roboto-Regular.ttf'); 
    font-weight: normal; 
    font-style: normal; 
  } 

  @font-face { 
    font-family: "Roboto"; 
    src: url('/fonts/Roboto-Bold.ttf'); 
    font-weight: bold; 
    font-style: normal; 
  } 
  

  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* By Thabiso */

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html,
  body,
  main {
    height: 100%;
  }

  html {
    --color-dark-slate-grey: hsl(234, 29%, 20%);
    --color-charcoal: hsl(235, 18%, 26%);
    --color-grey: hsl(231, 7%, 70%);
    --color-white: hsl(0, 0%, 100%);
    --color-tomato: hsl(4, 100%, 67%);
  }

  body {
    line-height: 1.5;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    color: var(--color-dark-slate-grey);
    background: var(--color-charcoal);

    display: grid;
    place-items: center;
  }
`;
