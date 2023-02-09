import { useState } from 'react';
import EntryList from './components/EntryList/EntryList';
import NewEntry from './components/NewEntry/NewEntry';
import Modal from './components/Modal/modal';

const data = [
  { id: 1, name: 'Max', age: 31 },
  { id: 2, name: 'Victor', age: 27 },
];

let msg = '';

function App() {
  const [entries, setEntries] = useState(data);
  const [error, setError] = useState(false);

  const closeModalHandler = () => {
    setError(false);
  };

  const onNewEntryHandler = (newEntry) => {
    let { name, age } = newEntry;
    if (name === '' || age === '') {
      msg = 'Please enter valid details';
      setError(true);
    } else if (age < 0 || age > 100) {
      msg = 'Please enter a valid age i.e < 100 and > 0';
      setError(true);
    } else {
      setEntries((prev) => {
        return [newEntry, ...prev];
      });
    }
    console.log('Hello this is the', msg);
  };

  return (
    <div>
      {error && <Modal message={msg} closeModal={closeModalHandler} />}
      <NewEntry onEntry={onNewEntryHandler} />
      <EntryList listData={entries} />
    </div>
  );
}

export default App;
