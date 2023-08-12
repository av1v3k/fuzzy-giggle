import { Action } from '@ngrx/store';
import { UserAction } from '../actions';
import { UserActionTypes } from '../actions/types';

export const initialUserState = {
  userreq: null,
  userres: null,
  usererror: null,
};

export function userReducer(state: any = initialUserState, action: Action): any {
    const userAction = action as UserAction;
  switch (userAction.type) {
    case UserActionTypes.GET_USER_DATA:
      return {
        ...state,
      };
    case UserActionTypes.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userres: userAction?.payload,
      };
    case UserActionTypes.GET_USER_DATA_ERROR:
      return {
        ...state,
        usererror: userAction?.payload,
      };
    default:
      return state;
  }
}
