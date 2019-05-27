const express = require("express");
const Link = require("../models/Link");
const { isLoggedIn } = require("../middlewares");
const getTitle = require("get-title-at-url");
const router = express.Router();

/* Todo:
- See if link already exist 
- Populate on get request
*/

router.get("/", (req, res, next) => {
  Link.find()
    .then(links => {
      res.json(links);
    })
    .catch(err => next(err));
});

router.post("/", isLoggedIn, (req, res, next) => {
  console.log(req.body, "body");
  let { url, description, type } = req.body;
  let user = req.user;
  getTitle(url, title => {
    Link.create({
      url,
      title,
      description,
      type,
      user
    })
      .then(link => {
        res.json({
          success: true,
          link
        });
      })
      .catch(err => next(err));
  });
});

module.exports = router;
