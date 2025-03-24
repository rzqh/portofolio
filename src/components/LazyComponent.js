import React from 'react';

// Hapus forwardRef jika ref tidak diperlukan
const LazyComponent = (props) => {
	return (
		<div>
			<p>This is the LazyComponent</p>
		</div>
	);
};

LazyComponent.displayName = 'LazyComponent';

export default LazyComponent;