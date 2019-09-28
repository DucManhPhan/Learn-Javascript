import React, {Component} from 'react';
import { hot } from 'react-hot-loader/root';

import '../styles/index.scss';

/**
 * The difference between PureComponent and Component
 * https://reactjs.org/docs/react-api.html#reactpurecomponent
 */
class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                {/* <h2>Hi!</h2> */}
            </div>
        );
    }
}

export default hot(App);
