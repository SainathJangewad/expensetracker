import { useContext } from "react";
import { GlobalContext } from "../contex/GlobalState";
import '../components/Balance.css';
function Balance(){
    const {budget,expenses} = useContext(GlobalContext);
    return(
        <div>
             <div className="balance">
                <span>Balance:</span> <h1>${budget}</h1>
             </div>
        </div>
    )
}

export default Balance;