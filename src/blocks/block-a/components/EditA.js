import React from 'react';
import {TextControl,RadioControl} from '@wordpress/components';
export const EditA = ({message,onChangeMessage,useBold,onChangeBold}) =>
	 (
		<div>
			<TextControl
				label={'The Message'}
				value={message}
				onChange={onChangeMessage}
			/>
			<RadioControl
				options={ [
					{ label: 'Bold', value: true },
					{ label: 'No Special Style', value: false },
				] }
				label={'Use Bold'}
				value={useBold}
				onChange={onChangeBold}
			/>
		</div>
	);


