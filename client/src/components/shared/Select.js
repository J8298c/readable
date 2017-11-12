import React from 'react';
import { Select } from 'semantic-ui-react';

const AppSelect = (props) => (
    <Select 
        placeholder={props.selectPlaceholder} options ={props.selectOptions}
        onSelect={props.onOptionSelect}
        />
)
export default AppSelect;