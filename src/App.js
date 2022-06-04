import { useState } from 'react';
import './App.css';
import Form from './components/form/form';
import Table from './components/table/table';

var uniqueId = 1;

function App() {
  const [tableItems, setTableitems] = useState([])

  const addNewItem = (valName, valLoc) => {
    uniqueId++;
    setTableitems([...tableItems, {
      name: valName,
      location: valLoc,
      id: uniqueId
    }])
  }

  const deleteEntry = (delItem) => {
    setTableitems(tableItems.filter(item => item.id !== delItem.id))
  }

  return (
    <div className="App">
      <Form addItem={addNewItem} />

      <Table 
        tableItems={tableItems}
        deleteEntry={deleteEntry}
      />
    </div>
  );
}

export default App;
