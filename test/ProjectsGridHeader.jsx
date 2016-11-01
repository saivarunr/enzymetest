import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class ProjectsGridHeader extends React.Component{
  	render() {
	    return (
			<div className="row grid-header">
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 grid-header-cell left pad-left-30">START DATE</div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 grid-header-cell left">PROJECT NAME</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 grid-header-cell left">AVAILABLE SEATS</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 grid-header-cell left">PROJECT STATUS</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 grid-header-cell">MORE ACTIONS</div>
			</div>
	    );
	}
};
