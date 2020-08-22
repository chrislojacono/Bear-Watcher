import { bearsArray } from "../../helpers/data/bearsArray.js";
import { makeRiver } from "./river.js";

const attemptedTally = (array, index) =>{
    
    $(`#attempted-${index}`).on('click', ()=> {
    array.attempted++
    $(`attempt-${index}`).html(`${array.attempted}`)
    makeRiver();
    })
}
const dateTime = () =>{
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return today + time
  }
  const timeEvent = (array, index)  =>{
    $(`#attempted-${index}`).on('click', ()=> { 
        bearsArray[index].dateTime = dateTime()
        
        $(`#timeStamp-${index}`).html(`${dateTime()}`)
        
      makeRiver(array[index])
  })
  $(`#caught-${index}`).on('click', ()=> { 
    $(`#timeStamp-${index}`).html(`${dateTime()}`)
    makeRiver(array[index])
  
  })
  }




export { attemptedTally, dateTime, timeEvent }