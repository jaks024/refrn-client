import { CollectionPage } from './features/collections';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="flex-row flex bg-neutral-900 h-screen w-screen text-amber-50">
      <Navbar />
      <CollectionPage />
    </div>
  );
}

export default App;
