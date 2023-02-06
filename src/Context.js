import React, { useContext, useEffect, useReducer } from "react"




const AppContext = React.createContext(null)

function reducer(state, action) {
    switch (action.type) {
            case 'date': {
                return {
                    ...state,
                date: action.payload
                }
            }
            case 'time': {
                return {
                    ...state,
                time: action.payload
                }
            }
            case 'guests': {
                return {
                    ...state,
                guests: action.payload
                }
            }
            case 'occasion': {
                return {
                    ...state,
                occasion: action.payload
                }
            }
            case 'localStorage': {
                return {
                    ...state,
                    date: action.payload.date,
                    time: action.payload.time,
                    guests: action.payload.guests,
                    occasion: action.payload.occasion,
                    
                }
            }
    
    
        default:
            break;
        }
    }
    const initialState = {
        date: '',
        time: '',
        guests: '',
        occasion:'',
    }

console.log(initialState)
const AppProvider = ({ children }) => {
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    
    
    const [state, dispatch] = useReducer(reducer, initialState)
    const { date, time, guests, occasion } = state;
    
    useEffect(() => {
        const localStorageData = localStorage.getItem('data');
        if (localStorageData) {
            dispatch({ type: 'localStorage', payload: JSON.parse(localStorageData) })
        } 
    },[])


    return <AppContext.Provider value={{
        date,
        time,
        guests,
        occasion,
        dispatch,
        fetchAPI,
        submitAPI
    }}>
        {children}
    </AppContext.Provider>
}



const useGlobalContext = () => {
    return  useContext(AppContext)
}

export {useGlobalContext,AppProvider,AppContext}