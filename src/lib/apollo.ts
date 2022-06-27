import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r2pn820j1k01ywaszc6ub6/master',
    cache: new InMemoryCache()
})







