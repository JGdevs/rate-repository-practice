import {View,StyleSheet,Image,Platform} from 'react-native';
import StyledText from './StyledText.jsx';
import theme from '../theme.js';

const RepositoryHeader = ({ownerAvatarUrl,fullName,language,description}) => {

 const styles = StyleSheet.create({

 	imageContainer:{

 		paddingRight:10

 	}, 

 	image:{

		height:48,
		width:48,
		borderRadius:4

	},

	headerContainer:{

		flexDirection:'row',

	},

	headerContent:{

		flex:1,
		paddingLeft:4

	},

	language: {

		padding:4,
		color:theme.colors.white,
		backgroundColor:Platform.select({

			android:theme.colors.primary,
			ios:'orange',
			default:'purple'

		}),
		alignSelf:'flex-start',
		marginVertical:4,
		borderRadius:4,
		

	}


 })

	return (

		<View style={styles.headerContainer}>

			<View>
				
				<Image style={styles.image} source={{uri:ownerAvatarUrl}}/>

			</View>						

			<View style={styles.headerContent}>
				
				<StyledText fontSize="subheading" fontWeight="bold">Fullname:{fullName}</StyledText>
				<StyledText>Description:{description}</StyledText>
				<StyledText style={styles.language}>{language}</StyledText>

			</View>

		</View>

	)

}

export default RepositoryHeader;