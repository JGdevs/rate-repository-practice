import StyledTextInput from './StyledTextInput.jsx';
import {useField} from 'formik';
import StyledText from '../components/StyledText.jsx';
import {StyleSheet} from 'react-native';

const FormikInputValue = ({name,...props}) => {

	const [field,meta,helpers] = useField(name);

	const styles = StyleSheet.create({

		error:{

			color:'red',
			fontSize:12,
			marginBottom:20,
			marginTop:-5

		}

	}) 

	return (

		<>	

			<StyledTextInput 

				error={meta.error}
				value={field.value}
				onChangeText={value => helpers.setValue(value)}
				{...props}

			/>

			{meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}

		</>	

	)

}

export default FormikInputValue;