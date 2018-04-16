import React, { Component } from 'react';

import { reduxForm, Field, SubmissionError } from 'redux-form';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import { CircularProgress } from 'material-ui/Progress';
import MaterialSwitch from 'material-ui/Switch';
import Button from 'material-ui/Button';
import { InputLabel } from 'material-ui/Input';

import {
  Checkbox,
  RadioGroup,
  Select,
  TextField,
} from 'redux-form-material-ui'

import ProgressiveForm from './progressive_form';
import Step from './progressive_form/step';
import { submit } from '../utils/api';

class AppProgressiveForm extends Component {
  step1(nextStep) {
    return (
        <FormControl component="fieldset">
            <FormControlLabel
                control={<Field name="A1" component={Checkbox}/>}
                onChange={nextStep}
                label="A1"
            />
            <FormControlLabel
                control={<Field name="A2" component={Checkbox}/>}
                onChange={nextStep}
                label="A2"
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
            <Field name="username" component={TextField} label="Username"/>
            <Button variant="raised" color="primary" onClick={nextStep}>
                Confirm
            </Button>
        </div>
    );
  }

  step4(nextStep) {
    return (
        <FormControl style={{minWidth: 200}}>
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
  // TODO format values to json
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
