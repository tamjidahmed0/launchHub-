import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			textColor: '#FAFAFA',
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
  			}
  		},
  		backgroundImage: {
  			buttonGradient: 'linear-gradient(to right, #2B59FF, #BB2BFF)',
  			textGradient: 'linear-gradient(to right, #FFC947, #FC6739)',
  			'linear-dark': 'linear-gradient(180deg, #171924 0%, rgba(23, 25, 36, 0) 100%)',
  			'radial-purple': 'radial-gradient(closest-side, rgba(159, 54, 242, 0.1), transparent)',
  			'radial-orange': 'radial-gradient(closest-side, rgba(255, 207, 115, 0.2), transparent)',
  			'radial-pink': 'radial-gradient(closest-side, rgba(242, 54, 144, 0.1), transparent)',
  			'radial-blue': 'radial-gradient(closest-side, rgba(54, 107, 242, 0.2), transparent)',
  			'gradient-hover': 'linear-gradient(94.25deg, #CB5CFF 0%, #5C7FFF 100%)',
  			buttonBorderGradient: 'linear-gradient(94.25deg, #2B59FF 0%, #BB2BFF 100%)'
  		},
  		fontFamily: {
  			outfit: 'var(--font-outfit)',
  			inter: 'var(--font-inter)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
