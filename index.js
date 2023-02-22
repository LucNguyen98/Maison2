/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Onboarding from './src/screens/onboarding/Onboarding';
import Welcome from './src/screens/onboarding/Welcome';

AppRegistry.registerComponent(appName, () => Welcome);
