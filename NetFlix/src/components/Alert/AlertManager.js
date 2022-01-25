class AlertManager {
  _defaultDropdown = null;

  register(_ref) {
    if (!this._defaultDropdown) {
      this._defaultDropdown = _ref;
    }
  }

  unregister(_ref) {
    if (!!this._defaultDropdown && this._defaultDropdown._id === _ref._id) {
      this._defaultDropdown = null;
    }
  }

  getDefault() {
    return this._defaultDropdown;
  }
}

export default new AlertManager();
