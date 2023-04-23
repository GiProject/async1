import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((data) => {
        return json(data);
      }).then((data) => {
        resolve(new GameSaving(JSON.parse(data)));
      });
    }) ;
  }
}
