import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
    counter: counterReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
