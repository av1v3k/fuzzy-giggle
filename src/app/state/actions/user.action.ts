import { createAction, props } from '@ngrx/store';

export const getData = createAction(
  '[heroes component] getData',
  (response: any) => response.data
);
