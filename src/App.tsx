import { CollectionPage } from '@/features/collections';
import { QueryClientProvider } from 'react-query';
import { Navbar } from './components/Navbar';
import { UserProvider } from './features/user';
import { queryClient } from './libs/react-query';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <div className="flex-row flex bg-neutral-900 h-screen w-screen text-amber-50">
          <Navbar />
          <CollectionPage />
        </div>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
