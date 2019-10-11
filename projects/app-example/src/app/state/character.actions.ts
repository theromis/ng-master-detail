import { createAction, props } from '@ngrx/store';
import { Character } from './character.model';

export const loadCharacters = createAction(
  '[Characters] Load',
  props<{ characters: Character[] }>());

