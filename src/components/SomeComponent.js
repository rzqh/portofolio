import React, { useCallback } from 'react';

const SomeComponent = React.memo(({ data, onAction }) => {
	const handleAction = useCallback(() => {
		// ...existing code...
		onAction();
	}, [onAction]);

	return (
		<div>
			{/* ...existing code... */}
			<button onClick={handleAction}>Action</button>
		</div>
	);
});

export default SomeComponent;
