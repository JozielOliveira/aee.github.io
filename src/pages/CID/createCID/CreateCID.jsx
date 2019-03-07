import React, { Component } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { changeValueTEXT, saveCID } from '../../../store/actions/cidCreate';
import FormCID from '../../../components/CID/CID';

class createCID extends Component {  
  handleSubmit = async () => {
    const {name, description, symptoms, causes, interventions, reference} = this.props;
    const response = await this.props.save(name, description, symptoms.selectedItem, causes.selectedItem, interventions, reference);
    if (response)
      this.props.history.goBack();
  }

  render() {
    const { name, description, symptoms, causes, interventions, reference, changeValue } = this.props;
    return (
      <FormCID 
          title={'Criar CID'}
          name={name}
          description={description}
          symptoms={symptoms}
          causes={causes}
          interventions={interventions} 
          reference={reference}
          changeValue={changeValue}
          submit={this.handleSubmit}
          back={() => this.props.history.goBack()}
        />
    );
  }
}

const reducer = 'createCID';
const mapStateToProps = state => ({
  force: state,
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
  changeValue : bindActionCreators(changeValueTEXT, dispatch),
  save : bindActionCreators(saveCID, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps )(createCID);
