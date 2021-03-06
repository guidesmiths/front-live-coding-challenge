const AppConfig = {
  selectedServer: process.env.REACT_APP_ENV || 'development',
  servers: {
    production: {
      api: 'https://front-live-coding-api.herokuapp.com/',
      public: 'https://front-live-coding-api.herokuapp.com/',
    },
    development: {
      api: 'http://localhost:4000/',
      public: 'http://localhost:4000/',
    },
  },
  host: function () {
    return this.servers[this.selectedServer].api;
  },
  hostPublic: function () {
    return this.servers[this.selectedServer].public;
  },
  defaultHeaders: () => {
    return {}
  },
  authHeaders: () => {
    return {
      'X-User-Id': process.env.REACT_APP_X_USER_ID
    };
  },
};

export { AppConfig };
