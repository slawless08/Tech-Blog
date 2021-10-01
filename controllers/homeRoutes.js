const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const getBlogs = await Blog.findAll({
      attributes: [ 'id', 'text_content', 'title'],
      include: [
        { model: User, attributes: ['name']},
        { model: Comment, attributes: ['text_content', 'user_id']},
      ]
    });

    const blogs = getBlogs.map((data) => data.get({ plain: true }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post-blog', withAuth, async (req, res) => {
  try{
    res.render('addBlog');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
