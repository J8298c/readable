import React from 'react';
import { Select } from 'semantic-ui-react';
const AppSelect = (props) => (
    <div>
        <Select
            options={props.options} placeholder={props.placeholder} onChange={props.onSelect}
            />
    </div>
)
export default AppSelect;
