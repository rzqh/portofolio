import React, { Suspense, lazy } from 'react';

// LazyComponent tetap menggunakan React.lazy
const LazyComponent = lazy(() => import('./components/LazyComponent'));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			{/* Tidak meneruskan ref */}
			<LazyComponent />
		</Suspense>
	);
}
export default App;
