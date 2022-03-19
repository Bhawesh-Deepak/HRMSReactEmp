import './App.css';
import Header from './HeaderComponent/Header';
import Menu from './MenuComponent/Menu';
import Footer from './FooterComponent/Footer';
import Authenticate from './AuthenticateComponent/Authenticate';
import { useState } from 'react';
import RTStorage from 'rt-storage';
import useGlobalStorage from './Helpers/useGlobalStorage';
function App() {
  const useStorage = useGlobalStorage({
    storageOptions: { name: 'test-db' }
  });
  const [isLogged, setIsLogged] = useState(false);
  const [authToken, setAuthToken] = useStorage('Invalid');
  debugger;
  if (authToken != "Invalid") {
    return (
      <div className="App">
        <><Header></Header>
          <Menu></Menu>
          <Footer></Footer></>
      </div>
    );
  } else {

    return (
      <div className="App">
        <Authenticate setAuth={setAuthToken} />
      </div>
    );
  }

}

export default App;
