module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("css");

  return {
   
    templateFormats: ["njk", "html", "md", "liquid", "js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};