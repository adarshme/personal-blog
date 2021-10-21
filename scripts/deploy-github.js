const ghpages = require("gh-pages");

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/InfernoCoder11/blog.git",
  },
  () => {
    console.log("Deploy Complete!");
  }
);
