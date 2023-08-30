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
                DEFAULT: "#9d174d",
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

/* 
  "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
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
*/