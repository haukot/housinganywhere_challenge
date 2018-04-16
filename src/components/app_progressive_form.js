import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
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
import UsernameInput from './username_input';

let AppProgressiveForm = () => {
  return (
    <ProgressiveForm activeStep={3}>
        <Step>
            { (nextStep) =>
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
            }
        </Step>
        <Step>
            { (nextStep) =>
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
            }
        </Step>
        <Step>
            { (nextStep) =>
                <div>
                    <UsernameInput />
                    <Button variant="raised" color="primary" onClick={nextStep}>
                        Confirm
                    </Button>
                </div>
            }
        </Step>
        <Step>
            { (nextStep) =>
                <FormControl style={{minWidth: 200}}>
                    <InputLabel> Select something </InputLabel>
                    <Field name="c" component={Select} onChange={nextStep}>
                        <option value='C1'>C1</option>
                        <option value='C2'>C2</option>
                        <option value='C3'>C3</option>
                    </Field>
                </FormControl>
            }
        </Step>
        <Step>
            { (nextStep) =>
                <Button type='submit' variant="raised" color="primary" onClick={nextStep}>
                  Submit
                </Button>
            }
        </Step>
    </ProgressiveForm>
  );
};

AppProgressiveForm = reduxForm({
  form: 'myForm',
  touchOnChange: true
})(AppProgressiveForm)

export default AppProgressiveForm;
