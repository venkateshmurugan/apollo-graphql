const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;


/*const gql = require("graphql-tag")

const typeDefs = gql`
#Schema definition
"Represents the track"

type Query {
    "Get tracks array for the home page"
    tracksForHome:[Track!]!
}

type Track{
    "unique identifier of the track"
    id:ID!
    "name of the track"
    name:String!
    "author of the track"
    author:Author!
    "URL of the thumbnail picture"
    thumbnail:String
    "length of the training video"
    length:Int
    "number of modules"
    modulesCount:Int
}

type Author{
    "unique identifier of the author"
    id:ID!
    "name of the author"
    name:String!
    "URL of the photo of the author"
    photo:String
}

`;

module.exports = typeDefs;*/