import { createReducer, on } from '@ngrx/store';
import { getData }  from '../actions/user.action';

export const initialState = {
    users: null
};

export function reducer(state = initialState, action: )