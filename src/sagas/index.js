import { all } from 'redux-saga/effects'
import formSaga from './form'

export default function* rootSaga () {
  yield all([
    formSaga()
  ])
}
