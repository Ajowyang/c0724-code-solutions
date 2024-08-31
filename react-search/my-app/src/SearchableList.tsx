import { useState } from 'react';

export function SearchableList() {
  const [inputVal, setInputVal] = useState('');

  const visibleItems = [
    `Yer a wizard Harry.`,
    `I hope you're pleased with yourselves.`,
    `It does not do well to dwell on dreams and forget to live.`,
    `To the well-organized mind, death is but the next great adventure`,
    `You're a little scary sometimes, you know that? Brilliant... but scary`,
    `There will be no foolish wand-waving or silly incantations in this class`,
    `It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.`,
  ];

  const filteredItems = visibleItems.filter((item) =>
    item.toLocaleLowerCase().includes(inputVal.toLocaleLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <SearchField changeVal={(str) => setInputVal(str)}></SearchField>
      <div className="flex w-96">
        <StrList strings={filteredItems}></StrList>
      </div>
    </div>
  );
}

type StrListProps = {
  strings: string[];
};
function StrList({ strings }: StrListProps) {
  const listItems = [];
  if (strings.length === 0) {
    return <p>No items match the filter.</p>;
  }

  for (let i = 0; i < strings.length; i++) {
    listItems.push(<li key={i}>{strings[i]}</li>);
  }

  return <ul className="list-disc">{listItems}</ul>;
}

type SearchFieldProps = {
  changeVal: (str: string) => void;
};

function SearchField({ changeVal }: SearchFieldProps) {
  return (
    <input
      type="text"
      className="w-96 my-4 border px-2"
      onChange={(e) => changeVal(e.target.value)}></input>
  );
}
