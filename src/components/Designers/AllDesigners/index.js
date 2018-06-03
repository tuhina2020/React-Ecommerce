//Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import {map, isEmpty} from 'lodash';
//Internals
import DESIGNERS from '../../Data/designers.js';
import './index.css';

const AllDesigners = () => (
  <div className="designers">
    {map(DESIGNERS, (designer)=> (
      <div key={designer.id} className="designer">
        <Link to={`/designers/${designer.id}`}>
        	<div className="designer-img">
	        </div> 
	        <div className="designer-details">
            <div className="designer-text">
  	          <h3 id="designer-name">{designer.name}</h3>
  	          <h4 id="designer-description">{designer.description}</h4>
  	          <h4 id="designer-location">{designer.location}</h4>
            </div>
	        </div>
        </Link>
      </div>
    ))}
  </div>
)

export default AllDesigners;
