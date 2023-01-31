import React, { useState } from "react";

function App() {
  const [screws, setScrews] = useState([{ id: 1, name: "Csavar 1" }, { id: 2, name: "Csavar 2" }]);

  const addScrew = (screw) => {
    setScrews([screws, screw]);
  };

  const removeScrew = (id) => {
    setScrews(screws.filter((screw) => screw.id !== id));
  };

  return (
    <div>
      <h1>Csavarok</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {screws.map((screw) => (
            <tr key={screw.id}>
              <td>{screw.id}</td>
              <td>{screw.name}</td>
              <td>
                <button onClick={() => removeScrew(screw.id)}>Eltávolít</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Csavar hozzáadása</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addScrew({ id: screws.length + 1, name: e.target.elements.name.value });
        }}
      >
        <input type="text" name="name" placeholder="Adja meg a csavar nevét" />
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
}

export default App;
