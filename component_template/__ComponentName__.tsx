import React, { FC, useState } from 'react';

interface Props {}

const __ComponentName__: FC<Props> = () => {
  const [value, setValue] = useState<string>('Hello');

  return (
    <>
      <h1>{value} __ComponentName__ Component</h1>
    </>
  );
};

export default __ComponentName__;
