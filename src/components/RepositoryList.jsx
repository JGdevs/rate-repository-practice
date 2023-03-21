import {useState,useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';
import RepositoryItem from './RepositoryItem.jsx';
import useRepositories from '../hooks/useRepositories.jsx';

const RepositoryList = () => {

	const {repositories} = useRepositories()	

	return (

		<FlatList data={repositories} ItemSeparatorComponent={() => <Text></Text>} renderItem={({item:repo}) => (

			<RepositoryItem {...repo}/>
			
		)}>
			
		</FlatList>

	)

}

export default RepositoryList;