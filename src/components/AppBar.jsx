import  {StyleSheet,ViewPropTypes,View,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme.js';
import {Link} from 'react-router-native';
import AppBarTab from './AppBarTab.jsx';

const styles = StyleSheet.create({

	container:{

		flexDirection:'row',
		justifyContent:'space-around',
		backgroundColor:theme.appBar.primary,
		paddingTop:Constants.statusBarHeight + 10,
		paddingLeft:10

	},

	scroll:{

		paddingBottom:20

	},

	text:{

		color:theme.appBar.textPrimary

	}

})

const AppBar = () => {

	return (

		<View style={styles.container}>

			<ScrollView style={styles.scroll} horizontal>
				
				<AppBarTab to="/">Repositories</AppBarTab>
				<AppBarTab to="/signin">Sign In</AppBarTab>
				
			</ScrollView>

		</View>

	)

}

export default AppBar;