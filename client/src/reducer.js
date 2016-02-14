import { combineReducers } from 'redux';
import { List as ImmutableList, Map } from 'immutable';

function mapSticker(sticker, i) {
  return new Map({ id: i,
    image: sticker.image,
    widthInInches: sticker.dimensions.width,
    heightInInches: sticker.dimensions.height,
  });
}


export function customization(state = ImmutableList.of(), action) {
  switch (action.type) {
    case 'ADD_CUSTOMIZATION':
      return state.push(action.sticker);
    case 'REMOVE_CUSTOMIZATION':
      return state.set(action.index, state.get(action.index).merge(new Map({
        visible: false,
      })));
    case 'SELECT_STICKER':
      return state.set(action.index, state.get(action.index).merge(new Map({
        selected: true,
      })));
    case 'CLEAR_SELECTION':
      return state.map(s => s.remove('selected'));
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

export function product(state = new Map(), action) {
  switch (action.type) {
    case 'CHANGE_PRODUCT_DIMENSIONS':
      return new Map({
        widthInInches: action.widthInInches,
        heightInInches: action.heightInInches,
      });
    default:
      return state;
  }
}

export function stickers(state = ImmutableList.of(), action) {
  switch (action.type) {
    case 'RECEIVE_STICKERS':
      return ImmutableList.of(...action.stickers.map(mapSticker));
    default:
      return state;
  }
}

export function pagination(state = new Map({ current: 1, perPage: 9 }), action) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return state.set('current', action.value);
    default:
      return state;
  }
}

export default combineReducers({
  customization,
  stickers,
  product,
  pagination,
});
