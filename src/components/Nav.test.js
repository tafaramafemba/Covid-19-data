import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

describe('Nav component', () => {

  test('component match with the snapshot', () => {
    const tree = renderer.create(<BrowserRouter><Nav /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});