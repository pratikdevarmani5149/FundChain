import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <ThirdwebProvider
        desiredChainId={ChainId.Sepolia}
        clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}
        sdkOptions={{
          walletConnect: {
            projectId: undefined, // 🚫 Disable WalletConnect to stop websocket errors
          },
        }}
      >
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </ThirdwebProvider>
    </Router>
  </React.StrictMode>
);
