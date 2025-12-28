import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "../data.js"
function App() {

  const entryels = data.map((entry)=>{
      return (
        <div className=" pt-15 pl-20 border-b border-gray-300">
        <Entry
          key = "id"
          {...entry}
        />
        </div>
      )
  })
  
  return (
    <>
      <Header />
      {entryels}
     
    </>
  );
}

export default App;
