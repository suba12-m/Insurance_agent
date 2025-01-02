import { resolve as _resolve } from 'path';

export const resolve = {
    alias: {
        '@public': _resolve(__dirname, 'public'),
    },
};

const path = require('path');
module.exports = {
    // Other config settings...
    resolve: {
      alias: {
        // Add public alias
        public: path.resolve(__dirname, 'public'),
      },
    },
    // Other config...
  };