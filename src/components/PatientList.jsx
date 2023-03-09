import React from "react";

const PatientList = ({ patient, setEditPatient}) => {

  return (
    <div className=" w-full flex flex-col gap-2 md:col-span-2">
      <h2 className="font-black text-3xl">Patient List:</h2>
      <p className="text-center">Manage your patient</p>

      {patient.map((pet, i) => (
        <div key={i} className="bg-white shadow-md rounded-lg py-5 px-5 grid grid-flow-dense grid-cols-2 gap-2 ">
          <p className="font-black">
            Name: <span className="font-normal">{pet.name}</span>
          </p>
          <p className="font-black col-span-2">
            Owner: <span className="font-normal">{pet.owner}</span>
          </p>
          <p className="text-right col-start-2 row-start-1">{pet.date}</p>
          <div className=" col-span-2">
            <p className="font-black">Symptoms:</p>
            <p>{pet.symptoms}</p>
          </div>

          <div className="flex justify-between col-span-2">
            <button onClick={()=> setEditPatient(pet)}
              className="p-2 font-black text-white bg-blue-600 rounded-md w-1/3 hover:bg-blue-500 shadow-md"
            >
              Edit
            </button>
            <button className="p-2 font-black text-white bg-red-600 rounded-md w-1/3 hover:bg-red-500 shadow-md">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
