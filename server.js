const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const rootValue = {
    hello: () => 'Hello World!'
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));

app.listen(3333,()=>{
    console.log('🔥 Server is running on port http://localhost:3333/graphql');
})