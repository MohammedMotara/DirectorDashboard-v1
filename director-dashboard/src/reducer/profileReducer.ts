// Action types
export const FETCH_COMP_PROFILE = "FETCH_COMP_PROFILE";
export const SUCCESS_FETCH_COMP_PROFILE = "SUCCESS_FETCH_COMP_PROFILE";
export const FAILURE_FETCH_COMP_PROFILE = "FAILURE_FETCH_COMP_PROFILE";

export const FETCH_SEARCH = "FETCH_SEARCH";
export const SET_BOOKS = "SET_PROFILE";


// Action Creator Interfaces

export interface IGetCompProfileAction {
  type: typeof FETCH_COMP_PROFILE;
}
export interface IGetCompProfileSuccessAction {
  type: typeof SUCCESS_FETCH_COMP_PROFILE;
  compProfile: ICompProfile[];
}
export interface IGetCompProfileFailureAction {
  type: typeof FAILURE_FETCH_COMP_PROFILE;
  error: Error;
}


// Action Creators

export const getCompProfile = (): IGetCompProfileAction => ({
  type: FETCH_COMP_PROFILE
});
export const getCompProfileSuccess = (compProfile: ICompProfile[]): IGetCompProfileSuccessAction => ({
  type: SUCCESS_FETCH_COMP_PROFILE,
  compProfile
});
export const getCompProfileFailure = (error: Error): IGetCompProfileFailureAction => ({
  type: FAILURE_FETCH_COMP_PROFILE,
  error
});


export const fetchCompProfile = (authorName: string) => (dispatch: any) => {
    const apiKey = '20d0Tt-7wir2DgqEnbrXXIVXj9aeZSxFjdOnFBhs'
    const compNumber = 6470842;

    dispatch(getCompProfile());
    fetch(
        `curl -u${apiKey}:https://api.companieshouse.gov.uk/company/0${compNumber}`
    )
    .then(res => res.json())
    .then(data => dispatch(getCompProfileSuccess(data)))
    .catch(error => dispatch(getCompProfileFailure(error)));
};


// INITIAL STATE OF OBJECT

export interface ICompProfile {
    type: string;
    registered_office_address: ICompAddress;
    company_name: string;
    date_of_creation: string;
}

export interface ICompAddress {
    country: string;
    postal_code: string;
    address_line_2: string;
    address_line_1: string;
    locality: string;
}

// COMBINING ACTION CREATOR INTERFACES FOR REDUCER

type IProfileActions = 
  | IGetCompProfileAction
  | IGetCompProfileSuccessAction
  | IGetCompProfileFailureAction;

// Reducer and initial State object - This is where the Switch Statement goes

export interface IProfileState {
  compProfile: ICompProfile[];
  loading: boolean;
  error: null | Error
}

const initialState: IProfileState = {
    compProfile: [],
    loading: false,
    error: null
    
};


const profileReducer = (state = initialState, action: IProfileActions) => {
    switch (action.type) {
        case FETCH_COMP_PROFILE:
          return { ...state, loading: true, error: null };
        case SUCCESS_FETCH_COMP_PROFILE:
          return { ...state, loading: false, error: null, compProfile: action.compProfile };
        case FAILURE_FETCH_COMP_PROFILE:
          return { ...state, loading: false, error: action.error };
        default:
          return state;
      }
};
    
export default profileReducer;