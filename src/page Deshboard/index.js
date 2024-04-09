import React,{useState} from 'react'
import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import {patientData} from '../data'
function Deshboard() {
  const [patient,setpatient]=useState(patientData);
  const [selectedpatient,setselectedpatient]=useState(null);
  const [isadding,setisadding]=useState(false);
  const [isediting,setisediting]=useState(false);
  
  const handleEdit = (id) => {
    const [patientToEdit] = patient.filter(patient => patient.id === id);

    setselectedpatient(patientToEdit);
    setisediting(true);
};

const handleDelete = (id) => {
    Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
    }).then((result) => {
        if (result.value) {
            const [deletedPatient] = patient.filter((patient) => patient.id === id);

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: `${deletedPatient.Name}'s data has been deleted.`,
                showConfirmButton: false,
                timer: 1500,
            });

            setpatient(patient.filter((patient) => patient.id !== id));
        }
    });
};



  return (
    
  
    <div className='container'>
       {/* List */}
      
       {!isadding && !isediting && (
                <>
                    <Header
                        setisadding={setisadding}
                    />
                    <List
                        patient={patient}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isadding && (
                <Add
                    patient={patient}
                    setpatient={setpatient}
                    setisadding={setisadding}
                />
            )} 
             {/* Edit */}
             {isediting && (
                <Edit
                    patient={patient}
                    selectedpatient={selectedpatient}
                    setpatient={setpatient}
                    setisediting={setisediting}
                />
            )}

            
    </div>
  )
}

export default Deshboard
