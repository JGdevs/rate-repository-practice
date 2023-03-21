import {Platform} from 'react-native';

const theme = {

	appBar: {
    primary: '#24292e',
    textSecondary: '#999',
    textPrimary: '#fff'
  },

	colors: {

		textPrimary:'#24292e',
		textSecondary:'#586069',
		primary:'#0096C7',
		white:'#f9f9f9'


	},

	fontSizes:{

		body: 14,
		subHeading:16

	},

	fonts:{

		main:Platform.select({

			ios:'Arial',
			android:'Roboto',
			default:'System'

		})

	},

	fontWeights:{

		normal:'400',
		bold:'700'

	}

}

export default theme;