import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { Card, CardHeader } from '@material-ui/core';

const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (users === null) {
      const db = firebase.firestore();
      const snapshot = db.collection('users').get();
      snapshot
        .then(collection => collection.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        .then(setUsers)
        .catch(err => console.log(err), setUsers([]));
    }
  }, [users]);

  return users === null ? (
    '... is loading'
  ) : (
    <div>
      {users.map(({ id, name }) => (
        <Card key={id}>
          <CardHeader title={name} />
        </Card>
      ))}
    </div>
  );
};

export default Users;
