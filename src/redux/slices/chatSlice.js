import { createSlice } from '@reduxjs/toolkit'
var faker = require('faker');

var randomProfiles = [];
for(let i = 0 ; i < 5 ; i++){
	var randomCard = faker.helpers.createCard();
	randomCard.avatar = faker.image.avatar();
	randomProfiles.push(randomCard);     
}

const chatSlice = createSlice({
	name: 'chat',
	
	initialState: {
		conversations: randomProfiles,
	},
	
	reducers: {
		
	}
});

export const {} = chatSlice.actions
export default chatSlice.reducer

export {randomProfiles};