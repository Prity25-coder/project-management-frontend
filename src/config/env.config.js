const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGE_SENDER_ID,
  VITE_APP_ID,
  VITE_BASE_URL,
} = import.meta.env;

const envConfig = Object.freeze({
  baseUrl: `${String(VITE_BASE_URL)}/api/v1`,
  firebaseConfig: {
    apiKey: String(VITE_API_KEY),
    authDomain: String(VITE_AUTH_DOMAIN),
    projectId: String(VITE_PROJECT_ID),
    storageBucket: String(VITE_STORAGE_BUCKET),
    messagingSenderId: String(VITE_MESSAGE_SENDER_ID),
    appId: String(VITE_APP_ID),
  },
});

export default envConfig;
