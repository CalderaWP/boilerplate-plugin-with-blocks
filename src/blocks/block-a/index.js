import {DisplayA} from "./components/DisplayA";
import {InspectorControls} from '@wordpress/editor';
import {EditA} from "./components/EditA";
export const name = 'hmr-demo/block-a';
const attributes = {
	message: {
		type: 'string',
		default: 'Type your message'
	},
	useBold: {
		type: 'boolean',
		default: false,
	}
}
export const options = {
	title: 'Sample Block A',

	description: 'Render a sample block.',

	icon: 'image-filter',

	category: 'widgets',
	attributes,
	edit({isSelected,attributes,setAttributes}) {
		const {message,useBold} = attributes;
		const onChangeMessage = (message ) => setAttributes({message});
		const onChangeBold = (useBold ) => setAttributes({useBold});
		if( isSelected){
			return <DisplayA
				message={message}
				useBold={useBold}
			/>
		}
		return <InspectorControls>
			<EditA useBold={useBold} message={message} onChangeBold={onChangeBold} onChangeMessage={onChangeMessage}/>
		</InspectorControls>
	},

	save({attributes}) {
		const {message,useBold} = attributes;
		return <DisplayA
			message={message}
			useBold={useBold}
		/>
	},
};
