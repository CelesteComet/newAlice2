var initialState = {
  isVisible: false,
  desktop: window.innerWidth >= 1200,
  reset: false
}

export const MenuReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_VISIBILITY':
      var copy = Object.assign({}, state);
      copy.isVisible ? copy.isVisible = false : copy.isVisible = true;
      return copy;
    case 'SET_WINDOW_SIZE':
      var copy = Object.assign({}, state);
      window.innerWidth <= 1200 ? copy.desktop = false : copy.desktop = true;
      return copy;
    case 'RESET':
      var copy = Object.assign({}, state);
      copy.reset ? copy.reset = false : copy.reset = true;
      return copy;
    default: 
      return state;
  }
}

export default MenuReducer;