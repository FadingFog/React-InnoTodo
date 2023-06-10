import {RouterProvider} from "react-router-dom";
import {router} from "./routes.jsx";
import GlobalStyles from "theme/GlobalStyles.jsx";


export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}
