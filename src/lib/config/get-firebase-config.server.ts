import configDev from "./tcp-tunnel-dev-firebase.json";
import configProd from "./tcp-tunnel-dev-firebase.json";

const getFirebaseConfig = () =>
  process.env.NODE_ENV === "production" ? configDev : configProd;

export default getFirebaseConfig;
