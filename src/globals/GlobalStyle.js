import { createGlobalStyle } from "styled-components";

import { setFont, setColor } from "../styles";

const GlobalStyle = createGlobalStyle`


*,
::before,
::after {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 100%;
	box-sizing: border-box;
	
}

body {
	font-family: ${setFont.main};
   background: ${setColor.greyColor10};
   color: ${setColor.greyColor1};
	line-height:1.5;
    font-size:0.875rem;

	}

    ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}

h1,
h2,
h3,
h4 {
  letter-spacing:0.1rem ;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: ${setFont.slanted};
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: ${setColor.greyColor5};
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
.section {
  padding: 1rem 0;
  position: relative;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
.loading-img {
  width: 20rem;
  height: 20rem;
  display: block;
  margin: 0 auto;
  margin-top: 10rem;
}
main {
  padding-bottom: 2rem;
}


`;

export default GlobalStyle;
