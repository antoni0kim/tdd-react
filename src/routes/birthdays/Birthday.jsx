import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Span = styled.span`
  display: inline-block;
  width: 100px;
`;

export default function Birthday(props) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  useEffect(() => {
    setName(props.name);
    setDob(props.dob);
  }, [props.name, props.dob]);
  return (
    <>
      <Span>
        <strong>{name}</strong>
      </Span>
      <Span>{dob}</Span>
    </>
  );
}
