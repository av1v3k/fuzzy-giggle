import { Action } from '@ngrx/store';
import { UserActionTypes } from './types';

export class GetUserDataAction implements Action {
  readonly type = UserActionTypes.GET_USER_DATA;
  constructor() {}
}

export class GetUserDataSuccessAction implements Action {
  readonly type = UserActionTypes.GET_USER_DATA_SUCCESS;
  constructor(readonly payload: any) {}
}

export class GetUserDataErrorAction implements Action {
  readonly type = UserActionTypes.GET_USER_DATA_ERROR;
  constructor(readonly payload: any) {}
}

export type UserAction = 
  | GetUserDataAction
  | GetUserDataSuccessAction
  | GetUserDataErrorAction;
