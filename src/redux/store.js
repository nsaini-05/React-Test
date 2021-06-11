import { configureStore } from '@reduxjs/toolkit'
import chat from './slices/chatSlice'
import user from './slices/userSlice'

export const store = configureStore({
	reducer: {
		chat,
		user
		
	}
})