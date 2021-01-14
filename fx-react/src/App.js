import './App.css';
import Header from "./Components/Header.jsx"
import CurrencyPairs from "./Components/CurrencyPairs.jsx"
import { Route } from "react-router-dom"

export default function App() {
  return (
    <div className="App">

      <div className="app-Header" >

        <Header/>

        <Route exact path="/Currency-Pair" component={CurrencyPairs}/>
        {/* <Route path="/Currency-Pair:symbol" component={CurrencyPairs} /> */}

      </div>

    </div>
  );
}

