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
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
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
