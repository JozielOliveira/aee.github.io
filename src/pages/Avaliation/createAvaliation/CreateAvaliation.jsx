import React, { PureComponent } from 'react';
import { connect } from'react-redux';
import { bindActionCreators } from 'redux';
import { saveAvaliation } from './../../../store/actions/avaliationCreate';
import { Description, Questions, Review } from '../../../containers/AvaliationForm';
import StepByStep from "../../../components/StepByStep/StepByStep";

class CreateStudent extends PureComponent {
render() {
    const { name, description, target_audience, valueSelect, question, score, form, saveAvaliation } = this.props;
    return (
      <StepByStep 
        title='Nova Avaliação'
        steps={['Descrição', 'Questões', 'Revisão']}
        getStepContent={
          (activeStep) => {
            switch (activeStep) {
              case 0:
                return <Description name={name} description={description} target_audience={target_audience} />;
              case 1:
                return <Questions valueSelect={valueSelect} question={question} form={form} />;
              case 2:
                return <Review form={form}/>;
              default:
                throw new Error('Unknown step');
            }
          }
        }
        save={() => saveAvaliation(name, description, form, score, target_audience.selectedItem )}
        back={() => this.props.history.goBack()}
      />
    );
  }
}

const reducer = 'createAvaliation'
const mapStateToProps = state => ({
  force: state,
  name : state[reducer].get('name'),
  description : state[reducer].get('description'),
  target_audience : {
    selectedItem : state[reducer].get('target_audienceSelectedItem'),
    inputValue : state[reducer].get('target_audienceInputValue'),
    suggestions : state[reducer].get('target_audienceSuggestions')
  },
  valueSelect : state[reducer].get('valueOption'),
  question :  state[reducer].get('question'),
  form: state[reducer].get('form'),
  score : state[reducer].get('score')
})

const mapDispatchToProps = dispatch => ({
  saveAvaliation : bindActionCreators(saveAvaliation, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps )(CreateStudent);
