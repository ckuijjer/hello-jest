import React from 'react';

const NotExportedComponent = () => <div>"i'm not exported"</div>;

const Boop = () => (
  <div>
    Boop
    <NotExportedComponent />
  </div>
);

export default Boop;
