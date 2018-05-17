import App from 'layout/app';
import * as log from 'loglevel';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import './layout/styles/index.css';
import registerServiceWorker from './registerServiceWorker';

log.setLevel(logLevel as log.LogLevelDesc);

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root') as HTMLElement
);
interface IModule {
  hot: any;
}
declare const module: IModule;
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./layout/app.tsx', () => {
    const NextApp = require('./layout/app').default;
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    );
  })
}

registerServiceWorker();
