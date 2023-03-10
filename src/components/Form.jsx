import React, { useEffect, useState } from "react";
import { idGenerator } from "../utils/idGenerator";

const Form = ({ setPatient, patient, editPatient }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(editPatient).length > 0) {
      setName(editPatient.name);
      setOwner(editPatient.owner);
      setEmail(editPatient.email);
      setDate(editPatient.date);
      setSymptoms(editPatient.symptoms);
    }
  }, [editPatient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verification
    if ([name, owner, email, date, symptoms].includes("")) {
      setError(true);
    } else {
      setError(false);

      //Patient Data:
      const newPatient = {
        name,
        owner,
        email,
        date,
        symptoms,
      };

      if (editPatient.id) {
        // Editando Paciente:
        newPatient.id = editPatient.id;
        const patientsUpdate = patient.map((patientState) => patientState.id === editPatient.id ? newPatient : patientState);
        setPatient(patientsUpdate);

      } else {
        // Nuevo paciente:
        newPatient.id = idGenerator();
        setPatient([...patient, newPatient]);
      }

      //Form Reset:
      setName("");
      setOwner("");
      setEmail("");
      setDate("");
      setSymptoms("");
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-black text-2xl" htmlFor="">
        Patients:
      </h2>
      <p className="text-center">
        <span className="text-indigo-600">Add</span>/
        <span className="text-indigo-600">Manage</span> Patient
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-5 flex flex-col gap-1 "
      >
        <label className="font-black" htmlFor="">
          Pet Name:
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          className="border-2 border-gray-300 rounded-sm p-2 placeholder-gray-600 outline-blue-600"
          type="text"
          placeholder="Name"
        />

        <label className="font-black" htmlFor="">
          Owner Name:
        </label>
        <input
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          id="owner"
          className="border-2 border-gray-300 rounded-sm p-2 placeholder-gray-600 outline-blue-600"
          type="text"
          placeholder="Owner"
        />

        <label className="font-black" htmlFor="">
          Email:
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          className="border-2 border-gray-300 rounded-sm p-2 placeholder-gray-600 outline-blue-600"
          type="email"
          placeholder="Your Email"
        />

        <label className="font-black" htmlFor="">
          Register Date:
        </label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          id="date"
          className="border-2 border-gray-300 rounded-sm p-2 placeholder-gray-600 outline-blue-600"
          type="date"
        />

        <label className="font-black" htmlFor="">
          Symptoms:
        </label>
        <textarea
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          id="symptoms"
          className="border-2 border-gray-300 rounded-sm p-2 placeholder-gray-600 outline-blue-600"
          type="text"
          placeholder="Symptoms Description"
        />
        {error ? (
          <p className="font-bold text-red-600">All fields are required!</p>
        ) : (
          <p className="text-transparent">-</p>
        )}
        <input
          type="submit"
          value={editPatient.id ? "Edit Patient" : "Add Patient"}
          className="bg-blue-600 text-white font-bold h-10 rounded-md hover:bg-blue-500 shadow-md mt-2"
        />
      </form>
    </div>
  );
};

export default Form;
