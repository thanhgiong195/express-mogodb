const Post = require('../model/post');

const getPost = async (req, res) => {
  const { title } = req.params;

  try {
    const post = await Post.find({
      title,
    });

    if (post) {
      return res.json({
        post,
      });
    }

    return res.json({
      message: 'post not found',
    });
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (req, res) => {
  const { title } = req.body;
  const user = req.user;

  if (!title) {
    return res.json({
      message: 'title is require!',
    });
  }

  try {
    const newPost = await Post.create({
      title,
      author_id: user.user_id,
    });

    res.json({
      newPost,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPost,
  getPost,
};
