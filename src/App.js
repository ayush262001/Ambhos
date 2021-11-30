import './App.css';

import Header from './components/header';
import About from './components/About/Ambhos';
import Detail from './components/Details/detail';
import Services from './Services/services';
import Growth from './Growth/growth';
import SocailMedia from './SocialMedia/SocialMedia';
import Trekking from './Trekking/trekking';
import Contact from './contact/contact';
import Partners from './partners/partners';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Detail  />
        <Services />
        <hr />
        <Growth />
        <SocailMedia />
        <Trekking />
        <Contact />
        <Partners />
        <Footer />
    </div>
  );
}

export default App;
