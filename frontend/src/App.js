import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import './App.scss'
import CustomTodoContext from "./context/TodoContext";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ])

  return (
    <div className="App">
      <CustomTodoContext>
      <RouterProvider router={router} />
      </CustomTodoContext>
    </div>
  );
}

export default App;
