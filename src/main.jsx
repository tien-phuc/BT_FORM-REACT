import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./StoreReduxToolkit/configStore.js";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
