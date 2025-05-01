import express from 'express';

const app = express();

let movieId = 4;
const movies = [
    { id: 1, title: "The Unbearable Weight of Massive Talent", actorIds: [1] },
    { id: 2, title: "Pig", actorIds: [1] },
    { id: 3, title: "One Flew Over the Cuckoo's Nest", actorIds: [2] },
    { id: 4, title: "Junior", actorIds: [2, 3] },
];
 
let actorId = 3;
const actors = [
    { id: 1, name: "Nicolas Cage" },
    { id: 2, name: "Danny DeVito" },
    { id: 3, name: "Arnold Schwarzenegger" },
];

import { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull } from "graphql";

const ActorType = new GraphQLObjectType({
    name: "Actor",
    description: "An actor",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        movies: { 
            type: new GraphQLList(MovieType),
            resolve: (actor) => {
                return movies.filter(movie => movie.actorIds.includes(actor.id));
            }
        }
    })
});

const MovieType = new GraphQLObjectType({
    name: "Movie",
    description: "A movie",
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        actorIds: { type: new GraphQLList(GraphQLInt) },
        actors: {
            type: new GraphQLList(ActorType),
            description: "Get all the actors that belong to a movie",
            resolve: (movie) => {
                return movie.actorIds.map(actorId => actors.find(actor => actor.id === actorId));
            }
        }
    }
});

const RootMutationType = new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
        addMovie: {
            type: MovieType,
            description: "Create a new movie",
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                actorIds: { type: new GraphQLNonNull(new GraphQLList(GraphQLInt)) }
            },
            resolve: (parent, args) => {
                const foundActors = args.actorIds.map(actorId => 
                        actors.find(actor => actor.id === actorId)
                );

                if (foundActors.includes(undefined)) return;

                const movie = {
                    id: ++movieId,
                    title: args.title,
                    actorIds: args.actorIds
                };

                movies.push(movie);
                return movie;
            }
        },
        addActor: {
            type: ActorType,
            description: "Create a new actor",
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, { name }) => {
                const actor = {
                    id: ++actorId,
                    name
                };

                actors.push(actor);
                return actor;
            }
        }
    }
});

const RootQueryType = new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            movies: {
                type: new GraphQLList(MovieType),
                description: "All movies",
                resolve: () => movies
            },
            actors: {
                type: new GraphQLList(ActorType),
                description: "All actors",
                resolve: () => actors
            },
            actorById: {
                type: ActorType,
                description: "Get a single actor",
                args: {
                    id: { type: new GraphQLNonNull(GraphQLInt) }
                },
                resolve: (parent, args) => {
                    return actors.find(actor => actor.id === args.id);
                }
            }
        }
});

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

import { graphqlHTTP } from 'express-graphql';
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
