import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView138427Reducer from '../features/CalendarView138427/redux/reducers';
import EmailAuth138426Reducer from '../features/EmailAuth138426/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView138427: CalendarView138427Reducer,
EmailAuth138426: EmailAuth138426Reducer,

});