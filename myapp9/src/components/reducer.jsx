import React, { useReducer ,useEffect} from "react";


const Reducer=()=>{

    const FETCH_INIT='FETCH_INIT'
    const FETCH_START='FETCH_START'
    const FETCH_ERROR='FETCH_ERROR'

    const initialstate = {
        loading:true,
        data : null,
        error : null
    }

    const dataReducer=(state,action)=>{
        switch (action.type) {
            case FETCH_INIT:
                return {...state, loading :true, error:null}
            case FETCH_START:
                return {...state, loading : false, data:action.payload}
            case FETCH_ERROR:
                return {...state, loading : false, error:action.payload}
                        
            default:
                return state;
        }

    }

    const datahandler=async ()=>{
       try {
        dispatch({type:FETCH_INIT})
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const new_data= await response.json()
        dispatch({type:FETCH_START,payload:new_data})
        
       } catch (error) {
        dispatch({type : FETCH_ERROR, payload:error})
        
       }


    }

    useEffect(()=>{
        datahandler()
    },[])


    const [state, dispatch]=useReducer(dataReducer,initialstate)
    
    return (
        <div>
        {state.loading && <p>'LOading'</p>}
        {state.data && <div>{state.data.map((item)=>{
            return (<div>{item.name}</div>)
        })}</div>}
        {state.error && <div>{alert(state.error)}</div>}
        </div>
    )
}

export default Reducer;