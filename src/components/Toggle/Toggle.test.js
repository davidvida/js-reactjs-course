import React from 'react';
import Toggle from '.';
import { act } from "react-dom/test-utils";
import { render } from 'react-dom';
import { fireEvent, screen } from '@testing-library/react';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

let container = null;
let toggleCallback = () => jest.fn();

beforeEach(() => {
  // Variable setting
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // destroy some resources
  container.remove();
  container = null;
});

describe('Render <Toggle /> component', () => {
  it('Renders <Toggle /> with label "My Label"', () => {
    act(() => {
      render(<Toggle label="My Label" />, container);
    });
    expect(container.textContent).toContain('My Label');
  });

  it('Renders <Toggle /> deactive by default', () => {
    act(() => {
      render(<Toggle label="My Label" />, container);
    });
    expect(container.querySelector('input[type="checkbox"]').checked).toEqual(false);
  });

  it('Should change to active the <Toggle /> after dispatch click', () => {
    act(() => {
      render(<Toggle label="My Label" onToggle={toggleCallback} />, container);
      fireEvent.click(screen.getByTestId('toggle'));
    });
    expect(container.querySelector('input[type="checkbox"]').checked).toEqual(true);
  });

  it('Should change to inactive the <Toggle active={true} /> after dispatch click', () => {
    act(() => {
      render(<Toggle label="My Label" onToggle={toggleCallback} active={true} />, container);
    });
    act(() => {
      fireEvent.click(screen.getByTestId('toggle'));
    });
    expect(container.querySelector('input[type="checkbox"]').checked).toEqual(false);
  });
});
