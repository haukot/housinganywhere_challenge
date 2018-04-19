import React from 'react';
import {
  FormControlLabel,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

import CheckboxGroup from './index';

const renderCheckbox = (props) => <FormControlLabel control={<Checkbox />} {...props} />
export default (props) => <CheckboxGroup {...props} renderCheckbox={renderCheckbox} />
