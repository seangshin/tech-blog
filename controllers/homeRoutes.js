const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');
const path = require("path");//debug

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    //Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    //res.status(200).json(posts); //debug
    res.sendFile(path.join(__dirname, '../public/login.html'));//debug
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;