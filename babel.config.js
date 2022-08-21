module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@navigation": "./src/presentation/navigation",
            "@components": "./src/presentation/components",
            "@screens": "./src/presentation/screens",
            "@assets": "./assets",
            "@styles": "./src/presentation/styles",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["./src"],
        },
      ],
    ],
  };
};
