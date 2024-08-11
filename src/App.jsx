import Textgradients from "./components/Textgradients";
import TextImage from "./components/TextImages";
import { Tabs } from "antd";
import { Toaster } from "react-hot-toast";

function App() {
  const { TabPane } = Tabs;

  function Changetheme() {
    const bodyElement = document.body;
    bodyElement.style.backgroundColor =
      bodyElement.style.backgroundColor === "antiquewhite"
        ? "black"
        : "antiquewhite";
  }

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Tabs centered className="w-full">
        <TabPane
          tab={
            <span className="text-blue-600 font-bold text-xl">
              Text Gradients
            </span>
          }
          key="1"
        >
          <div className="w-full">
            <Textgradients />
          </div>
        </TabPane>

        <TabPane
          tab={
            <span className="text-blue-600 font-bold text-xl ">Text Image</span>
          }
          key="2"
        >
          <div className="w-full">
            <TextImage />
          </div>
        </TabPane>
      </Tabs>

      <div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" className="checkbox" onChange={Changetheme} />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
}

export default App;
