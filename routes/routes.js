const route = require("express").Router();
const post = require("../model/model");

//get all posts
route.get("/", async (req, res) => {
  try {
    const allPost = await post.find();
    res.json(allPost);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});
//add new post
route.post("/add", async (req, res) => {
  try {
    const newPost = {
      name: req.body.name,
      img: req.body.img,
      summary: req.body.summary,
    };
    const addedPost = await newPost.save();
    res.json(addedPost);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});
//update post
route.patch("/:id", async (req, res) => {
  try {
    const updatePost = await post.findOneAndUpdate(
      { _id: req.params._id },
      { $set: req.body }
    );
    res.json(updatePost);
  } catch (error) {
    res.status(200).json({ message: error });
  }
});
//delete the post
route.delete("/:id", async (req, res) => {
  try {
    const removedPost = await post.remove({ _id: req.params._id });
    res.json(removedPost);
  } catch (err) {
    res.status(200).json({ message: err });
  }
});
module.exports = route;
