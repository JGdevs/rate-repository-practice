import {View,Text,StyleSheet,Image} from 'react-native';
import StyledText from './StyledText.jsx';
import RepositoryStats from './RepositoryStats.jsx';
import RepositoryHeader from './RepositoryHeader.jsx';

const styles = StyleSheet.create({

	container: {

		padding:20,
		paddingVertical:5

	}
})

const RepositoryItem = (props) => (

		<View style={styles.container} key={props.id}>

			<RepositoryHeader {...props}/>
			<RepositoryStats {...props}/>
			
		</View>

)

export default RepositoryItem;