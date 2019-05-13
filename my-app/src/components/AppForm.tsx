import React, { useState } from 'react';

interface UpperProps {
  children: string;
}

const Upper = React.memo(({ children = '' }: UpperProps) => {
  const [count, setCount] = useState<number>(0);
  console.log({ children });

  return (
    <div>
      {`UpperCase version ${children.toUpperCase()} `}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
});

export const AppForm: React.FC = () => {
  const [first, setFirst] = useState<string>('');
  const [last, setLast] = useState<string>('');
  return (
    <form>
      <label htmlFor='firstNameInput'>First Name</label>
      <input type='text' id='firstNameInput' onChange={({ target: { value } }) => setFirst(value)} />
      <Upper>{first}</Upper>
      <hr />
      <label htmlFor='lastNameInput'>Last Name</label>
      <input type='text' id='lastNameInput' onChange={({ target: { value } }) => setLast(value)} />
      <Upper>{last}</Upper>
    </form>
  );
};
