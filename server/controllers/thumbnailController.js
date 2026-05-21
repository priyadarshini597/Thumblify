const Thumbnail = require("../models/Thumbnail");

// ALLOWED_IMAGE_HOSTS → Set of permitted hostnames for proxy

const getUserThumbnails = async (req, res, next) => {
  try {
    // find thumbnails by req.user._id, sorted by createdAt desc
    // return 200 → { success, thumbnails }
  } catch (error) {
    next(error);
  }
};

const deleteThumbnail = async (req, res, next) => {
  try {
    // findOneAndDelete by req.params.id and req.user._id
    // if not found → 404 "Thumbnail not found"
    // return 200 → { success, message: "Thumbnail deleted" }
  } catch (error) {
    next(error);
  }
};

const getCommunityFeed = async (req, res, next) => {
  try {
    // find public thumbnails, sorted by createdAt desc, limit 24, populate userId with name
    // trendingIdeas → static array of 5 idea strings
    // return 200 → { success, thumbnails, trendingIdeas }
  } catch (error) {
    next(error);
  }
};

const proxyThumbnailImage = async (req, res, next) => {
  try {
    // if no url in req.query → 400 "Image URL is required"
    // parse url → if invalid → 400 "Invalid image URL"
    // if protocol not http/https → 400 "Unsupported image protocol"
    // if hostname not in ALLOWED_IMAGE_HOSTS → 400 "Image host is not allowed"
    // fetch the url → if not ok → return upstream status
    // buffer response, set Content-Type and Cache-Control headers
    // return buffered image
  } catch (error) {
    next(error);
  }
};

const likeThumbnail = async (req, res, next) => {
  try {
    // findByIdAndUpdate req.params.id → $inc likes by 1
    // if not found → 404 "Thumbnail not found"
    // return 200 → { success, likes: thumbnail.likes }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserThumbnails,
  deleteThumbnail,
  getCommunityFeed,
  proxyThumbnailImage,
  likeThumbnail
};