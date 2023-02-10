import CollectionPage from "./components/CollectionPage";
import Nav from "./components/Nav";
import "./css/App.css";

function App() {
  return (
    <div className="flex-row flex bg-neutral-900 h-screen w-screen text-amber-50">
      <Nav />
      <CollectionPage />
    </div>
  );
}

export default App;
