import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './contex/GlobalState';
function App() {
  return (
     <GlobalProvider>
    <div className="App"> 
     <Header/>
     <Balance/>
     <IncomeExpense/>
     <History/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
