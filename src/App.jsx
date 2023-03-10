import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  const [patient, setPatient] = useState([]);
  const [editPatient, setEditPatient] = useState({});

  useEffect(() => {
    // Make an object and Save there patients in localStorage
    const patientLocalStorage = localStorage.getItem("patient");
    if (patientLocalStorage) {
      setPatient(JSON.parse(patientLocalStorage)); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('patient', JSON.stringify(patient))
  }, [patient]);

  return (
    <div className="p-4">
      <Header />
      <div className="grid gap-5 md:grid-cols-3">
        <Form
          patient={patient}
          setPatient={setPatient}
          editPatient={editPatient}
          setEditPatient={setEditPatient}
        />
        <PatientList
          patient={patient}
          setEditPatient={setEditPatient}
          setPatient={setPatient}
        />
      </div>
    </div>
  );
}

export default App;
