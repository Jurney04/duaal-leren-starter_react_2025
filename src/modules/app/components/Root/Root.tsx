import { App } from '~/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 60,
			gcTime: 1000 * 60 * 60 * 24,
			refetchOnWindowFocus: false,
		},
	},
});

export const Root = () => (
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
);
