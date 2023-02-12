import { CollectionPage } from './components/Collection';
import { Navbar } from './components/Navbar';
import './css/App.css';

function App() {
  return (
    <div className="flex-row flex bg-neutral-900 h-screen w-screen text-amber-50">
      <Navbar />
      <CollectionPage />
    </div>
  );
}

export default App;
