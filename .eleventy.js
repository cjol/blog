module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    pathPrefix: "/blog",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
