import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
export default class ProjectsGridRow extends React.Component{
	constructor(){
		super();
		this.gotoActionEdit = this.gotoActionEdit.bind(this);
	}
	// gotoActionEdit: function(node, event) {
 //  		ReactDOM.render(<Test name={node.name}/>, document.getElementById('view-container'));
	// },
	gotoActionEdit(node, event) {
  		// ReactDOM.render(<ProjectsActionInvite project={node}/>, document.getElementById('view-container'));
  		//ReactDOM.render(<CreateProjectBase projectId={node._id} projectName={node.name} projectType={node.type}/>, document.getElementById('sub-view-container'));
  		var parent=this.props.parent;
  		if(parent=="event")
  			window.location.href="#viewEvent/"+this.props.project._id;
  		else
  			window.location.href="#viewProject/"+this.props.project._id;
	}
	/* toggleInviteModal: function(node, event) {
		console.log(node);
  		$("#modal-project-datetime").html(node.start_date+", "+node.start_time);
  		$("#modal-project-name").html(node.name);
  		$("#modal-project-description").html(node.description);
  		$("#modal-project-seats p").html("<b>"+node.available_seats+"</b> of "+node.total_seats+" available");
	}, */
  	render() {
    	return (
			<div className="row grid-entry">
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 grid-entry-cell">
					<div className="cell-date">{this.props.project.start_date}</div>
				</div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 grid-entry-cell left">{this.props.project.name}</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 grid-entry-cell left">{this.props.project.available_seats}/{this.props.project.total_seats}</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 grid-entry-cell left">{this.props.project.state}</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 grid-entry-cell pad-top-10">
					<div onClick={this.gotoActionEdit.bind(this, this.props.project)} className="icon-options center pointer"/>
				</div>
			</div>
	    );
	}
};
