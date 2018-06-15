// Dependencies
import React from 'react';
//Internals
import Products from '../Products';
import Designers from '../Designers';
import './index.css';
import { map } from 'lodash';
import Slider from 'react-slick';


class Collection extends React.Component {
	constructor(props) {
		super(props);
	}

	goTo(n) {
	    this.refs.slider.slickGoTo(n);
	}

	goNext() {
	    this.refs.slider.slickNext();
	}

	goPrevious() {
	    this.refs.slider.slickPrev();
	}

	render() {
		const LeftArrow = (props) => {
		  return (
		    <button {...props} className="material-icons left__arrow">
		      arrow_back
		    </button>
		  );
		}

		const RightArrow = (props) => {
		  return (
		    <button {...props} className="material-icons right__arrow">
		      arrow_forward
		    </button>
		  );
		}

		let IMAGES = ['/images/front-banner/img1.jpg', '/images/front-banner/img2.jpg', '/images/front-banner/img3.jpg'];
		let settings = { 
			dots: true,
			className: 'sample',
			arrows: true,
			speed: 200
		};

		let processedData = map(IMAGES, (image, index) => {
			return (<div className="banner_img" key={index}><img src={image} alt="banner" /></div>);
		});

		return(
		  <div className="app_container">
		  	<Slider {...settings} className="slider">
			  {processedData}
			</Slider>
		    <Designers />
		    <Products />
		  </div>
		);

	}
}

export default Collection;