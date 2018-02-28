const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = graphql;

const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: {
    id: { type: GraphQLInt },
    user: { type: GraphQLString },
    message: { type: GraphQLString },
    content: { type: GraphQLList }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    post: {
      type: PostType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        fetch(`http://localhost:3000/api/posts/${args.id}`)
          .then(response => console.log(response))
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});