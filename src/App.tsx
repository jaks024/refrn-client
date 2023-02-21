import { CollectionPage } from '@/features/collections';
import { Navbar } from './components/Navbar';
import { UserProvider } from './features/user';

function App() {
  return (
    <UserProvider>
      <div className="flex-row flex bg-neutral-900 h-screen w-screen text-amber-50">
        <Navbar />
        <CollectionPage />
      </div>
    </UserProvider>
  );
}

export default App;
