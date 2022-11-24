import './App.css';
import Analytics from './components/Analytics';
import Foot from './components/Foot';
import Header from './components/Header';
import VerticalTabs from './components/VerticalTabs';

function App() {
  return (
    <>
      <div className="container shadow-lg p-3 mb-5 bg-body rounded">
      <Header/>
      <Analytics/>
      <VerticalTabs/>
      </div>
      <Foot/>
    </>
  );
}

export default App;
