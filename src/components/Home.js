import React from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const Home = () => {
  return (
    <Card>
      <CardHeader title="hello world" />
      <CardContent>
        <ul>
          <li>Web Manifest for installing</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Home;
