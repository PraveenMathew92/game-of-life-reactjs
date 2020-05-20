import React from "react";
import { shallow } from 'enzyme';
import Cell from "../../components/Cell"

describe('Cell Component', () => {
    it('should render the Cell', () => {
        const component = shallow(<Cell />);
        expect(component.find(".Cell")).toHaveLength(1);
    });

    it('should have style prop', () => {
        const component = shallow(<Cell x="5" y="6"/>);
        expect(component.prop("style")).toStrictEqual({
            "height": "19px",
            "left": "101px",
            "top": "121px",
            "width": "19px"
        });
    });
});