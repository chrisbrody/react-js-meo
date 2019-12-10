const people = {}

export default function people_reducer(state=people, action) {
    switch(action.type) {
        case "GET_PEOPLE":
            return {
                ...state,
                getPeople:action.payload
            }

        case "PERSON_DETAIL":
            // console.log(action.payload)
            return {
                ...state,
                // from const mapStateToProps ../components/PersonDetail.js
                personDetail:action.payload
            }

        default: 
            return state
    }
}