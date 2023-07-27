import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA0soOgD0XnE4is2ZbflnKI9-AWMhie6W0",
    authDomain: "brainfreq-359b4.firebaseapp.com",
    projectId: "brainfreq-359b4",
    storageBucket: "brainfreq-359b4.appspot.com",
    messagingSenderId: "707432281323",
    appId: "1:707432281323:web:9584fef9f961c7279b7aae"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
  