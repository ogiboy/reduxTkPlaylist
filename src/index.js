import "./styles.css";
import App from "./App";
import { store } from "./redux/store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
