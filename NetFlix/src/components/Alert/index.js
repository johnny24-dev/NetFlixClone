/**
 * This source base on library https://github.com/testshallpass/react-native-dropdownalert
 */

import AlertManager from './AlertManager';
import DropdownAlert from './DropdownAlert';
import React, { Component } from 'react';

// Type display dropdown
export const TYPE = {
  SUCCESS: 'success',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
  success: 'success',
  info: 'info',
  warn: 'warn',
  error: 'error',
};
/**
 * To display dropdown Alert in top screen
 * @param type type of Alert (check it in TYPE above)
 * @param title title of Alert
 * @param description description of Alert
 */
export function showAlert(type, title, description) {
  const ref = AlertManager.getDefault();

  if (!!ref) {
    ref.alertWithType(type, title, description);
  }
}
/**
 * To hide dropdown Alert in top screen
 */
export function hideAlert() {
  const ref = AlertManager.getDefault();

  if (!!ref) {
    ref.closeAction();
  }
}


export class Alert extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AlertManager.register(this.dropDownAlertRef);
  }

  componentWillUnmount() {
    AlertManager.unregister(this.dropDownAlertRef);
  }

  render() {
    return (
      <DropdownAlert
        // inactiveStatusBarBackgroundColor={R.colors.colorMain}
        // activeStatusBarBackgroundColor={R.colors.colorMain}
        // successImageSrc={R.images.iconSuccess}
        // titleStyle={{ color: '#fff' }}
        // messageStyle={{ color: '#fff' }}
        // warnImageSrc={R.images.warnIcon}
        // errorImageSrc={R.images.iconError}
        // infoImageSrc={R.images.iconNotification}
        closeInterval={2000}
        ref={ref => {
          this.dropDownAlertRef = ref;
        }}
        // warnColor={R.colors.orange400}
        // defaultContainer={{
        //   borderBottomRightRadius: WIDTHXD(30),
        //   borderBottomLeftRadius: WIDTHXD(30),
        //   paddingTop: HEIGHTXD(30),
        //   paddingVertical: HEIGHTXD(30),
        //   paddingHorizontal: WIDTHXD(20)
        // }}
      />
    )
  }
}