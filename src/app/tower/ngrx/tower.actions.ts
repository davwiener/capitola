import { createAction, props } from '@ngrx/store';
import { CarriersData, LayerData, SavedData } from '../tower.config';

export const getLayersAction = '[Layers] get layers';
export const getLayersActionSuccess = '[Layers] get layers success';
export const getLayersActionFailure = '[Layers] get layers failure';

export const getCarriersAction = '[Carriers] get carriers';
export const getCarriersActionSuccess = '[Carriers] get carriers success';
export const getCarriersActionFailure = '[Carriers] get carriers failure';


export const saveAction = '[save]';
export const saveActionSuccess = '[save] success';
export const saveActionFailure = '[save] failure';

export const getLayers = createAction(getLayersAction);
export const getLayersSuccess = createAction(getLayersActionSuccess, props<{layers: LayerData[]}>());
export const getLayersFailure = createAction(getLayersActionFailure);

export const getCarriers = createAction(getCarriersAction);
export const getCarriersSuccess = createAction(getCarriersActionSuccess, props<{carriers: CarriersData}>());
export const getCarriersFailure = createAction(getCarriersActionFailure);


export const save = createAction(saveAction, props<{savedOptions: SavedData}>());
export const saveSuccess = createAction(saveActionSuccess, props<{selectedLayers: SavedData}>());
export const saveFailure = createAction(saveActionFailure);
