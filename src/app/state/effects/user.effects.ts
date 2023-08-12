import { Injectable } from "@angular/core";
import {UserActionTypes} from "../actions/types";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY, tap } from "rxjs";
import { UserService } from "src/app/services/users.service";
import { GetUserDataSuccessAction } from "../actions";

@Injectable()
export class UserEffect {
    user$ = createEffect(() => this.actions$
    .pipe(
        ofType(UserActionTypes.GET_USER_DATA),
        tap(d => {
            console.log(d);
        }),
        mergeMap((d) => this.userService.getUsers()
            .pipe(
                map(users => new GetUserDataSuccessAction(users)),
                catchError(error => EMPTY)
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {

    }
}