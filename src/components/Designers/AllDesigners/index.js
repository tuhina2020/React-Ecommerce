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
          <div className="designer-details">
        	  <img className="designer-img" alt="image" src={designer.image}/>
            <div className="designer-text">
  	          <div id="designer-name">{designer.name}</div>
  	          <div id="designer-description">{designer.description}</div>
              <div id="designer-cta">{designer.cta}</div>
            </div>
	        </div>
        </Link>
      </div>
    ))}
  </div>
)

export default AllDesigners;
