import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	descriptionVisible: false,
	searchVisible: false,
	profileVisible: false,
	notificationVisible: false,
};

export const modalSlice = createSlice({
	name: "slice for controlling modals",
	initialState,
	reducers: {
		showDescription: (state, actions) => {
			state.descriptionVisible = true;
		},
		hideDescription: (state, actions) => {
			state.descriptionVisible = false;
		},
		showSearch: (state, actions) => {
			state.searchVisible = true;
		},
		hideSearch: (state, actins) => {
			state.searchVisible = false;
		},
		showProfile: (state, actions) => {
			state.profileVisible = true;
		},
		hideProfile: (state, actions) => {
			state.profileVisible = false;
		},
		showNofication: (state, actions) => {
			state.notificationVisible = true;
		},
		hideNotification: (state, actions) => {
			state.notificationVisible = false;
		},
	},
});

export const {
	showDescription,
	hideDescription,
	showProfile,
	showSearch,
	hideProfile,
	hideSearch,
	showNofication,
	hideNotification,
} = modalSlice.actions;

export default modalSlice.reducer;