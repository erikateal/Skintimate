const Comment = require("../models/Comment");
const Product = require("../models/Product");

module.exports = {
  createComment: async (req, res) => {
    try {
      //create a new comment
      const comment = await Comment.create({
        body: req.body.body,
      });

      Product.findById(req.params.id, (err, product) => {
        product.comment.push(comment.id);
        product.save();
      });

      console.log("Comment has been added!");
      res.redirect("/dashboard");
    } catch (err) {
      console.log(err);
      res.redirect("/dashboard");
    }
  },
};
