import React,{ Component } from 'react';
import ForkBanner from './fork-banner';
import PlatformList from '../containers/platforms-list';
import GreetMessage from '../containers/greet-message';

export default class App extends Component {
  render() {
    return (
      <div>
        <ForkBanner url="https://github.com/AceDZN/ReduxGulpStarterKit" />
        <GreetMessage />
        <PlatformList />
      </div>
    );
  }
}
