import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// db
import db from './_db.js'

// types
import { typeDefs  } from './schema.js';

const resolvers = {
    Query: {
        games(){
            return db.games
        },
        game(_, args){
            return db.games.find((game) => game.id === args.id)
        },
        authors(){
            return db.authors
        },
        author(_, args){
            return db.authors.find((author) => author.id === args.id)
        },
        reviews(){
            return db.reviews
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        }
    },
    Game: {
        reviews(parent){
            return db.reviews.filter((r) => r.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent){
            return db.reviews.filter((a) => a.author_id === parent.id)
        }
    }
}

// Server Setup
const server = new ApolloServer({
    typeDefs,
    resolvers
    // typeDefs --- definitions of types of data
    // resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log('Server ready at port', 4000);