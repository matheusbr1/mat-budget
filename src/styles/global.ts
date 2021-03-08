import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    --background: #F8F8FB;
    --title: #283E58;
    --description: #A6ACBE;
    --field-border: #EAEDEE;

    --white: #FFFFFF;
    --orange: #FF7A00;
    --white-purple: #9C69E2;
    --purple: #6F52ED;
    --red: #FF4C61;
    --green: #33D69F;
    --yellow: #FFB800;

    --dark-background: #06090F;
    --dark-description: #C9D1D9;
    --dark-card: #161B22;
  }

  html {
    font-size: 62.5%
  } 

  @media (max-width: 1180px) {
    html {
      font-size: 60%
    } 
  }

  @media (max-width: 768px) {
    html {
      font-size: 55%
    } 
  }

  * {
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--background);
    font-family: Roboto, sans-serif;
  }
`