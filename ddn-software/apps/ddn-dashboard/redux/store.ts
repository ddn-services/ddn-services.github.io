import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducer = combineReducers({});
export const AppStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat()
});

export type RootState = ReturnType<typeof AppStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
