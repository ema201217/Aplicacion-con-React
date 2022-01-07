import ComponentWrapper from "./components/ComponentWrapper";
import SideBar from "./components/SideBar";

function App() {
 
  return (
    <div id="wrapper">
      {/*  Sidebar  */}
      <SideBar />
      {/*  End of Sidebar  */}

      {/*  Content Wrapper  */}
      <ComponentWrapper />
      {/*  End of Content Wrapper  */}
    </div>
  );
}

export default App;
