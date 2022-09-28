import { Card } from './Card';

interface StackProps {
	children?: any;
	spacing: number;
	direction?: string;
}

export const Stack = ({ children, spacing, direction }: StackProps) => {
	const style = {
		display: 'flex',
		gap: `${spacing * 0.25}rem`,
		flexDirection: direction
	};

	return (
		<div style={style}>
			{children}
			{/* <Card title='test' amount='test' state='positive' backgroundColor='blue' />; */}
		</div>
	);
};
