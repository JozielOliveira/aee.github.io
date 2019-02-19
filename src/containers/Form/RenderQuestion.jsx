import React, { PureComponent } from 'react';
import { RadioGroup, Radio, Checkbox, FormGroup, TextField } from '@material-ui/core';
import RenderQuestion from '../SelectionGroup/RenderSelect/Options.jsx';
import Switch from '../SelectionGroup/Switches/Switches.jsx';

export default class TypeQuestion extends PureComponent {
    
    render() {
        const { type, options } = this.props;
        switch(type) {
            case 'text' :
                return <TextField id="nameContact" label="Resposta" style={style.textField} fullWidth disabled />;
            case 'check' :
                return < RenderQuestion ComponentType={Checkbox} ComponentGroup={FormGroup} options={options}/>;
            case 'radio' :
                return < RenderQuestion ComponentType={Radio} ComponentGroup={RadioGroup} options={options}/>;
            default : 
                return <Switch style={style.switch} />;
        }    
    }
}

const style = {
    switch : {
        padding: '6px 0 20px',
        justifyContent: 'center',
        display: 'flex',
    },
    textField : {
        padding: '6px 0 20px',
        margin: '10px'
    }
}