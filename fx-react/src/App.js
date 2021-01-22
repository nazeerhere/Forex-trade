import './App.css';
import Header from "./Components/Header.jsx"
import CurrencyPairs from "./Components/CurrencyPairs"
import { Route } from "react-router-dom"



export default function App() {
  return (
    <div className="App">

      <div className="app-Header" >

        <Header/>
        <Route path="/Currency-Pair" component={CurrencyPairs}/>
    
      </div>
    </div>
  );
}

