import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CalendarHeader } from '../components/CalendarHeader';
import { CalendarLinks } from '../components/CalendarLinks';
import { CalendarProvider } from '../components/CalendarProvider';
import { store } from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<CalendarProvider>
				<CalendarHeader />
				<Component {...pageProps} />
				<CalendarLinks />
			</CalendarProvider>
		</Provider>
	)
}

export default MyApp
