import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Home from './Home';


describe(' Home Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});