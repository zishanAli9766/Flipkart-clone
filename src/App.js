import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import TemplateProvider from './Component/TemplateProvider/TemplateProvider';
import Rout from './Component/Routing/Rout';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Drawers from './components/Drawers';



function App() {



  
  return (
    <Provider store={store}>

    <div className="App">
      

      <TemplateProvider>
        <BrowserRouter>
          <Header />
          
        <Drawers/>
        <Rout />
        </BrowserRouter>
      </TemplateProvider>

    </div>
        </Provider>
  );
}

export default App;
