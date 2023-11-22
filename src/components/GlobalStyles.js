// GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import ManropeRegular from "../assets/Manrope-Regular.ttf";
import ManropeBold from "../assets/Manrope-Bold.ttf";

const GlobalStyles = createGlobalStyle`
  /* Include your Manrope font-face definitions */
  @font-face {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    src: url(${ManropeRegular}) format("truetype");
  }

  @font-face {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    src: url(${ManropeBold}) format("truetype");
  }

  /* Apply Manrope font-family to the body */
  body {
    font-family: "Manrope", sans-serif;
    margin: 0;
    padding: 0;
  }

  /* Add any other global styles here */
`;

export default GlobalStyles;
