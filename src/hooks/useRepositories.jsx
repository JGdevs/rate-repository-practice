import {useState,useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {GET_REPOSITORIES} from '../graphql/queries.js';

const useRepositories = () => {

	const {data = {},loading,refetch} = useQuery(GET_REPOSITORIES),

	{repositories = null} = data, 

	repositoriesNodes = (repositories) ? repositories.edges.map(edge => edge.node) : [];

	return {loading,repositories:repositoriesNodes,refetch}

}

export default useRepositories;