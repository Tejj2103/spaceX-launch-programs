export const FETCH_LANDING_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_LANDING_SUCCESS = 'GET_ALL';
export const FETCH_LANDING_ERROR = 'FETCH_PRODUCTS_ERROR';

export const getAllData = (filters) => {
    var url = formQuery(filters)
    return dispatch => {
        dispatch(addTodoStarted());
        fetch(url)
            .then(res => res.json())
            .then(res => {
                dispatch(addTodoSuccess(res));
                if (res.error) {
                    throw (res.error);
                }
            }).catch(error => {
                dispatch(addTodoFailure(error.message));
            });
    }
}

const formQuery = (filters) => {
    var url = "https://api.spacexdata.com/v3/launches?limit=100";
    if (filters) {
        if (filters.launch === "True") {
            filters.launch = "true"
        }
        if (filters.launch === "False") {
            filters.launch = "false"
        }
        if (filters.land === "True") {
            filters.land = "true"
        }
        if (filters.land === "False") {
            filters.land = "false"
        }
        var filterVals = [filters.launch, filters.land, filters.year]
        var filterKeys = ['launch_success', 'land_success', "launch_year"]

        for (var i = 0; i < filterVals.length; i++) {
            if (filterVals[i] != null && !url.includes("?")) {
                url = url + "?" + filterKeys[i] + "=" + filterVals[i];
            } else if (filterVals[i] != null) {
                url = url + "&" + filterKeys[i] + "=" + filterVals[i];
            }
        }
    }
    return url
}


const addTodoStarted = () => ({
    type: FETCH_LANDING_PENDING
});

const addTodoSuccess = todo => ({
    type: FETCH_LANDING_SUCCESS,
    payload: {
        ...todo
    }
});



const addTodoFailure = error => ({
    type: FETCH_LANDING_ERROR,
    payload: {
        error
    }
});
