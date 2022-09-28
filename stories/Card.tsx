import React from 'react';
import { FaJs, FaReact } from 'react-icons/fa';
import './card.css';

interface CardProps {
	title?: string;
	amount?: string;
	state?: 'positive' | 'negative';
	backgroundColor?: string;
}

export const Card = ({ title, amount, state, backgroundColor }: CardProps) => {
	return (
		<div className='card'>
			<div className='column'>
				<p>{title}</p>
				<p className='amount'>{amount}</p>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<div
						style={
							state === 'positive'
								? { backgroundColor: 'green' }
								: { backgroundColor: 'red' }
						}
						className='rounded'
					>
						<p>+12%</p>
					</div>
					<p>Since last month</p>
				</div>
			</div>
			<div>
				<div
					className='icon'
					style={{
						backgroundColor,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<FaReact style={{ fontSize: '15px', color: 'white' }} />
				</div>
			</div>
		</div>
	);
};
