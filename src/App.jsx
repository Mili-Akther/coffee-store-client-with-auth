import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData(); 
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">--- Sip & Savor ---</p>
          <h2 className="text-3xl font-bold text-brown-800 font-serif">
            Our Popular Coffees
          </h2>
          <div className="mt-4">
            <button className="btn btn-sm bg-amber-200
             hover:bg-amber-300 text-brown-900 border-amber-400 flex items-center gap-1 mx-auto">
              Add Coffee <span className="text-lg">☕</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
