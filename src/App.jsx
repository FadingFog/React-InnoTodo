import {RouterProvider} from "react-router-dom";
import {router} from "./routes.jsx";
import GlobalStyles from "theme/GlobalStyles.jsx";
import createCache from "@emotion/cache";
import {CacheProvider} from "@emotion/react";


const cacheNoPrefixer = createCache({
  key: "noprefixer",
  stylisPlugins: []
});

export default function App() {
  return (
    <>
      <CacheProvider value={cacheNoPrefixer}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </CacheProvider>
    </>
  )
}
