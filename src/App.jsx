import { Home } from "./components/Home/Home";
import { BlogDetail } from "./components/blogDetail/BlogDetail";
import { CardDetails} from "./components/blogDetail/PostDetails";
import { Root } from "./components/pages/Root";
import store from "./store/index";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <BlogDetail /> },
      { path: "/blogs/:id", element: <CardDetails/> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
