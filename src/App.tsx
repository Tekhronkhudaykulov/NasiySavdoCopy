import "./App.css";
import Router from "./router/Router";
import { ConfigProvider } from "antd";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#027373",
            },
          }}
        >
          <Router />
        </ConfigProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};

export default App;
