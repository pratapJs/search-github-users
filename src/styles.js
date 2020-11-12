import styled from "styled-components";

export const setColor = {
    /*dark shades of primary color */
	primaryColor1: " hsl(185, 91%, 17%)",
	primaryColor2: " hsl(185, 84%, 25%)",

	primaryColor3: "hsl(185, 81%, 29%)",
    primaryColor4: "hsl(185, 77%, 34%)",

  /* primary/main color */
  primaryColor5: "hsl(185, 62%, 45%)",
  /* lighter shades of primary color */
  primaryColor6: "hsl(185, 57%, 50%)",
  primaryColor7: "hsl(184, 65%, 59%)",
  primaryColor8: "hsl(184, 80%, 74%)",
  primaryColor9: "hsl(185, 94%, 87%)",
  primaryColor10: "hsl(186, 100%, 94%)",
  /* darkest grey - used for headings */
  greyColor1: "hsl(209, 61%, 16%)",
  greyColor2: "hsl(211, 39%, 23%)",
  greyColor3: "hsl(209, 34%, 30%)",
  greyColor4: "hsl(209, 28%, 39%)",
  /* grey used for paragraphs */
  greyColor5: "hsl(210, 22%, 49%)",
  greyColor6: "hsl(209, 23%, 60%)",
  greyColor7: "hsl(211, 27%, 70%)",
  greyColor8: "hsl(210, 31%, 80%)",
  greyColor9: "hsl(212, 33%, 89%)",
  greyColor10: "#f1f5f8",
  whiteColor: "#fff",
  redDarkColor: "hsl(360, 67%, 44%)",
  redLightColor: "hsl(360, 71%, 66%)",
  greenDarkColor: "hsl(125, 67%, 44%)",
  greenLightColor: "hsl(125, 71%, 66%)",
 blackColor: "#222",
};
export const setTransition={
  transition: "all 0.3s linear",
}

export const setFont = {
	main: "font-family: 'Raleway', sans-serif;",
	slanted: "font-family: 'Open Sans Condensed', sans-serif;",
};

export const Button = styled.button`
	text-transform: uppercase;
  background: ${setColor.primaryColor5};
  color: ${setColor.primaryColor10};
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.1rem;
  display: inline-block;
  font-weight: 400;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
	&:hover {
        background: ${setColor.primaryColor8};
  color: ${setColor.primaryColor1};
	}
`;


