import './index.css';
import { SWRConfig, SWRConfiguration } from 'swr';
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const swrConfig: SWRConfiguration = {
  errorRetryInterval: 3000,
  errorRetryCount: 3,
};

createRoot(document.getElementById('root')!).render(
  <SWRConfig value={swrConfig}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SWRConfig>,
);
