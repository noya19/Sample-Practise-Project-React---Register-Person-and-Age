import React, { useState } from 'react';

import styles from './NewEntry.module.css';

const NewEntry = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    // console.log(event.target.value);
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    // console.log(event.target.value);
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    const newEntry = {
      id: Math.random(),
      name: userName,
      age: age,
    };
    event.preventDefault();
    setUserName('');
    setAge('');
    props.onEntry(newEntry);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles['new-Entry']}>
        <div className={styles['new-Entry__input']}>
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className={styles['new-Entry__input']}>
          <label>Age (Years)</label>
          <input type="number" value={age} onChange={ageChangeHandler}></input>
        </div>
        <div className={styles['new-Entry__action']}>
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default NewEntry;
