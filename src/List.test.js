import React from 'react';
import List from './List';
import Card from './Card'
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={[]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List cards={[{id: 4, title: 'Ace', content: 'Strang'}, {id: 3, title: 'King', content: 'Strangggg'}]}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
