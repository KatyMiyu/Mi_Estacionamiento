import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'MiEstacionamiento',
  webDir: 'www',
  plugins: {
    BarcodeScanner:{
      //opciones adicionales si es necesario
    }
  }
};

export default config;
