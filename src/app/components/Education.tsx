import React from 'react';

type Props = {
  year: string;
  text: string;
};

const MyComponent: React.FC<Props> = ({ year, text }) => {
  return (
    <div className="grid grid-cols-[auto,auto,1fr] items-center gap-5">
      <span className="text-2xl">{year}</span>
      <span className="line"></span>
      <p className="text-base">{text}</p>
    </div>
  );
};

export default MyComponent;
