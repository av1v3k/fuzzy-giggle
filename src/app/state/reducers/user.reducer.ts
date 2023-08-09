import { createReducer, on } from '@ngrx/store';
import { getData }  from '../actions/user.action';

export const initialState = {
    data: null
};

export const counterReducer = createReducer(
    initialState
    on(getData, (state, {users}) => users),
  );