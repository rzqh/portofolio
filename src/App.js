import React, { Suspense } from 'react';

const LazyComponent = React.memo(React.lazy(() => import('./components/LazyComponent')));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<LazyComponent />
		</Suspense>
	);
}
export default App;
