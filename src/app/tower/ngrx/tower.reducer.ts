import { createReducer, on } from '@ngrx/store';
import {
  getCarriers,
  getCarriersFailure,
  getCarriersSuccess,
  getLayers,
  getLayersFailure,
  getLayersSuccess, save, saveFailure, saveSuccess
} from './tower.actions';
import { CarriersData, LayerData, SavedData } from '../tower.config';

export interface DataType<T> {
  loading: boolean;
  loaded: boolean;
  data: T
}

export interface TowerReducerState {
  layers: DataType<LayerData[]>,
  carriers: DataType<CarriersData>,
  selectedLayers: SavedData,
}

export const initialState: TowerReducerState = {
  layers: {
    loading: false,
    loaded: false,
    data: []
  },
  carriers: {
    loading: false,
    loaded: false,
    data: {} as CarriersData
  },
  selectedLayers: {}
};


export const towerReducer = createReducer(initialState,
  on(getLayers, state => {
    return {
      ...state,
      layers: {
        loading: true,
        loaded: false,
        data: []
      }
    }
  }),
  on(getLayersSuccess,(state, { layers }) => {
    return {
      ...state,
      layers: {
        loading: false,
        loaded: true,
        data: layers
      }
    }
  }),
  on(getLayersFailure, state => {
    return {
      ...state,
      layers: {
        loading: false,
        loaded: true,
        data: []
      }
    }
  }),
  on(getCarriers, state => {
    return {
      ...state,
      carriers: {
        loading: true,
        loaded: false,
        data: {}
      }
    }
  }),
  on(getCarriersSuccess,(state, { carriers }) => {
    return {
      ...state,
      carriers: {
        loading: false,
        loaded: true,
        data: carriers
      }
    }
  }),
  on(getCarriersFailure, state => {
    return {
      ...state,
      carriers: {
        loading: false,
        loaded: true,
        data: {}
      }
    }
  }),
  on(saveSuccess,(state, { selectedLayers }) => {
    return {
      ...state,
      selectedLayers: selectedLayers
    }
  }),
  on(saveFailure, state => {
    return {
      ...state,
      selectedLayers: {}
    }
  }),

);

