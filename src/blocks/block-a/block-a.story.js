import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import {DisplayA} from "./components/displayA";

storiesOf('The Storybook Demo For Button', module)
	.add('with text', () => (
		<Button>Hello Button</Button>
	))
	.add('with some emoji', () => (
		<Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
	));
storiesOf( 'Block A', module)
	.add('Display Component', () => (
		<DisplayA message={'Hi Roy'}/>
	));
