import { Injectable } from '@angular/core';
import { TowerReducerState } from './tower.reducer';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, delay, exhaustMap, map, Observable, of } from 'rxjs';
import {
  getCarriers,
  getCarriersFailure,
  getCarriersSuccess,
  getLayers,
  getLayersFailure,
  getLayersSuccess, saveAction, saveFailure, saveSuccess
} from './tower.actions';
import { carriers, layers } from '../tower.config';

@Injectable()
export class TowerEffects {
  constructor(
    private actions$: Actions,
    private store: Store<TowerReducerState>
  ) {}

  getLayers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLayers),
      exhaustMap(action => {
        return of(layers).pipe(delay(700)).pipe(
          map(layers => getLayersSuccess({layers})),
          catchError(error => of(getLayersFailure()))
        )}
      )
    )
  );

  getCarriers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCarriers),
      exhaustMap(action =>
        of(carriers).pipe(delay(1500)).pipe(
          map(carriers => getCarriersSuccess({carriers})),
          catchError(error => of(getCarriersFailure()))
        )
      )
    )
  );

  save$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveAction),
      exhaustMap(action => {
        return of(action['savedOptions']).pipe(delay(1500)).pipe(
          map(selectedLayers  => saveSuccess({selectedLayers})),
          catchError(error => of(saveFailure()))
        )
      }
      )
    )
  );
}
