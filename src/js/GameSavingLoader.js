import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const data = await read(); // возвращается Promise!
    const value = await json(data); // возвращается Promise!
    return new GameSaving(JSON.parse(value));
  }
}
