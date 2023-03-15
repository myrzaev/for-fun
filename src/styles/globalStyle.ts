import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import transitionStyles from './transitionStyle';

const AppStyleContainer = createGlobalStyle`  
    ${variables};
    ${transitionStyles};

    .container {
      max-width: 1300px;
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 40px 30px;
    }

    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    /* Scrollbar Styles */
    html {
      scrollbar-width: thin;
      scrollbar-color: var(--dark-slate) var(--navy);
    }
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: var(--navy);
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--dark-slate);
      border: 3px solid var(--navy);
      border-radius: 10px;
    }
  
    body {
      margin: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      background-color: var(--navy);
      color: var(--slate);
      font-family: var(--font-sans);
      font-size: var(--fz-xl);
      line-height: 1.3;
  
      @media (max-width: 480px) {
        font-size: var(--fz-lg);
      }
  
      &.hidden {
        overflow: hidden;
      }
  
      &.blur {
        overflow: hidden;
  
        header {
          background-color: transparent;
        }
  
        #content > * {
          filter: blur(5px) brightness(0.7);
          transition: var(--transition);
          pointer-events: none;
          user-select: none;
        }
      }
    }

    /* Provide basic, default focus styles.*/
    :focus {
      outline: 2px dashed var(--green);
      outline-offset: 3px;
    }
  
    /*
      Remove default focus styles for mouse users ONLY if
      :focus-visible is supported on this platform.
    */
    :focus:not(:focus-visible) {
      outline: none;
      outline-offset: 0px;
    }
  
    /*
      Optionally: If :focus-visible is supported on this
      platform, provide enhanced focus styles for keyboard
      focus.
    */
    :focus-visible {
      outline: 2px dashed var(--green);
      outline-offset: 3px;
    }

    main {
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
        max-width: 1300px;
        min-height: 100vh;
      
        @media (max-width: 1080px) {
            padding: 200px 100px;
        }
        @media (max-width: 768px) {
            padding: 150px 50px;
        }
        @media (max-width: 480px) {
            padding: 125px 25px;
        }
    
        &.fillHeight {
            padding: 0 150px;
        
            @media (max-width: 1080px) {
                padding: 0 100px;
            }
            @media (max-width: 768px) {
                padding: 0 50px;
            }
            @media (max-width: 480px) {
                padding: 0 25px;
            }
        }
    }
    
    section {
        margin: 0 auto;
        padding: 100px 0;
        max-width: 1000px;
    
        @media (max-width: 768px) {
          padding: 80px 0;
        }
    
        @media (max-width: 480px) {
          padding: 60px 0;
        }
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 10px 0;
        font-weight: 600;
        color: var(--lightest-slate);
        line-height: 1.1;
    }

    img[alt=""],
    img:not([alt]) {
        filter: blur(5px);
    }
    
    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        vertical-align: middle;
    
        &.feather {
        fill: none;
        }
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);
    
        &:hover,
        &:focus {
            color: var(--green);
        }

        &.inline-link {
            ${({ theme }) => theme.mixins.inlineLink};
        }
    }

    button {
        cursor: pointer;
        border: 0;
        border-radius: 0;
      }
    
      input, textarea {
        border-radius: 0;
        outline: 0;
    
        &:focus {
          outline: 0;
        }
        &:focus,
        &:active {
          &::placeholder {
            opacity: 0.5;
          }
        }
      }
    
      p {
        margin: 0 0 15px 0;
    
        &:last-child,
        &:last-of-type {
          margin: 0;
        }
    
        & > a {
          ${({ theme }) => theme.mixins.inlineLink};
        }
    
        & > code {
          background-color: var(--light-navy);
          color: var(--white);
          font-size: var(--fz-sm);
          border-radius: var(--border-radius);
          padding: 0.3em 0.5em;
        }
    }

    code {
        font-family: var(--font-mono);
        font-size: var(--fz-md);
    }

    .skip-to-content {
        ${({ theme }) => theme.mixins.button};
        position: absolute;
        top: auto;
        left: -999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
        z-index: -99;
    
        &:focus,
        &:active {
          background-color: var(--green);
          color: var(--navy);
          top: 0;
          left: 0;
          width: auto;
          height: auto;
          overflow: auto;
          z-index: 99;
        }
    }
`;

export default AppStyleContainer;
