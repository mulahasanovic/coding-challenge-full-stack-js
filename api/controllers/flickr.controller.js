const { flickrService } = require('../services');

const flickrSearchGet = async (req, res) => {
  let tags = req.query.tags;

  try {
    const items = await flickrService.flickrSearch(tags);
    res.json(items);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  flickrSearchGet
};
