import React, { FC, useState } from 'react';
interface Props {
  // optional prop with default value
  title?: string;
}

const __ComponentName__: FC<Props> = ({ title = 'Default title' }) => {
  // optional state
  const [value, setValue] = useState<string>('Hello');

  return (
    <>
      <h1>{value} __ComponentName__ Component: {title}</h1>
    </>
  );
};

export default __ComponentName__;