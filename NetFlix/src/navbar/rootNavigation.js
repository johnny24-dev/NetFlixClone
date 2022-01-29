import { createNavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const goback = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function navigateReplace(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.replace(name, params),
    );
  }
}