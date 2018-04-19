import { put, takeLatest, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { validate } from '../utils/api';

export const formDebounceValidation = (input, validateFn) => function* ({ payload, meta }) {
  yield delay(200); // debounce

  const action = {
    type: '@@redux-form/STOP_ASYNC_VALIDATION',
    meta: {
      form: meta.form,
    },
  };
  try {
    yield validateFn(payload);
    action.error = false;
  } catch (err) {
    action.error = true;
    action.payload = {
      [input]: err.message,
    };
  }

  yield put(action);
};

export const formChangeAction = input => ({ type, meta }) =>
  type === '@@redux-form/CHANGE' && meta.field === input;

export default function* () {
  yield all([
    takeLatest(formChangeAction('username'), formDebounceValidation('username', validate)),
  ]);
}
