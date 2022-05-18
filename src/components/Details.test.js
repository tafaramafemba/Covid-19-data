import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Details from './Details';

describe(' Details Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
      <Details />
    </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});