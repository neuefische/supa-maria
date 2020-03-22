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
