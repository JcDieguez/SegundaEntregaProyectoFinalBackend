const dbConfig = {
  mongo: {
    uri: 'mongodb://localhost:27017/myapp',
  },
  firebase: {
    apiKey: 'API_KEY',
    authDomain: 'AUTH_DOMAIN',
    databaseURL: 'DATABASE_URL',
    projectId: 'PROJECT_ID',
    storageBucket: 'STORAGE_BUCKET',
    messagingSenderId: 'MESSAGING_SENDER_ID',
    appId: 'APP_ID',
  },
};

module.exports = {
  dbConfig,
};