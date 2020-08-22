
import { makeBearsForm } from './components/bearsForm.js';
import { makeRiver } from './components/river.js';
import { attemptedTally } from './components/fishtally.js';
import { bearsArray } from '../helpers/data/bearsArray.js';

const init = () => {
    makeBearsForm();
    makeRiver();
    attemptedTally(bearsArray)
}

init();