import React from "react";
import { Eye, Edit, Trash } from "lucide-react"; // Make sure lucide-react is installed
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees ,setCoffees }) => {
  const { _id, name, chef, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
      {/* Coffee Image */}
      <div className="w-42 h-42 flex-shrink-0">
        {name === "Cappuccino Coffee" ? (
          <div className="w-full h-full relative">
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute bottom-0 right-0">
              <img
                src={photo}
                alt="Small version"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        ) : (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover rounded"
          />
        )}
      </div>

      {/* Coffee Info */}
      <div className="flex-1 space-y-1">
        <p className="text-sm text-gray-800 font-medium">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-sm text-gray-800 font-medium">
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p className="text-sm text-gray-800 font-medium">
          <span className="font-semibold">Supplier:</span> {supplier}
        </p>
        <p className="text-sm text-gray-800 font-medium">
          <span className="font-semibold">Taste:</span> {taste}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <button className="w-8 h-8 rounded-lg bg-amber-200 flex items-center justify-center">
          <Eye size={16} className="text-gray-700" />
        </button>
        <Link to={`updateCoffee/${_id}`}>
          <button className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
            <Edit size={16} className="text-gray-700" />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center"
        >
          <Trash size={16} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
