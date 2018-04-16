import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';
import { RadioGroup } from 'material-ui/Radio';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';

import ProgressiveForm from './progressive_form';
import Step from './progressive_form/step';

  state = {
    bstep: null
  }

    const handleBstep = (event) => {
      this.setState({ bstep: event.target.value });
    }

const AppProgressiveForm = () => {
  return (
        <ProgressiveForm activeStep={5}>
            <Step>
                { (nextStep) =>
                    <FormControl component="fieldset">
                        <FormControlLabel
                            control={<Checkbox onChange={nextStep} value="A1" />}
                            label="A1"
                        />
                        <FormControlLabel
                            control={<Checkbox onChange={nextStep} value="A2" />}
                            label="A2"
                        />
                    </FormControl>
                 }
            </Step>
            <Step>
                { (nextStep) =>
                    <FormControl component="fieldset">
                        <FormGroup row>
                            <RadioGroup
                                value={this.state.bstep}
                                name="bstep"
                                onChange={(e) => { handleBstep(e); nextStep()}}>
                                    <FormControlLabel
                                        control={<Switch type='radio'/>}
                                        value="B1"
                                        label="B1"
                                        />
                                    <FormControlLabel
                                        control={<Switch type='radio'/>}
                                        value="B2"
                                        label="B2"
                                        />
                            </RadioGroup>
                        </FormGroup>
                    </FormControl>
                 }
            </Step>
            <Step>
                { (nextStep) =>
                 <div>
                    <TextField name="username" label="Username" margin="normal" />
                    <Button variant="raised" color="primary" onClick={nextStep}>
                        Confirm
                    </Button>
                 </div>
                 }
            </Step>
            <Step>
                { (nextStep) =>
                 <FormControl style={{minWidth: 200}}>
                    <InputLabel htmlFor="selectC">Select something</InputLabel>
                    <Select native onChange={nextStep} inputProps={{id: 'selectC'}}>
                        <option value='C1'>C1</option>
                        <option value='C2'>C2</option>
                        <option value='C3'>C3</option>
                    </Select>
                 </FormControl>
                 }
            </Step>
            <Step>
                { (nextStep) =>
                 <Button variant="raised" color="primary" onClick={nextStep}>
                    Submit
                 </Button>
                 }
            </Step>
        </ProgressiveForm>
  );
};

export default AppProgressiveForm;
