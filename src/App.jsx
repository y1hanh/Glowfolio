import "./styles/theme.css";
import { Outlet } from "react-router";
import { Navigation } from "./components/navigation";
import { ThemeToggle } from "./components/themeToggle";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <ThemeToggle />
    </div>
  );
}

export default App;
