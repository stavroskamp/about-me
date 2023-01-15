const withImages = require("next-images");

module.exports = {
  images: {
    disableStaticImages: true,
    loader: "akamai",
    path: "",
  },
  ...withImages(),
};
