import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
// import DataFetching from './components/DataFetching';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      <UserContext.Provider value={"Austin"}>
        <ChannelContext.Provider value={"Pagotto"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
