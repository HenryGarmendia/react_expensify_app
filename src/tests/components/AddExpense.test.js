import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/add_expense';

test('should render AddExpense correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpense onSubmit={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot();
});