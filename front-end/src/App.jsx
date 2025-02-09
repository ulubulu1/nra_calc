import React from 'react';
import AppHeader from './components/AppHeader';
import './App.scss';
import AppFooter from './components/AppFooter';
import NRACalculator from './components/NRACalculator';
import Tabs from './components/Tabs/Tabs';
import Resources from './components/Resources';

function App() {
  return (
    <div className="App">
      <AppHeader>Neighborhood Revitalization Act</AppHeader>
      <Tabs>
        <div label="Calculator">
        <p>
          This is an effort by the Unified Government of Wyandotte County and 
          Kansas City, Kansas to promote revitalization of designated areas through
          tax incentives on new construction and improvements. Start below to estimate your potential tax incentive.
        </p>
        <NRACalculator></NRACalculator>
        </div>
        <div label="Resources">
          <Resources />
        </div>
        <div label="Contact">
        <div><p><b>Contact:</b> Stephanie M. Moore</p></div>
        <div><p><b>Email:</b> smmoore@wycokck.org</p></div>
        <div><p><b>Phone:</b> (913) 573-5730</p></div>
        </div>
      </Tabs>
      <AppFooter>
        Created in partnership with <a href="https://codeforkc.org">Code for KC</a><br />
        Contribute code on <a href="https://github.com/codeforkansascity/nra_calc">Github</a>
      </AppFooter>
    </div>
  );
}

export default App;
