// // tailwind.config.js
//
// module.exports = {
//     content: [
//         "./App.{js,jsx,ts,tsx}",
//         "./app/**/*.{js,jsx,ts,tsx}",  // Include all JS, JSX, TS, and TSX files in the app folder
//         "./components/**/*.{js,jsx,ts,tsx}",  // Include all JS, JSX, TS, and TSX files in the components folder]
//         "./app/(tabs)/meditate.tsx"
//     ],
//     theme: {
//         extend: {
//             fontFamily: {
//                 rmono: ['Roboto-Mono', 'sans-serif']
//             }
//         },
//     },
//     plugins: [],
// }
//
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    // this pulls in NativeWind's React Native preset
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                rmono: ["Roboto-Mono", "sans-serif"],
            },
        },
    },
    plugins: [],
};
