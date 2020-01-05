import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './Presentation';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
window.Notification = class Notification {
  permission: NotificationPermission;

  constructor() {
    this.permission = 'default';
  }

  async requestPermission() {
    // eslint-disable-next-line no-undef
    return Promise.resolve('denied');
  }
};

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Presentation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
