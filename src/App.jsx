import { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import { Provider } from "react-redux";
import store from "./utils/appStore/store";

function App() {
   const [count, setCount] = useState(0);

   return (
      <Provider store={store}>
         <div className="bg-[#0F0F0F] text-white">
            <Header />
            <MainBody />
         </div>
      </Provider>
   );
}

export default App;
