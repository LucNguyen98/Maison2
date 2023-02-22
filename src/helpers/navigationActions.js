import { StackActions, CommonActions } from '@react-navigation/native';
let _navigator;
class NavigationActionsClass {
  setNavigation(navigation) {
    this.navigation = navigation;
    StackActions.push();
  }

  push = params => {
    if (this.navigation) {
      const pushAction = StackActions.push(params);
      this.navigation.dispatch(pushAction);
    }
  };

  pop = params => {
    if (this.navigation) {
      const popAction = StackActions.pop(params);
      this.navigation.dispatch(popAction);
    }
  };

  resetTo = params => {
    if (this.navigation) {
      const resetAction = CommonActions.reset({
        index: 0,
        actions: [CommonActions.navigate(params)]
      });

      this.navigation.dispatch(resetAction);
    }
  };

  toggleDrawer = params => {
    if (this.navigation) {
      this.navigation.toggleDrawer(params);
      // this.navigation.dispatch(pushAction);
    }
  };

  navigate = (routeName, params) => {
    _navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params
      })
    );
  };

  goBack = () => _navigator.dispatch(CommonActions.goBack());

  setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
  }
}

const navigationActions = new NavigationActionsClass();
export default navigationActions;
