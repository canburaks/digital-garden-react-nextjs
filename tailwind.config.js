/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
    mode: "jit",
    darkMode: "class", // or 'media' or 'class'
    content: [
        "./layout/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./components/common/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./pages/api/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./lib/**/*.{js,jsx,ts,tsx,md,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            serif: ["Cormorant"],
        },
        screens: {
            sm: "480px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            keyframes: {
                "text-shimmer": {
                    from: { backgroundPosition: "0 0" },
                    to: { backgroundPosition: "-200% 0" },
                },
            },
            animation: {
                "text-shimmer": "text-shimmer 2.5s ease-out infinite alternate",
            },
            backgroundImage: {
                "hero-pattern":
                    "url('https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260')",
                "footer-texture": "url('/img/footer-texture.png')",
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                5: "5",
                15: "15",
                1000: "1000",
            },
            borderRadius: {
                inherit: "inherit",
            },
            lineHeight: {
                "extra-tight": "1.1",
            },
            transitionTimingFunction: {
                "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
            },
            boxShadow: {
                "inner-xs":
                    "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
                "inner-2xs":
                    "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
                "inner-sm":
                    "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)",
                "inner-md":
                    "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)",
                "inner-lg":
                    "inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)",
                "inner-top-xs":
                    "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.1px 0.3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12)",
                "inner-top-sm":
                    "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.3px 0.4px rgba(0, 0, 0, 0.025), 0 0.9px 1.5px rgba(0, 0, 0, 0.05), 0 3.5px 6px rgba(0, 0, 0, 0.1)",
                "inner-top-md":
                    "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 0.9px 1.5px rgba(0, 0, 0, 0.03), 0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12)",
                "inner-top-lg":
                    "inset 0 1px 0.5px hsla(0, 0%, 100%, 0.075), 0 1.2px 1.9px -1px rgba(0, 0, 0, 0.014), 0 3.3px 5.3px -1px rgba(0, 0, 0, 0.038), 0 8.5px 12.7px -1px rgba(0, 0, 0, 0.085), 0 30px 42px -1px rgba(0, 0, 0, 0.15)",
            },
            opacity: {
                7: ".07",
                8: ".08",
                9: ".09",
                12: ".12",
                15: ".15",
                35: ".35",
                65: ".65",
                85: ".85",
                98: ".98",
            },
            borderWidth: {
                3: "3px",
            },
            outlineWidth: {
                3: "3px",
            },
        },
        colors: {
            light: "#c1c2c5",
            dark: "#1a1b1e",
            primary: "#161617",
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.neutral,
            teal: colors.teal,
            blue: colors.blue,
            indigo: colors.indigo,
            red: colors.rose,
            pink: colors.pink,
            yellow: colors.amber,
            purple: colors.violet,
            purpleVibrant: "#582BE8",
            green: colors.teal,
            primary: {
                DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
                darker: "hsl(var(--color-primary-darker) / <alpha-value>)",
                dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
                light: "hsl(var(--color-primary-light) / <alpha-value>)",
                lighter: "hsl(var(--color-primary-lighter) / <alpha-value>)",
            },
            accent: {
                DEFAULT: "hsl(var(--color-accent) / <alpha-value>)",
                darker: "hsl(var(--color-accent-darker) / <alpha-value>)",
                dark: "hsl(var(--color-accent-dark) / <alpha-value>)",
                light: "hsl(var(--color-accent-light) / <alpha-value>)",
                lighter: "hsl(var(--color-accent-lighter) / <alpha-value>)",
            },
            warning: {
                DEFAULT: "hsl(var(--color-warning) / <alpha-value>)",
                darker: "hsl(var(--color-warning-darker) / <alpha-value>)",
                dark: "hsl(var(--color-warning-dark) / <alpha-value>)",
                light: "hsl(var(--color-warning-light) / <alpha-value>)",
                lighter: "hsl(var(--color-warning-lighter) / <alpha-value>)",
            },
            success: {
                DEFAULT: "hsl(var(--color-success) / <alpha-value>)",
                darker: "hsl(var(--color-success-darker) / <alpha-value>)",
                dark: "hsl(var(--color-success-dark) / <alpha-value>)",
                light: "hsl(var(--color-success-light) / <alpha-value>)",
                lighter: "hsl(var(--color-success-lighter) / <alpha-value>)",
            },
            error: {
                DEFAULT: "hsl(var(--color-error) / <alpha-value>)",
                darker: "hsl(var(--color-error-darker) / <alpha-value>)",
                dark: "hsl(var(--color-error-dark) / <alpha-value>)",
                light: "hsl(var(--color-error-light) / <alpha-value>)",
                lighter: "hsl(var(--color-error-lighter) / <alpha-value>)",
            },
            floor: {
                DEFAULT: "hsl(var(--color-floor) / <alpha-value>)",
                darker: "hsl(var(--color-floor-darker) / <alpha-value>)",
                dark: "hsl(var(--color-floor-dark) / <alpha-value>)",
                light: "hsl(var(--color-floor-light) / <alpha-value>)",
                lighter: "hsl(var(--color-floor-lighter) / <alpha-value>)",
            },
            contrast: {
                lower: "hsl(var(--color-contrast-lower) / <alpha-value>)",
                low: "hsl(var(--color-contrast-low) / <alpha-value>)",
                medium: "hsl(var(--color-contrast-medium) / <alpha-value>)",
                high: "hsl(var(--color-contrast-high) / <alpha-value>)",
                higher: "hsl(var(--color-contrast-higher) / <alpha-value>)",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
    ],
}
