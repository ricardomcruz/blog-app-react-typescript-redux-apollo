export interface AppState {
  darkMode: boolean;
}

const darkMode = !!localStorage.getItem('darkMode');

const initialAppState: AppState = {
    darkMode
};

export default initialAppState;
