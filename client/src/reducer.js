import { List as ImmutableList } from 'immutable';

export default function (state = ImmutableList.of(), action) {
  switch (action.type) {
    case 'ADD_STICKER':
      return state.push(action.sticker);
    case 'CLEAR_CUSTOMIZATION':
      return ImmutableList.of();
    default:
      return state;
  }
}
