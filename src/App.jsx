import {RouterProvider} from "react-router-dom";
import {router} from "routes";
import GlobalStyles from "theme/GlobalStyles";
import createCache from "@emotion/cache";
import {CacheProvider} from "@emotion/react";


const cacheNoPrefixer = createCache({  // Removes prefixes in css
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
