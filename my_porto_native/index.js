import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './src/screens';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [{
  label: 'Fund Products',
  screen: 'my-porto.FundProducts',
  icon: require('./img/swap.png'),
  title: 'Fund Products',
},{
  label: 'Actions',
  screen: 'example.Actions',
  icon: require('./img/swap.png'),
  title: 'Navigation Actions',
},{
  label: 'Navigation',
  screen: 'example.Types',
  icon: require('./img/list.png'),
  title: 'Navigation Types',
}, ];

if (Platform.OS === 'android') {
  tabs.push({
    label: 'Transitions',
    screen: 'example.Transitions',
    icon: require('./img/transform.png'),
    title: 'Navigation Transitions',
  });
}

// this will start our app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#2ED1A2',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#13598C',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#2ED1A2',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#13598C',
    navigationBarColor: '#2ED1A2',
    navBarBackgroundColor: '#2ED1A2',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  drawer: {
    left: {
      screen: 'example.Types.Drawer'
    }
  }
});