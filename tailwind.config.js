import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#0c496d",
                secondary: "#0c496d", //blue
                dark: "rgb(17,24,39)", //dark navy blue
                light: "#f8fafc", // slate-50
            },
            boxShadow: {
                listShadow: "2px 2px 0 0 aqua",
            },
        },
    },

    plugins: [forms],
};
