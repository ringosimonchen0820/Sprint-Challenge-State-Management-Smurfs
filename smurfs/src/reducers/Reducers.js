export const initialState = {
    smurf: [],
};

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_SMURF_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            };
        case ADD_SMURF:
            const smurf = { ...action.payload };
            return {
                ...state,
                smurfs: [
                    ...state.smurfs,
                    smurf
                ]
            };

    };
}