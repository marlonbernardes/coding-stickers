import { combineReducers } from 'redux';
import { List as ImmutableList, Map } from 'immutable';

export function customization(state = ImmutableList.of(), action) {
  switch (action.type) {
    case 'ADD_CUSTOMIZATION':
      return state.push(action.sticker);
    case 'REMOVE_CUSTOMIZATION':
      return state.delete(action.index);
    case 'SELECT_STICKER':
      return state.set(action.index, state.get(action.index).merge(new Map({
        selected: true,
      })));
    case 'UPDATE_POSITION':
      return state.set(action.index, state.get(action.index).merge(new Map({
        x: action.x,
        y: action.y,
      })));
    case 'CLEAR_CUSTOMIZATION':
      return ImmutableList.of();
    default:
      return state;
  }
}

export function stickers(state = ImmutableList.of(), action) {
  switch (action.type) {
    case 'RECEIVE_STICKERS':
      return action.stickers;
    default:
      return state;
  }
}

export default combineReducers({
  customization,
  stickers,
});
