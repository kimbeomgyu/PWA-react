import React, { useState, useEffect } from 'react';
import { Card, CardHeader } from '@material-ui/core';

const Users = () => {
  const [users, setUsers] = useState(null);


  return users === null ? (
    '... is loading'
  ) : (
    <div>
    </div>
  );
};

export default Users;
