const presets = [
    [
        "@babel/env",
        {
            targets: {
                browsers: [
                    "last 4 versions"
                ] 
            },
            useBuiltIns: "usage",
        },
    ],
    ["@babel/typescript"]
];

module.exports = { presets };