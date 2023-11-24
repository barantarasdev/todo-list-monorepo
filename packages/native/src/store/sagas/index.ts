import { all } from 'redux-saga/effects'

import boardsWatcher from './boardsWatcher'

function* rootSaga() {
  yield all([boardsWatcher()])
}

export default rootSaga
