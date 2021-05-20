/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Main from './components/Main';

//import logo from './logo.svg';

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <Header name="REACT" />
//         </header>    
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <Wrapper>
      <Header />
        <Main> </ Main> 
      <Footer />
    </Wrapper>
  )
}  

export default App;