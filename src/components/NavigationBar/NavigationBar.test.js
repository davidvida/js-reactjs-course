import React from "react";
import NavigationBar from ".";
import { shallow } from 'enzyme';

// Enzyme adapter configuration
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

let wrapper = null;

beforeEach(() => {
  // Variable setting
});

afterEach(() => {
  // destroy some resources
  // wrapper.unmount();
});

describe('', () => {
  it('Render 8 <ListItemLink /> components for two drawers', () => {
    act(() => {
      wrapper = shallow(<NavigationBar />);
    });
    console.log(wrapper.debug());
    expect(wrapper.find('ListItemLink')).toHaveLength(8);
  });
});
