// filepath: src/store/actions/panel.actions.ts
import { createAction, createReducer, on, props } from '@ngrx/store';
import { AppState } from '@store/state/app.state';

export const initialState: string[] = []

export const addPanel = createAction(
    '[Panel] Add Panel',
    props<{ panel: any }>() // Replace `any` with a specific type if available
);

export const panelReducer = createReducer(
    initialState,
    on(addPanel, (state, { panel }) => [...state, panel])
);