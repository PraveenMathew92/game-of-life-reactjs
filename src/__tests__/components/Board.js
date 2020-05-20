import React from "react";
import { shallow } from 'enzyme';
import Board from "../../components/Board";

describe('Board Component', () => {
    it('should have empty cells at start', () => {
        const component = shallow(<Board />);
        expect(component.state('cells')).toEqual([]);
    })
})