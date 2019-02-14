import FirstPage from '../page/FirstPage';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('example.FirstTabScreen', () => FirstPage);
Navigation.registerComponent('example.secondTabScreen', () => FirstPage);