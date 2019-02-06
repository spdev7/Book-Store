const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

const PORT = process.env.PORT || 4000;

//Middleware to interact with graphQL
app.use('/graphql',graphqlHTTP({
   schema
}))

app.listen(PORT,()=>{
    console.log('Server up and running');
});