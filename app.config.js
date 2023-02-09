import "dotenv/config";

export default {
  expo: {
    name: "ChatApp",
    slug: "doctalk",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
        package: "com.yourcompany.yourappname",
        versionCode: 1,
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: "AIzaSyCxOPZactLNdU6OyOTCPC-3SiYARCNdRkw",
      authDomain: "chatapp-demo-2fe9c.firebaseapp.com",
      projectId: "chatapp-demo-2fe9c",
      storageBucket: "chatapp-demo-2fe9c.appspot.com",
      messagingSenderId: "213188253562",
      appId: "1:213188253562:web:e036f2b3f543b2f091e8c3",
      eas: {
        projectId: "c6ec7932-0d58-498b-9f97-46c4380c93a5",
      },
    },

    owner: "adarshexpo",

    slug: "doctalk",

    updates: {
      url: "https://u.expo.dev/c6ec7932-0d58-498b-9f97-46c4380c93a5",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};

// final_1
