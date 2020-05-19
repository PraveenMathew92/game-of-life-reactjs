import React from "react";
import { shallow } from 'enzyme';
import Cell from "../Cell"

describe('Cell Component', () => {
    it('should render the Cell', () => {
        const component = shallow(<Cell />);
        expect(component.find(".Cell")).toHaveLength(1);
    });
});