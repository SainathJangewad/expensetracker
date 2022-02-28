import { useContext } from 'react';
import  '../components/IncomeExpense.css'
import { GlobalContext } from '../contex/GlobalState';

function IncomeExpense(){
    const {budget,expenses} = useContext(GlobalContext);
 
    const totalExpense =  expenses.reduce((acc,curr)=>{
        return acc+curr.amount;
    },0);       
 
    return(
        <div className="inc-ex-cont">
          <div className='income'>
              <h4>Remaining</h4>
              <p>${budget-totalExpense}</p>
          </div>
          <div className='expense'>
              <h4>expense</h4>
              <p>${totalExpense}</p>
          </div>
        </div>
    )
}
export default IncomeExpense;