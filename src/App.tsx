import { Provider } from "react-redux";
import { store } from "./store";
import RepositoriesList from "./components/RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
