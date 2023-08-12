import { Injectable } from "@angular/core";
import {UserActionTypes} from "../actions/types";
import {Actions, createEffect} from "@ngrx/effects";

@Injectable()
export class UserEffect {
    user$ = createEffect(() => {
        this.actions$.pipe()
    });

    constructor(
        private actions$: Actions,
    ) {

    }
}