import React from 'react'

function List({patient,handleEdit,handleDelete}) {
  return (
    <div className='contain-table'>
    <table className='striped-table'>
        <thead>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>BP</th>
                <th>Pulse</th>
                <th>Oxygen</th>
                <th>Date</th>
                <th colSpan={2} className="text-center">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {patient.length > 0 ? (
                patient.map((patient, i) => (
                    <tr key={patient.id}>
                        <td>{i + 1}</td>
                        <td>{patient.Name}</td>
                        <td>{patient.BP}</td>
                        <td>{patient.Pulse}</td>
                        <td>{patient.Oxygen}</td>
                        <td>{patient.date} </td>
                        <td className="text-right">
                            <button
                                onClick={() => handleEdit(patient.id)}
                                className="button muted-button"
                            >
                                Edit
                            </button>
                        </td>
                        <td className="text-left">
                            <button
                                onClick={() => handleDelete(patient.id)}
                                className="button muted-button"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={7}>No patients</td>
                </tr>
            )}
        </tbody>
    </table>
      
    </div>
  )
}

export default List
