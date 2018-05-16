import { observer } from 'mobx-react';
import * as React from 'react';
import { appInject } from '../app.container';
import { SimpleState } from './simple.state';

@observer
class Simple extends React.Component {
    @appInject.lazyInject(SimpleState) private simpleState: SimpleState;
    public componentDidMount() {
        this.simpleState.query();
    }
    public render() {
        return (
            <strong>
                {this.simpleState.name}
            </strong>
        );
    }
}

export default Simple;