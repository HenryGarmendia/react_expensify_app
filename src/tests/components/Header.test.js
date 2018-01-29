import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header';

test('should render header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe('Expensify Web-App');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
});