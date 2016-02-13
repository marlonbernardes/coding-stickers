import { combineReducers } from 'redux';
import { List as ImmutableList } from 'immutable';

export function customization(state = ImmutableList.of(), action) {
  switch (action.type) {
    case 'ADD_STICKER':
      return state.push(action.sticker);
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
  stickers
});
