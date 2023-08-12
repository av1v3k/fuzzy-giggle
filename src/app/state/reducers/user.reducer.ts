import { UserAction } from '../actions';
import { UserActionTypes } from '../actions/types';

export const initialUserState = {
  userreq: null,
  userres: null,
  usererror: null,
};

export function userReducer(state: any = initialUserState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.GET_USER_DATA:
      return {
        ...state,
        userreq: action?.payload,
      };
    case UserActionTypes.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userres: action?.payload,
      };
    case UserActionTypes.GET_USER_DATA_ERROR:
      return {
        ...state,
        usererror: action?.payload,
      };
    default:
      return state;
  }
}
