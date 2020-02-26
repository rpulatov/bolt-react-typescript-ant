const STATE_KEY = 'firedoors_state';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(STATE_KEY);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(STATE_KEY, serializedState);
    } catch (err) {
        // Ignore write errors
    }
};

export const getToken = () => {
    try {
       return loadState().auth.token;
    } catch (err) {
        return undefined
    }
};