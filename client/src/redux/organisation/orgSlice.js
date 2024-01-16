import {createSlice} from '@reduxjs/toolkit';


const initialState={
currentOrg:null,
loading:false,
error:null
}

const orgSlice=createSlice({
    name:'organisation',
    initialState,
    reducers:{
        signInStart:(state)=>{
                  state.loading=true;
        },
        signInSuccess:(state,action)=>{
            state.loading=false;
            state.currentOrg=action.payload;
            state.error=null
        },
        signInFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
}
)

export const {signInSuccess, signInFailure,signInStart} = orgSlice.actions;
export default orgSlice.reducer;