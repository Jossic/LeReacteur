import React from 'react';

const Jobs = ({ className, title, contractType, country, city }) => {
	return (
		<div
			style={{
				border: `${className} 5px solid`,
				minWidth: '30%',
				minHeight: '200px',
				margin: '10px',
				padding: '10px',
				overflow: 'auto',
				wordWrap: 'break-word',
			}}>
			<h2
				style={{
					fontSize: '20px',
					maxWidth: '100%',
				}}>
				{title}
			</h2>
			<p style={{ position: 'relative', bottom: '-160px', left: '10px' }}>
				{contractType} - {country} - {city}
			</p>
		</div>
	);
};

export default Jobs;
