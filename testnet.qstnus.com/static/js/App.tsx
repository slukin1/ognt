import React, { Suspense } from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { Theme } from "@sekmet/radix-ui-themes";
import { Toaster } from "react-hot-toast";
// Components
import Modal from "components/modals";
import { SolanaProvider } from "components/providers";
import { useMagicVisibility } from "hooks";
// Context
import {
  LanguageContextProvider,
  MagicProvider,
  ThemeProvider,
  TonProvider,
  NearProvider,
  GlobalHooksProvider,
} from "context";
// Store
import store from "store/store";
// Components
import { ErrorBoundary, Loader, ErrorBoundaryFallback } from "components";

import { getToastOptions } from "utils";

import { setLicenseKey } from "survey-core";
import { wagmiConfig } from "configs/web3/wagmi";

setLicenseKey(process.env.REACT_APP_SURVEY_LICENSE as string);

const client = new QueryClient();

const App: React.FC = () => {
  useMagicVisibility();

  return (
    <ErrorBoundary fallbackComponent={ErrorBoundaryFallback}>
      <HelmetProvider>
        <Suspense fallback={<Loader />}>
          <LanguageContextProvider fallback={<Loader />}>
            <Provider store={store}>
              <TonConnectUIProvider manifestUrl={`${process.env.REACT_APP_URL}/tonconnect-manifest.json`}>
                <WagmiProvider config={wagmiConfig}>
                  <QueryClientProvider client={client}>
                    <RainbowKitProvider>
                      <SolanaProvider>
                        <NearProvider>
                          <MagicProvider>
                            <TonProvider>
                              <ThemeProvider>
                                <Theme appearance="dark" accentColor="purple">
                                  <GlobalHooksProvider>
                                    <Outlet />
                                    <Modal />
                                    <Toaster
                                      position="top-right"
                                      containerStyle={{ wordBreak: "break-word" }}
                                      toastOptions={getToastOptions()}
                                    />
                                  </GlobalHooksProvider>
                                </Theme>
                              </ThemeProvider>
                            </TonProvider>
                          </MagicProvider>
                        </NearProvider>
                      </SolanaProvider>
                    </RainbowKitProvider>
                  </QueryClientProvider>
                </WagmiProvider>
              </TonConnectUIProvider>
            </Provider>
          </LanguageContextProvider>
        </Suspense>
      </HelmetProvider>

      <ScrollRestoration />
    </ErrorBoundary>
  );
};

export default App;
