import AppStyles from "./AppStyles";
import * as localStorage from 'local-storage'

export const getId = () => Date.now() + '' + Math.random()

export const getSaves = () => {
    return localStorage.get<Array<Player>>('mac-civ-saves') || []
}

export const saveGame = (player:Player) => {
    let saves = localStorage.get<Array<Player>>('mac-civ-saves') || []
    saves.push(player)
    localStorage.set('mac-civ-saves', saves)
}

export const getRandomInt = (max:number) => Math.floor(Math.random() * Math.floor(max))

export const shuffleArray = (array:Array<any>) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return Array.from(array)
  }