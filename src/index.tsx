import ReactDOM from 'react-dom/client';
import './index.scss';
import CryptoList from './CryptoList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient()


root.render(
  <QueryClientProvider client={queryClient}>
      <CryptoList />
      <ReactQueryDevtools />
  </QueryClientProvider>
);
