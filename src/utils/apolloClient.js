import {ApolloClient,InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const createApolloClient = () => new ApolloClient({

	uri:'http://192.168.31.187:4000/graphql',
	cache

})

export default createApolloClient;