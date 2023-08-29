import React from 'react';
import { useParams } from 'react-router-dom';

function MiComponente() {
  const { variable } = useParams();

  return (
    <div>
      <p>Variable desde la URL: {variable}</p>
    </div>
  );
}

export default MiComponente;


