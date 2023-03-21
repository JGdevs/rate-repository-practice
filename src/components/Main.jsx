import {Text,View,StyleSheet} from 'react-native';
import RepositoryList from './RepositoryList.jsx'; 
import AppBar from './AppBar.jsx';
import {Route,Routes} from 'react-router-native';
import Login from '../pages/Login.jsx';

const Main = () => {

	return (

		<View style={{flex:1}}>

			<AppBar/>
			<Routes>
					
				<Route path="/" element={<RepositoryList/>} exact/>
				<Route path="/signin" element={<Login/>} exact/>

			</Routes>

		</View>

	)

}

export default Main;