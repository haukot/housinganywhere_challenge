import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';

// TODO use css-modules
import './index.css'

import {
  FormControl,
  FormGroup,
  FormControlLabel,
} from 'material-ui/Form';
import { CircularProgress } from 'material-ui/Progress';
import MaterialSwitch from 'material-ui/Switch';
import Button from 'material-ui/Button';
import { InputLabel } from 'material-ui/Input';

import {
  RadioGroup,
  Select,
  TextField,
} from 'redux-form-material-ui'

import MaterialCheckboxGroup from '../../components/CheckboxGroup/MaterialCheckboxGroup';
import ProgressiveForm from '../../components/ProgressiveForm';
import Step from '../../components/ProgressiveForm/Step';
import { submit } from '../../utils/api';

class AppProgressiveForm extends Component {
  step1(nextStep) {
    const options = [{ label: 'A1', value: 'A1' }, { label: 'A2', value: 'A2' }]
    return (
        <FormControl component="fieldset">
            <Field
                component={MaterialCheckboxGroup}
                name="a"
                options={options}
                onChange={nextStep}
            />
        </FormControl>
    );
  }

  step2(nextStep) {
    return (
        <FormControl component="fieldset">
            <FormGroup row>
                <Field name="b" component={RadioGroup} onChange={nextStep}>
                        <FormControlLabel
                            control={<MaterialSwitch type='radio'/>}
                            value="B1"
                            label="B1"
                            />
                        <FormControlLabel
                            control={<MaterialSwitch type='radio'/>}
                            value="B2"
                            label="B2"
                            />
                </Field>
            </FormGroup>
        </FormControl>
    );
  }

  step3(nextStep) {
    return (
        <div>
            <Field className="control" name="username" component={TextField} label="Username"/>
            <Button variant="raised" color="primary" onClick={nextStep}>
                Confirm
            </Button>
        </div>
    );
  }

  step4(nextStep) {
    return (
        <FormControl className="control">
            <InputLabel> Select something </InputLabel>
            <Field name="c" component={Select} onChange={nextStep}>
                <option value='C1'>C1</option>
                <option value='C2'>C2</option>
                <option value='C3'>C3</option>
            </Field>
        </FormControl>
    );
  }

  finalStep(nextStep) {
    const { handleSubmit, submitting, submitSucceeded, error } = this.props;
    return (
      <div>
          <Button variant="raised"
                  color="primary"
                  onClick={handleSubmit(submitForm)}
                  disabled={submitting}
                  >
          {submitting ? <CircularProgress size={20} /> : 'Save'}
        </Button>
        { submitSucceeded && <strong> All is okay </strong> }
        { error && <strong> { error } </strong> }
      </div>
    );
  }

  render() {
    const steps = [this.step1, this.step2, this.step3, this.step4, this.finalStep]
    // TODO мб можно вообще выкинуть компонент Step, рендерить текущую функцию
    return (
      <ProgressiveForm activeStep={5}>
          { steps.map((step) => <Step key={step} render={step.bind(this)} />) }
      </ProgressiveForm>
    );
  }
};

const submitForm = (values) => {
  return submit(values).catch((err) => {
    throw new SubmissionError({_error: err.message})
  });
}

AppProgressiveForm = reduxForm({
  form: 'myForm',
  touchOnChange: true,
  onSubmit: submitForm
})(AppProgressiveForm)

export default AppProgressiveForm;
