import React from "react";
import { Global, css } from "@emotion/core";
import AdventureTimeLogo from "../assets/AdventureTimeLogo.ttf";
import AdventureTimeFont from "../assets/SweetCake.otf";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *:after,
        *:before {
          box-sizing: border-box;
        }

        @font-face {
          font-family: "Adventue Time Logo";
          src: url("${AdventureTimeLogo}") format("truetype");
          font-style: normal;
        }

        @font-face {
          font-family: "Sweet Cake";
          src: url(${AdventureTimeFont}) format("opentype");
          font-style: normal;
        }

        body {
          margin: 0;
          height: 100%;
          background-color: ${theme.colors.background};
          background-image: url(${theme.images.background});
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: 250px;
          background-position: left bottom;
        }

        .main {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 100%;
        }
      `}
    />
  );
}

export default GlobalStyles;
