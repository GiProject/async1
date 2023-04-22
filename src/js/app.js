import GameSavingLoader from './GameSavingLoader';

(async() => {
    try {
        const gameSave = await GameSavingLoader.load();
    } catch(e) {
        console.log(e);
    }
})();

// GameSavingLoader.load().then((saving) => {
//   console.log(saving);
// }, (error) => {
//   console.log(error);
// });
