const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/post-blog', async (req, res) => {
    try{
        const addBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(addBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;