import { createSlice } from '@reduxjs/toolkit'
import{randomProfiles} from './chatSlice'
const user = createSlice({
	name: 'user',
	
	initialState: {
		selectedSender: randomProfiles[0],
	},
	
	reducers: {
		select (state, action) {
            state.selectedSender = action.payload
        }
	}
});

export const {select} = user.actions
export default user.reducer