import * as actions from '../actions/types'


// define initial state
const initialState = [
    {
        id: 1,
        title: 'This is the test todo',
        isCompleted: false
    }
]



export default function (state = initialState, action) {
    switch (action.type) {
        case actions.NEW_TODO:
            return [
                ...state,
                {
                    id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
                    title: action.payload.todoTitle,
                    isCompleted: false
                }
            ]
        case actions.REMOVE_TODO:
            return (
                state.filter((st) => st.id !== action.payload.todoId)
            )

        case actions.CHECK_TODO:
            return (
                state.map((st) => st.id === action.payload.todoId ? { ...st, isCompleted: !st.isCompleted } : st)
            )
        default:
            return state;
    }
}

/*
step 2
here we create our reducers --> only reducers can handling states
action is an object contain all what we dispatched

hint:
    - how to add 	--> using spread operatop [...prevState , {newObject}]
    - hot to remove --> using filter !==
    - hot to update --> using map !== ? st : {...st , prop}


note:
    store is an imutable object we can not write
    store.state = { new state }
    so we have to use reducers to update states

    using reducer in two ways
        - using spread operator
        - using immer library

    reducer change state depending on the action
    so our stores may have many states
    each reducer is responsible for one state

    reducers has to be pure function
 */