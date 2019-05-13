import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './list.js';


describe('list component', () => {
  const Card = [
    { title: 'First card', content: 'lorem ipsum' },
    { title: 'Second card', content: 'lorem ipsum' }
  ]

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header='First list' cards={Card} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<List header='First list' cards={Card} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})