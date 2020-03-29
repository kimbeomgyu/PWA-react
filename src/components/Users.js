import React, { useState, useEffect } from 'react';

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
