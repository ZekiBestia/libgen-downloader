import React from "react";
import { render } from "ink";

import { ErrorContextProvider } from "./contexts/ErrorContext";
import { LogContextProvider } from "./contexts/LogContext";
import { ConfigContextProvider } from "./contexts/ConfigContext";
import { AppActionContextProvider } from "./contexts/AppActionContext";
import { LayoutWrapper } from "./layouts/Layout";
import { LAYOUT_KEY } from "./layouts/keys";
import App from "./App";
import { DownloadContextProvider } from "./contexts/DownloadContext";

export default function renderTUI() {
  const clearANSI: string = process.platform === "win32" ? "u001b[H\u001bc" : "\u001b[2J";
  // reset screen pos
  process.stdout.write("\u001b[1;1H");
  // clear screen
  process.stdout.write(clearANSI);

  render(
    <LogContextProvider>
      <LayoutWrapper initialLayout={LAYOUT_KEY.SEARCH_LAYOUT}>
        <ErrorContextProvider>
          <ConfigContextProvider>
            <DownloadContextProvider>
              <AppActionContextProvider>
                <App />
              </AppActionContextProvider>
            </DownloadContextProvider>
          </ConfigContextProvider>
        </ErrorContextProvider>
      </LayoutWrapper>
    </LogContextProvider>
  );
}
