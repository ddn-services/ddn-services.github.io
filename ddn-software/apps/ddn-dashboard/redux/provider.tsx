'use client';
import { AppStore } from './store';
import { Provider } from 'react-redux';
import React from 'react';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={AppStore}>{children}</Provider>;
}
