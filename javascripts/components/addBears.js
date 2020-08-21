import { bearsArray } from '../../helpers/data/bearsArray.js'
import { makeRiver } from './river.js';

const addBears = () => {
    const name = $("#name").val();
    const imageUrl = $("#imageUrl").val();

    bearsArray.push({
        name: name,
        imageUrl: imageUrl
    });

    makeRiver(bearsArray);
    console.log(bearsArray);
    $("#name").val("");
    $("#imageUrl").val("");

}

// https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/GrizzlyBearJeanBeaufort.jpg/1024px-GrizzlyBearJeanBeaufort.jpg




export { addBears }