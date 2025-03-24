import React, { useCallback } from 'react';

const SomeComponent = React.memo(({ data, onAction }) => {
	const handleAction = useCallback(() => {		
		onAction();
	}, [onAction]);

	return (
		<div>			
			<button onClick={handleAction}>Action</button>
		</div>
	);
});

SomeComponent.displayName = 'SomeComponent';

export default SomeComponent;
