import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import store from "./utils/redux/store";

import Base_component from "./Components/Base_container";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <>
        <Base_component />
      </>
    </Provider>
  );
}

export default App;
