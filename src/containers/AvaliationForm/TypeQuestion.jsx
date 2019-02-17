import React, { PureComponent } from 'react';
import { RadioGroup, Radio, Checkbox, FormGroup, TextField } from '@material-ui/core';
import AddOption from '../SelectionGroup/AddOption/AddOption.jsx';
import Switch from '../SelectionGroup/Switches/Switches.jsx';

export default class TypeQuestion extends PureComponent {
    render() {
        const { type } = this.props;
        switch(type) {
            case 'text' :
                return <TextField id="nameContact" label="Resposta" style={{
                    padding: '6px 0 20px',
                }} fullWidth disabled />;
            case 'check' :
                return < AddOption Component={Checkbox} ComponentGroup={FormGroup} />;
            case 'radio' :
                return < AddOption Component={Radio} ComponentGroup={RadioGroup} />;
            default : 
                return <div style={{
                    padding: '6px 0 20px',
                    justifyContent: 'center',
                    display: 'flex',
                }} >
                 <Switch />
                </div>;
        }    
    }
}
