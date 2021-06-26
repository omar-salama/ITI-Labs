import "./App.css";
import Navbar from "./components/Navbar";
import AppRouter from "./app-router";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container mt-4">
        <AppRouter />
      </div>
    </Provider>
  );
};

export default App;