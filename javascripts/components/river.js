import { bearsArray } from '../../helpers/data/bearsArray.js'

const makeRiver = () => {

    $("#river").html("");
    bearsArray.forEach((item, index) => {
        $("#river").append(`
        
        <div class="card" style="width: 18rem;">
        <div class="img-container" style="background-image: url(${item.imageUrl})">
        </div>
            
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text"></p>
            </div>
        </div>
        `);
    });

}

export { makeRiver }