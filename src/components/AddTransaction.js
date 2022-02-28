import { useState,useContext } from 'react';
import '../components/AddTransaction.css';
import { GlobalContext } from '../contex/GlobalState';


function AddTransaction(){
   const [text,setText] = useState('');
   const [amount,setAmount] = useState('');
    const {dispatch} = useContext(GlobalContext);
     
    const submitHandler = (e)=>{
         e.preventDefault();
         const  expenseDetails = {
            id:Math.floor(Math.random()*100000),
            label:text,
            amount:parseInt(amount) 
        }; 
        dispatch({type:"ADD",payload:expenseDetails});
    }
   
    return(
        <> 
          <div className='transaction-heading'>
              <h3>Add new Transaction</h3>
          </div>
         <form onSubmit={submitHandler}>
             <div className="form-control">
                 <label htmlFor="text">Label</label>
                 <input type="text" placeholder="Enter label.." value={text} onChange={(e)=> setText(e.target.value)}/> 
             </div>
             <div className="form-control">
                 <label htmlFor="amount">Amount </label>
                 <input type="number" placeholder="Enter Amount.." value={amount} onChange={(e)=> setAmount(e.target.value)}/> 
             </div>
             <button className="btn">Add Transaction</button>
         </form>
         </>
    )

}
export default AddTransaction;