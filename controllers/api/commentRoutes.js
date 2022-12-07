const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all comments and JOIN with user data
      const commentData = await Comment.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      //Serialize data so the template can read it
      const comments = commentData.map((comment) => comment.get({ plain: true }));
      console.log(comments);
      res.status(200);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    //Serialize data so the template can read it
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    console.log(comments);
    res.status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

