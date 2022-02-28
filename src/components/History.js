import '../components/History.css'
import Transaction from './Transaction';
import { GlobalContext } from '../contex/GlobalState';
import { useContext } from 'react';

function History(){
   const {expenses} = useContext(GlobalContext);  
   return(
        <div className="histoy-cont">
       <div className='history-heading'>
        <h3>History</h3>
       </div>

          <ul className='list'>
                {
                expenses.map((expense)=>{
                   return  <Transaction key={expense.id} expense={expense}/> 
                }) 
                }
          </ul>
        </div>
    )
}

export default History;
