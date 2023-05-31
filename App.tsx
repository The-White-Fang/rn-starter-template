import type { PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Text } from 'react-native-ui-lib';

type SectionProps = PropsWithChildren<{
	title: string;
}>;

const App: React.FC = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaView>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<Text style={{ fontFamily: 'poppins_regular', color: 'black' }}>Sample Application</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
