import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ end }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const endCount = end;
		const duration = 2000; // Animation duration in milliseconds
		const increment = endCount / (duration / 100);

		const updateCount = () => {
			if (start < endCount) {
				start += increment;
				setCount(Math.min(Math.floor(start), endCount));
				setTimeout(updateCount, 100);
			}
		};

		updateCount();
	}, [end]);

	return <h3>{count}</h3>;
};

Counter.propTypes = {
	end: PropTypes.number.isRequired,
};

export default Counter;
