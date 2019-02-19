import React, { Component } from 'react';
import { FormControlLabel } from "@material-ui/core";

export default class Options extends Component {
    state = {
        value : ''
    }
    handleChange =  event => this.setState({ value: event.target.value });
    render() {
        const { ComponentType, ComponentGroup, options  } = this.props;
        const { value } = this.state;
        return (
            <ComponentGroup
              aria-label="gender"
              name="gender2"
              style={{
                margin: `12px 20px`,
              }}
              value={value}
              onChange={this.handleChange}
            >{
                options.map( elem =>
                    <FormControlLabel
                        key={elem.value}
                        value={elem.value}
                        control={<ComponentType color="primary" />}
                        label={elem.label}
                        labelPlacement="end"
                    />
                )
            }
            </ComponentGroup>
        );
    }
}
