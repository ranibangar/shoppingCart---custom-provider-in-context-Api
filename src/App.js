import Navbar from "./components/navbar";
import Items from "./components/items";
import CustomProvider from "./itemContext";
import { useValue } from "./itemContext";
function App() {
  const {total} = useValue();
console.log("total",total);
  return (
    <>
    <CustomProvider>
    <div>
      <h1>Shooping Cart</h1>
      <Navbar />
      <Items />
    </div>
    </CustomProvider>
    </>
  );
}

export default App;
