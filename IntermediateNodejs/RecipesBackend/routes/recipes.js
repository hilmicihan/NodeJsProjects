var recipes = require("../recipes.json");
var router = require("express").Router();
var getAll = async function (req, resp) {
  let page = Number(req.query.page || 1);
  let limit = Number(req.query.limit || 3);

  let start = (page - 1) * limit;
  let end = start+ limit;
  let result = recipes.slice(start, end);
  resp.status(200).send(result);
  return;
};

router.get("/", getAll);
module.exports = router;
