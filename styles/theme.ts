import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	breakpoints: {
		// base: "0em",
		sm: "375px",
		md: "768px",
		lg: "992px",
		xl: "1440px",
		"2xl": "1920px",
	},
	fonts: {
		body: "Poppins",
		heading: "Poppins",
	},
	colors: {
		Light: "#F5F8FA",
		Dark: "#47585B",
		Highlight: "#FFBA08",
	},
	styles: {
		global: {
			body: {
				bg: "#F5F8FA",
				color: "#47585B",
			},
		},
	},
});

export default theme;
