import { resolve as _resolve } from 'path';

export const resolve = {
    alias: {
        '@public': _resolve(__dirname, 'public'),
    },
};