import { put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { validate } from '../utils/api'

function formDebounceValidation(input, validateFn) {
  return function* ({ payload, meta }) {
    yield delay(200) // debounce

    const action = {
      type: '@@redux-form/STOP_ASYNC_VALIDATION',
      meta: {
        form: meta.form
      }
    }
    try {
      yield validateFn(payload)
      action.error = false
    } catch (err) {
      action.error = true
      action.payload = {
        [input]: err.message
      }
    }

    yield put(action);
  }
}

const formChangeAction = (input) => ({ type, meta, payload }) =>
      type === '@@redux-form/CHANGE' && meta.field === input;

export default function* () {
  yield [
    takeLatest(formChangeAction('username'), formDebounceValidation('username', validate))
  ]
}