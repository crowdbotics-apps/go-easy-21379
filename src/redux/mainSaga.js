import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView138427Saga from '../features/CalendarView138427/redux/sagas';
import EmailAuth138426Saga from '../features/EmailAuth138426/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView138427Saga,
EmailAuth138426Saga,
    
  ]);
}