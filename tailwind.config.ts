import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
	container: {
		center: true,
		padding: "1rem",
	  },
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			  current: "currentColor",
			  transparent: "transparent",
			  white: "#FFFFFF",
			  black: "#121723",
			  dark: "#00040F",
			  primary: "#4A6CF7",
			  yellow: "#FBB040",
			  "bg-color-dark": "#00040F",
			  "body-color": {
				DEFAULT: "#788293",
				dark: "rgba(255,255,255,0.7)",
			  },
			  stroke: {
				stroke: "#E3E8EF",
				dark: "#353943",
			  },
			  gray: {
				...colors.gray,
				dark: "#00040F",
				light: "#F0F2F9",
			  },
			  p1: "#fcd34d",
        p2: "#3C52D9",
        p3: "#C8EA80",
        p4: "#EAEDFF",
        p5: "#C4CBF5",
        s1: "#1c082780",
        s2: "#0C1838",
        s3: "#334679",
        s4: "#1959AD",
        s5: "#263466",
        
  		},
		  zIndex: {
			1: "1",
			2: "2",
			4: "4",
		  },
		  boxShadow: {
			100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
			200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF",
			300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
			400: "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)",
			500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)",
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
			  14: "14px",
			  20: "20px",
			  40: "40px",
			  half: "50%",
			  "7xl": "40px",
  		},
		  spacing: {
			"1/5": "20%",
			"2/5": "40%",
			"3/5": "60%",
			"4/5": "80%",
			"3/20": "15%",
			"7/20": "35%",
			"9/20": "45%",
			"11/20": "55%",
			"13/20": "65%",
			"15/20": "75%",
			"17/20": "85%",
			"19/20": "95%",
			22: "88px",
			100: "100px",
			512: "512px",
			330: "330px",
			388: "388px",
			400: "400px",
			440: "440px",
			640: "640px",
			960: "960px",
			1230: "1230px",
		  },
		animation: {
			shimmer: "shimmer 2s linear infinite",
			scroll:
			  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		},
		keyframes: {
			shimmer: {
			  from: {
				"backgroundPosition": "0 0"
			  },
			  to: {
				"backgroundPosition": "-200% 0"
			  }
			},
			scroll: {
			  to: {
				transform: "translate(calc(-50% - 0.5rem))",
			  },
		},
  		},
	}
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
export default config;
