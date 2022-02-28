 
const Reducer = (state,action)=>{
    switch(action.type){
      case "ADD":
          return {
              ...state,expenses:[...state.expenses,action.payload]
          } 
      case "DELETE": 
          return {
              ...state,expenses:state.expenses.filter((obj)=>obj.id !== action.payload)
          }    
      default:
        return state;
     }
}

export default Reducer;