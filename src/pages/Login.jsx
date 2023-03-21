import {TextInput,View,Button,StyleSheet} from 'react-native';
import {Formik} from 'formik'
import FormikInputValue from '../components/FormikInputValue.jsx';
import {loginValidationSchema} from '../validationSchemas/login.js';

const initialValues = {

	email:'',
	password:''

}

const styles = StyleSheet.create({

	form: {

		margin:12

	}

})


const Login = () => {

	return (

		<Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={(values) => console.log(values)}>

			{({handleChange,handleSubmit,values}) => {

				return (

					<View style={styles.form}>

						<FormikInputValue name="email" placeholder="E-mail"/>

						<FormikInputValue name="password" placeholder="Password" secureTextEntry/>

						<Button onPress={handleSubmit} title="Log in"/>

					</View>

				)

			}}			

		</Formik>

	)

}

export default Login;

