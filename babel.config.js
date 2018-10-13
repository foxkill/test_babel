const presets = [
    [
        "@babel/env",
        {
            targets: {
                browsers: [
                    "last 4 versions"
                ] 
            },
            useBuiltIns: "usage"
        },
    ],
    ["@babel/typescript"]
];

const plugins = [];

module.exports = { presets, plugins };