import React from 'react';
import { Select } from 'semantic-ui-react';

const AppSelect = (props) => (
	<Select placeholder='Sort Posts'
		options={props.options} />
)

export default AppSelect;