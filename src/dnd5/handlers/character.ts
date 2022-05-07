import Character from '../models/character';
import characterHelper from '../../rpg/character'

export const getCharacters = characterHelper(Character).getCharacters;
export const getCharacter = characterHelper(Character).getCharacter;
export const addCharacter = characterHelper(Character).addCharacter;
export const updateCharacter = characterHelper(Character).updateCharacter;
export const removeCharacter = characterHelper(Character).removeCharacter;
