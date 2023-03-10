import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './redux/store/configureStore';
import Login from './screens/auth/login/Login';
import Onboarding from './screens/onboarding/Onboarding';
const storeConfig = configureStore();
export const store = storeConfig.store;
class Root extends PureComponent {
  render() {
    return (
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          {/* <Onboarding /> */}
          <Login />
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
