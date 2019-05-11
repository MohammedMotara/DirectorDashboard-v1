// Action Types

export const OPEN_DROPDOWN = "OPEN_DROPDOWN"


// Action Creator Interfaces

export interface IOpenMenu {
    type: typeof OPEN_DROPDOWN
};

// Action Creators

  export const openMenu = (): IOpenMenu => ({
    type: OPEN_DROPDOWN
  });
  
// Reducer and initial State object - This is where the Switch Statement goes


type IGeneralActions = 
IOpenMenu;


// reducer with initial state

export interface IGeneralState {
  menuOpen: boolean;
}

const initialState: IGeneralState = {
  menuOpen: false
};


const generalReducer = (state = initialState, action: IGeneralActions) => {
  switch (action.type) {
    case OPEN_DROPDOWN:
      return { ...state, menuOpen: !state.menuOpen };
    default:
      return state;
  }
};

export default generalReducer;
