import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'mc/redux/store';

type AppTheme = 'dark' | 'light';

interface SettingsState {
	theme: AppTheme;
}

const initialState: SettingsState = {
	theme: 'light',
};

export const settingsSlice = createSlice({
	name: 'app-settings',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<AppTheme>) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = settingsSlice.actions;

export const selectCount = (state: RootState) => state.settings.theme;

const settingsReducer = settingsSlice.reducer;

export default settingsReducer;
