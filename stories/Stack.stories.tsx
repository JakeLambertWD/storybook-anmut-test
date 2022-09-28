import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stack } from './Stack';
import { Card } from './Card';
import { StatsCardSignups } from './Card.stories';

export default {
	title: 'Example/Stack',
	component: Stack,
	argTypes: {
		numberOfChildren: { type: 'number', defaultValue: 4 }
	}
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = ({ numberOfChildren, ...args }: any) => (
	<Stack {...args}>
		{[...Array(numberOfChildren).keys()].map(n => (
			<StatsCardSignups
				key={n}
				title='Diagnostic Starting'
				amount='8,450'
				state={n === 1 ? 'positive' : 'negative'}
			/>
		))}
	</Stack>
);

export const StackComponent = Template.bind({});
StackComponent.args = {
	direction: 'row',
	spacing: 2
};
