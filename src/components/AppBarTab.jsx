import {Link,useLocation} from 'react-router-native';
import StyledText from './StyledText.jsx';
import {StyleSheet} from 'react-native';
import theme from '../theme.js';

const AppBarTab = ({children,to}) => {

	const {pathname} = useLocation(),

	active = pathname === to,

	styles = StyleSheet.create({

		text:{

			color:theme.appBar.textSecondary,
			marginLeft:3,
			marginRight:3,
			paddingHorizontal:10

		},

		active:{

			color:theme.colors.primary

		}

	}),

	stylesActive = [

		styles.text,
		active && styles.active

	];

	return (

		<Link to={to}>

			<StyledText fontWeight="bold" style={stylesActive}>
			
				{children}

			</StyledText>

		</Link>

	)

}

export default AppBarTab;