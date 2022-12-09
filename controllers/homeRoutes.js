const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [{ model: User }],
    });
    //Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment }],
    });

    const post = postData.get({ plain: true });

    // const commentData = await Comment.findAll({
    //   include: [{ model: User }, { model: Post }],
    // });

    // const comments = commentData.map((comment) => comment.get({ plain: true }));

    // console.log('post', post);//debug

    // console.log(" comments", comments);
    
    // const matchComments = comments.map((comment) => {
    //   if (req.session.user_id == comment.user.id) {
    //     return comment.user.name;
    //   }
    // });

    // console.log(" filtered comments", matchComments);

    //check if post belongs to user
    let match = false;
    if (req.session.user_id == post.user_id) {
      match = true;
    }

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in,
      match
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post },],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;