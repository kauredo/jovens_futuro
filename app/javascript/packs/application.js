/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// Support component names relative to this directory:
var componentRequireContext = require.context('components', true);
var ReactRailsUJS = require('react_ujs');
ReactRailsUJS.useContext(componentRequireContext);
import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from '../components/images/ImageSlider';

import './trix-editor-overrides';
require('@rails/activestorage').start();
require('trix');
require('@rails/actiontext');

const removeElementsAround = el => {
	if (el) {
		if (
			el.previousElementSibling &&
			el.previousElementSibling.outerHTML === '<br>'
		) {
			el.previousElementSibling.outerHTML = '';
		}
		if (el.nextElementSibling && el.nextElementSibling.outerHTML === '<br>') {
			el.nextElementSibling.outerHTML = '';
		}
		el.outerHTML = '';
	}
};

const checkForSlider = () => {
	const blobs = document.getElementById('blobs');
	let slider = document.querySelector('.attachment-gallery');
	console.log(slider);
	console.log(blobs);
	if (blobs) {
		const sliders = document.getElementsByTagName('action-text-attachment');
		if (slider) {
			for (let index = 0; index < sliders.length; index++) {
				removeElementsAround(sliders[index]);
			}
		} else {
			for (let index = 0; index < sliders.length; index++) {
				if (index > 0) {
					removeElementsAround(sliders[index]);
				} else {
					slider = sliders[index];
				}
			}
		}
	}

	if (slider && blobs) {
		ReactDOM.render(
			<ImageSlider photos={JSON.parse(blobs.textContent)} />,
			slider
		);
	}
};

if (window.location.href.includes('artigos/')) {
	document.addEventListener('turbolinks:load', checkForSlider);
}
