/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Onboarding from './src/screens/onboarding/Onboarding';

AppRegistry.registerComponent(appName, () => Onboarding);
