const presets = [
  "@babel/env",
  "@babel/preset-react"
];

const plugins = [
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ["@babel/plugin-proposal-class-properties", { "loose" : true }]
]

module.exports = {
  presets,
  plugins
};
