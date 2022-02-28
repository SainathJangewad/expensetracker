import { GlobalContext } from "../contex/GlobalState";
import { useContext } from "react";
import '../components/Transaction.css'

function Transaction({expense}){
   const {dispatch} = useContext(GlobalContext);
   const sign = expense.amount < 0 ? "-" : "+";

   const deleteHandler = () => {
    dispatch({
             type:"DELETE",
            payload:expense.id
        })
    }
      
    return(
            <li className={expense.amount < 0 ? "minus" : "plus"}>
                <span>{expense.label}</span> <span className="amount">${expense.amount}</span><button className="delete-btn" onClick={deleteHandler}>x</button>
            </li>
    )
}

export default Transaction;