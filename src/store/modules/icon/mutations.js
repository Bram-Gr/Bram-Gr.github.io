export const TOGGLE_ICON_VISIBILITY = (state, showIcon) => {
    state.showIcon = showIcon; // Toggle the showIcon state
    console.log("showIcon state after toggle", state.showIcon); 
  };

  export const SET_ICON_VISIBILITY = (state, newValue) => {
    state.showIcon = newValue;
  };

