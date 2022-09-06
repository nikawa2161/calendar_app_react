import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// store
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import Navigation from "./components/Navigation/container";
import CalendarBoard from "./components/CalendarBoard/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

dayjs.locale("ja");

// Redux
import { Provider } from "react-redux";
// applyMiddlewareの追加
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/rootReducer";


const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalendarBoard />
      <AddScheduleDialog />
      <CurrentScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
);


ReactDOM.render(<App />, document.getElementById("root"));
