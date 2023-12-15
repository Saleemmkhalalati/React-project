import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { UseServicesProvider } from "./context/Context.jsx";
i18next.init({
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
  lng: "en", // Default Language
  fallbackLng: "en", // Standby Language
  interpolation: {
    escapeValue: false,
  },
  // keySeparator: false,
  // nsSeparator: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <UseServicesProvider>
        <App />
      </UseServicesProvider>
    </I18nextProvider>
  </React.StrictMode>
);
