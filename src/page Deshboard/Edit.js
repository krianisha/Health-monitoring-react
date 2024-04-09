import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Edit({ patient, selectedpatient, setpatient, setisediting }) {
    const [Name, setName] = useState(selectedpatient.Name);
    const [BP, setBP] = useState(selectedpatient.BP);
    const [Pulse, setPulse] = useState(selectedpatient.Pulse);
    const [Oxygen, setOxygen] = useState(selectedpatient.Oxygen);
    const [date, setDate] = useState(selectedpatient.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!Name || !BP || !Pulse || !Oxygen || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const updatedPatient = {
          id: selectedpatient.id,
          Name,
          BP,
          Pulse,
          Oxygen,
          date
        };

        const updatedPatientList = patient.map(item => {
            return item.id === selectedpatient.id ? updatedPatient : item;
        });

        setpatient(updatedPatientList);
        setisediting(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${updatedPatient.Name}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Patient</h1>
                <label htmlFor="Name">Name</label>
                <input
                    id="Name"
                    type="text"
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="BP">BP</label>
                <input
                    id="BP"
                    type="text"
                    name="BP"
                    value={BP}
                    onChange={e => setBP(e.target.value)}
                />
                <label htmlFor="Pulse">Pulse</label>
                <input
                    id="Pulse"
                    type="text"
                    name="Pulse"
                    value={Pulse}
                    onChange={e => setPulse(e.target.value)}
                />
                <label htmlFor="Oxygen">Oxygen</label>
                <input
                    id="Oxygen"
                    type="text"
                    name="Oxygen"
                    value={Oxygen}
                    onChange={e => setOxygen(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setisediting(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit;
