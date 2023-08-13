import { writable } from 'svelte/store';

export const users = writable([
	{
		user_id: 1,
		username: 'SunTzu',
		password: 'estudiaycreceras',
		active: false
	},
	{
		user_id: 2,
		username: 'Kaizen',
		password: 'sicopiasnoaprendes',
		active: true
	}
]);
