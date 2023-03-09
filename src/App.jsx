import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import { idGenerator } from "./utils/idGenerator";

function App() {
  const [patient, setPatient] = useState([]);
  const [editPatient, setEditPatient] = useState({});


  useEffect(() => {
    setPatient([
      {
      name: "Little",
      owner: "Junhy Aviña",
      email: "jonhy.kisi@gmail.com",
      date: "2023-03-10",
      symptoms: "It has cough and flue",
      id: idGenerator()    
    },
    {
      name: "Timon",
      owner: "Junhy Aviña",
      email: "jonhy.kisi@gmail.com",
      date: "2023-03-10",
      symptoms: "It has cough and flue",
      id: idGenerator()    
    },

  ])
    
  }, [])
  

  return (
    <div className="p-5 w-full">
      <Header />
      <div className="grid gap-5 md:grid-cols-3">
        <Form patient={patient} setPatient={setPatient} editPatient={editPatient} setEditPatient={setEditPatient}/>
        <PatientList patient={patient} setEditPatient={setEditPatient}/>
      </div>
    </div>
  );
}

export default App;
