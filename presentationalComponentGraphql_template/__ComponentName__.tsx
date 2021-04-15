import React, { FC } from 'react';
import type { Nullable } from  '@zen/utils/typescript';

interface Props {
  id: number;
}

const __ComponentName__: FC<Props> = ({ id }) => {
  const { data, lodaing } = useXyzQuery({ variables: { id } });

  if (loading) {
    return <Spinner />;
  }

  const name: Nullable<string> = data?.xyz?.nodes[0]?.name;

  if (!name) {
    return null;
  }

  return (
    <h1 data-testid="name">{name}</h1>
  );
};

export default __ComponentName__;