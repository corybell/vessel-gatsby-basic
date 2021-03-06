import React from "react"
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import {
  spacing,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  color,
} from "services/theme"

const siteStyles = `
  #___gatsby, 
  #gatsby-focus-wrapper {
    height: auto;
    min-height: 100%;
    width: 100%;
    background-color: #eaeaea;
  }

  /* HTML elements */

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html, body {
    height: auto;
    min-height: 100%;
    line-height: ${lineHeight.normal};
    font-size: ${fontSize[1]};
    font-family: ${fontFamily.primary};
    color: ${color.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  footer {
    padding: ${spacing[6]} ${spacing[0]};
  }

  hr {
    background: ${color.accent};
    height: 1px;
    border: 0;
  }

  /* Heading */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fontFamily.primary};
    margin-bottom: ${spacing[6]};
    line-height: ${lineHeight.tight};
    letter-spacing: -0.025em;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${fontWeight.bold};
    color: ${color.heading};
  }

  h1 {
    font-weight: ${fontWeight.black};
    font-size: ${fontSize[6]};
    color: ${color.headingBlack};
  }

  h2 {
    font-size: ${fontSize[5]};
  }

  h3 {
    font-size: ${fontSize[4]};
  }

  h4 {
    font-size: ${fontSize[3]};
  }

  h5 {
    font-size: ${fontSize[2]};
  }

  h6 {
    font-size: ${fontSize[1]};
  }

  h1 > a {
    color: inherit;
    text-decoration: none;
  }

  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: inherit;
  }

  /* Prose */

  p {
    line-height: ${lineHeight.relaxed};
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: ${spacing[0]} ${spacing[0]} ${spacing[8]} ${spacing[0]};
    padding: ${spacing[0]};
  }

  ul,
  ol {
    margin-left: ${spacing[0]};
    margin-right: ${spacing[0]};
    padding: ${spacing[0]};
    margin-bottom: ${spacing[8]};
    list-style-position: outside;
    list-style-image: none;
    list-style: none
  }

  ul li,
  ol li {
    padding-left: ${spacing[0]};
    margin-bottom: calc(${spacing[8]} / 2);
  }

  li > p {
    margin-bottom: calc(${spacing[8]} / 2);
  }

  li *:last-child {
    margin-bottom: ${spacing[0]};
  }

  li > ul {
    margin-left: ${spacing[8]};
    margin-top: calc(${spacing[8]} / 2);
  }

  blockquote {
    color: ${color.textLight};
    margin-left: calc(-1 * ${spacing[6]});
    margin-right: ${spacing[8]};
    padding: ${spacing[0]} ${spacing[0]} ${spacing[0]} ${spacing[6]};
    border-left: ${spacing[1]} solid ${color.primary};
    font-size: ${fontSize[2]};
    font-style: italic;
    margin-bottom: ${spacing[8]};
  }

  blockquote > :last-child {
    margin-bottom: ${spacing[0]};
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: ${spacing[8]};
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid ${color.accent};
  }

  small {
    font-size: ${fontSize[0]};
  }

  /* Link */

  a {
    color: ${color.primary};
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  /* Form */

  form {
    margin-bottom: ${spacing[4]};
  }

  input,
  textarea {
    font-size: ${fontSize[1]};
    line-height: ${lineHeight.normal};
    font-family: ${fontFamily.primary};
    padding: 0.5rem;
    background-color: #f5f2f0;
    border: none;
  }
  
  input:focus,
  textarea:focus {
    outline: ${color.primary} solid 2px;
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${siteStyles}
`

export default function CssBaseline({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}
