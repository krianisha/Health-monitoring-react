import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ patient, setpatient, setisadding }) {

    const [Name, setName] = useState('');
    const [BP, setBP] = useState('');
    const [Pulse, setPulse] = useState('');
    const [Oxygen, setOxygen] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();  // not refresh
        if (!Name || !BP || !Pulse || !Oxygen || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = patient.length + 1; // Assuming patient is an array of existing patients
        const newPatient = {
            id,
            Name,
            BP,
            Pulse,
            Oxygen,
            date
        }
        patient.push(newPatient);
        setpatient(patient);
        setisadding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${Name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Patient</h1>
                <label htmlFor="Name">Name</label>
                <input
                    id="Name"
                    type="text"
                    ref={textInput}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setisadding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;
