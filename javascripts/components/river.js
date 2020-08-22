import { bearsArray } from "../../helpers/data/bearsArray.js";
import { timeEvent } from './fishtally.js';





const makeRiver = () => {
  $("#river").html("");
  bearsArray.forEach((item, index) => {
    $("#river").append(`
        
        <div class="card" style="width: 18rem;">
        <div class="img-container" style="background-image: url(${item.imageUrl})">
        </div>
            
            <div class="card-body">
              <h1 class="card-title">${item.name}</h1>
              <p class="card-text"></p>
            </div>
            <div class="progressButtons">
                <button class="btn btn-warning" id="attempted-${index}">Attempted</button>
                <b id="attempt-${index}">${item.attempted}</b>
                <button class="btn btn-success" id="caught-${index}">Caught</button>
            </div
            <div class="counters">
                <h6 id="time">Last Caught</h6>
                <b id="timeStamp-${index}">${item.dateTime}</b>
                <h3 id="totalTitle">Total Fish Caught</h3>
                <b class="total" id="totalCount-${index}">${item.total}</b>

           
        </div>
        `);
        
        timeEvent(bearsArray, index);
        
  });
  
    
  
};


export { makeRiver };
