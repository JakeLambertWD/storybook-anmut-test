import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
	title: 'Example/Card',
	component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const StatsCardSignups = Template.bind({});
StatsCardSignups.args = {
	title: 'Sign ups',
	amount: '27,000',
	state: 'negative',
	backgroundColor: 'yellow'
};

export const StatsCardInvited = Template.bind({});
StatsCardInvited.args = {
	title: 'Invited',
	amount: '215',
	state: 'positive',
	backgroundColor: 'blue'
};

export const StatsCard = <Card />;
