import { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import { Provider } from "react-redux";
import store from "./utils/appStore/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
   const appRouter = createBrowserRouter([
      {
         path: "/",
         element: <MainBody />,
         children: [
            {
               path: "/",
               element: <MainContainer />,
            },
            {
               path: "/watch",
               element: <WatchPage />,
            },
         ],
      },
   ]);
   return (
      <Provider store={store}>
         <div className="bg-[#0F0F0F] text-white">
            <Header />
            <RouterProvider router={appRouter} />
         </div>
      </Provider>
   );
}

export default App;
