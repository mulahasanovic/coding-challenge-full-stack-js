const Flickr = require('flickr-sdk');
const feeds = new Flickr.Feeds();

const flickrSearch = async (tags) => {
  return feeds.publicPhotos({
    tags: tags || "",
  }).then(function (result) {
    return result.body.items || [];
  }, function (err) {
    console.log(err);
  });
};

module.exports = {
  flickrSearch
};
