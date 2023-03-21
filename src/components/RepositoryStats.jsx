import StyledText from './StyledText.jsx';
import {View,StyleSheet} from 'react-native';

const RepositoryStats = (props) => {

	const styles = StyleSheet.create({

		flexContainer:{

			flexDirection:'row',
			justifyContent:'space-around'

		}

	});

	const parseThousands = (value) => (value >= 1000) ? `${(Math.round(value / 100) / 10)}k` : String(value);

	return (

		<View style={styles.flexContainer}>

			<View>

				<StyledText fontWeight="bold">Stars</StyledText>
				<StyledText align="center">{parseThousands(props.stargazersCount)}</StyledText>	

			</View>

			<View>

				<StyledText fontWeight="bold">Forks</StyledText>
				<StyledText align="center">{parseThousands(props.forksCount)}</StyledText>

			</View>

			<View>

				<StyledText fontWeight="bold">Review</StyledText>
				<StyledText align="center">{parseThousands(props.reviewCount)}</StyledText>	

			</View>

			<View>

				<StyledText fontWeight="bold">Rating</StyledText>
				<StyledText align="center">{parseThousands(props.ratingAverage)}</StyledText>	

			</View>

		</View>

	)

}

export default RepositoryStats;