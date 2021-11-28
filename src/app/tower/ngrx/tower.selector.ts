import { TowerReducerState } from './tower.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFeature = createFeatureSelector<TowerReducerState>('tower');

export const selectLayers = createSelector(
  selectFeature,
  (state: TowerReducerState) => state.layers
);
export const selectCarriers = createSelector(
  selectFeature,
  (state: TowerReducerState) => state.carriers
);

export const selectSaved = createSelector(
  selectFeature,
  (state: TowerReducerState) => state.selectedLayers
);
