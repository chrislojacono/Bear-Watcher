import { bearsArray } from "../../helpers/data/bearsArray.js";

const attemptedTally =()=>{
    $('#attempted').on('click', ()=>
    bearsArray.attempted++)
}




export { attemptedTally }