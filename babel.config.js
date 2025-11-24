// babel.config.js
module.exports = function (api) {
    api.cache(true);
    return {
        // 1. Tell Expo/Babel to compile JSX with NativeWind
        presets: [
            ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
            'nativewind/babel',
        ],

        // 2. Extra plugins Expo expects
        plugins: [
            'react-native-reanimated/plugin',

        ],

    };
};


