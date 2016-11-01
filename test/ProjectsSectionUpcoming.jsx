import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ProjectsGridHeader from './ProjectsGridHeader.jsx';
import ProjectsGridRow from './ProjectsGridRow.jsx';
export default class ProjectsSectionUpcoming extends React.Component{
  	render() {
  		var parent=this.props.parent;
  		return (
  			<div id="projects-inner-section">
				<div className="grid-invites">
					<ProjectsGridHeader/>

            {this.props.upcomingList.map(function (item){
              return (
              <ProjectsGridRow parent={parent} key={item._id} project={item}/> //invite='true'
              );
            })}
          

				</div>
			</div>
	    );
	}
};
