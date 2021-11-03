const Post = require("./post");
const resolvers = {
  Query: {
    hello: () => {
      return "hello world";
    },

    getAll: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    createPost: async (parent, args, contex, info) => {
      const { title, description } = args.post;
      const post = await new Post({ title, description }).save();
      return post;
    },

    updatePost: async (parent, args, contex, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return post;
    },

    deletePost: async (parent, args, contex, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Post deleted successfully";
    },
  },
};

module.exports = resolvers;
