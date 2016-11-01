import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import ProjectsSectionUpcoming from './ProjectsSectionUpcoming.jsx';


describe("A suite", function() {
  it("contains spec with an expectation", function() {
    const wrapper=mount(<ProjectsSectionUpcoming parent="event" upcomingList={input} />)
    expect(wrapper.find('ProjectsGridRow').length).to.eql(input.length);
  });
});
