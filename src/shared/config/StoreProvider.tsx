'use client';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

export const StoreProvider = (props: React.PropsWithChildren) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};