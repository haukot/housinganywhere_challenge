import { put } from 'redux-saga/effects';

import { runGenerator } from '../utils/sagas';
import { formDebounceValidation } from './form';

const testArgs = { payload: 'input_name', meta: { form: 'test_form' } };
const action = {
  type: '@@redux-form/STOP_ASYNC_VALIDATION',
  meta: { form: testArgs.meta.form },
};


it('formDebounceValidation validated success', () => {
  const validate = () => true;
  const saga = formDebounceValidation('input_name', validate)(testArgs);
  const res = runGenerator(saga);

  const expectedAction = Object.assign({}, action, { error: false });
  expect(res).toEqual(put(expectedAction));
});


it('formDebounceValidation validated error', () => {
  const errorMsg = 'test_error';
  const validate = () => { throw new Error(errorMsg); };
  const saga = formDebounceValidation('input_name', validate)(testArgs);
  const res = runGenerator(saga);

  const expectedAction = Object.assign({}, action, {
    error: true,
    payload: { [testArgs.payload]: errorMsg },
  });
  expect(res).toEqual(put(expectedAction));
});
