import React, { PureComponent } from 'react';

import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptLocale from 'date-fns/locale/pt-BR';

export default class DatePickerComponent extends PureComponent {
    state = {
        selectedDate: new Date(),
    }

    handleDateChange = date => this.setState({ selectedDate: date });

    render() {
        const { selectedDate } = this.state;
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                <DatePicker
                keyboard
                label="Data de Nacimento"
                format="dd/MM/yyyy"
                placeholder={`${Date.now}`}
                mask={value =>
                    value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : []
                }
                value={selectedDate}
                onChange={this.handleDateChange}
                disableOpenOnEnter
                animateYearScrolling={false}
                />
            </MuiPickersUtilsProvider>
        );
    }
}
