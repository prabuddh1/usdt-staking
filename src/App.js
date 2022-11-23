import './App.css';
import Analytics from './components/Analytics';
import Foot from './components/Foot';
import Footer from './components/Footer';
import Head from './components/Head';
import Header from './components/Header';
import Navbar from './components/Navbar';
import StakeUnstakeModal from './components/StakeUnstakeModal';
import VerticalTabs from './components/VerticalTabs';

function App() {
  return (
    <>
      <div className="container shadow-lg p-3 mb-5 bg-body rounded">
      {/* <Head/> */}
      <Header/>
      {/* <Navbar/> */}
      {/* <StakeUnstake/> */}
      {/* <StakeUnstakeModal/> */}
      {/* <AmountForm/> */}
      <Analytics/>
      <VerticalTabs/>
      </div>
      <Foot/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
