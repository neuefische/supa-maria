import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
    *,
    *:after,
    *:before {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        height: 100vh;
        /* background: ${props => props.theme.images.background};
        background-repeat: no-repeat;
        background-attachment: fixed; */
    }
    
    main {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    
    @font-face {
        font-family: "Adventure Time Logo";
        src: url("./assets/Adventure Time Logo.ttf");
        
        font-style: normal;
    }
    @font-face {
        font-family: "Sweet Cake";
        src: url("./assets/Sweet Cake.otf");
        
        font-style: normal;
    }
    `}
    />
  );
}

export default GlobalStyles;
