import React, { Component } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { updateCID, changeValue } from '../../../store/actions/cid';
import { resetForm } from '../../../store/actions/cidCreate';
import FormCID from '../../../components/CID/CID';

class EditCID extends Component {  
  handleSubmit = async () => {
    const {id, name, description, symptoms, causes, interventions, reference} = this.props;
    const response = await this.props.updateCID({ 
        id,
        name, 
        description, 
        symptoms : symptoms.selectedItem, 
        causes : causes.selectedItem, 
        interventions, 
        reference
    });
    if (response)
      this.props.history.goBack();
  }

  render() {
    const { name, description, symptoms, causes, interventions, reference, changeValue, resetForm } = this.props;
    return (
        <FormCID 
          title={'Editar CID'}
          name={name}
          description={description}
          symptoms={symptoms}
          causes={causes}
          interventions={interventions} 
          reference={reference}
          changeValue={changeValue}
          submit={this.handleSubmit}
          back={() => {
            resetForm()
            this.props.history.goBack()
          }}
        />
    );
  }
}

const reducer = 'createCID';
const mapStateToProps = state => ({
  force: state,
  id : state[reducer].get('id'),
  name : state[reducer].get('name'),
  description : state[reducer].get('description'),
  symptoms : {
    selectedItem : state[reducer].get('symptomsSelectedItem'),
    inputValue : state[reducer].get('symptomsInputValue'),
    suggestions : state[reducer].get('symptomsSuggestions')
  },
  causes : {
    selectedItem : state[reducer].get('causesSelectedItem'),
    inputValue : state[reducer].get('causesInputValue'),
    suggestions : state[reducer].get('causesSuggestions')
  },
  interventions : state[reducer].get('interventions'),
  reference : state[reducer].get('reference')
})

const mapDispatchToProps = dispatch => ({
  changeValue : bindActionCreators(changeValue, dispatch),
  updateCID : bindActionCreators(updateCID, dispatch),
  resetForm : bindActionCreators(resetForm, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps )(EditCID);
