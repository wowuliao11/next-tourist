export default {
    "purple-dark": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
                50: "#fdf2f8",
                100: "#fce7f3",
                200: "#fbcfe8",
                300: "#f9a8d4",
                400: "#f472b6",
                500: "#ec4899",
                600: "#db2777",
                700: "#be185d",
                800: "#9d174d",
                900: "#831843",
                DEFAULT: "#ec4899",
                foreground: "#ffffff",
            },
            focus: "#ec4899",
        },
        layout: {
            disabledOpacity: "0.3",
            radius: {
                small: "4px",
                medium: "6px",
                large: "8px",
            },
            borderWidth: {
                small: "1px",
                medium: "2px",
                large: "3px",
            },
        },
    },
}

/*#fdf2f8
100
#fce7f3
200
#fbcfe8
300
#f9a8d4
400
#f472b6
500
#ec4899
600
#db2777
700
#be185d
800
#9d174d
900
#831843
950
#500724 */