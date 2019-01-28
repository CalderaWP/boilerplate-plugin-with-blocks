import {createElement} from '@wordpress/element';
import 'babel-polyfill';

global.wp =  window.wp || {
	element: {
		createElement,
	}
};
