import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // console.log(newCoffee);

    // send data to the server
    fetch("https://coffee-server-ebon.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Great Choice",
          });
        }
      });
  };
  return (
    <div className="min-h-screen bg-[url('/your-bg-image.jpg')] bg-no-repeat bg-cover px-4">
      <div className="max-w-4xl mx-auto bg-base-200 rounded-xl shadow-xl p-10 mt-20">
        <a
          href="/"
          className="flex items-center mb-6 text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back to home
        </a>
        <h2 className="text-2xl font-bold text-center text-neutral mb-2">
          Add Coffee Details
        </h2>
        <p className="text-center text-sm text-gray-500 mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form
          onSubmit={handleAddCoffee}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Americano Coffee"
              className="input input-bordered w-full"
              name="name"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="text"
              placeholder="Mr. Matin Paul"
              className="input input-bordered w-full"
              name="chef"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Cappu Authorizer"
              className="input input-bordered w-full"
              name="supplier"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Sweet and hot"
              className="input input-bordered w-full"
              name="taste"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Americano"
              className="input input-bordered w-full"
              name="category"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="Espresso with hot water"
              className="input input-bordered w-full"
              name="details"
            />
          </div>
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="https://i.ibb.co/PQcMPrg/11.png"
              className="input input-bordered w-full"
              name="photo"
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="btn btn-block bg-[#D2B48C] hover:bg-[#c9a974] text-black"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
