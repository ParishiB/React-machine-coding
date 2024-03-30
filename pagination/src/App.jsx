import React, { useState } from "react";

const App = () => {
  const [show, setShow] = useState([]);
  const data = [
    {
      number: 1,
      item: "item_1",
    },
    {
      number: 2,
      item: "item_2",
    },
    {
      number: 3,
      item: "item_3",
    },
    {
      number: 4,
      item: "item_4",
    },
    {
      number: 5,
      item: "item_5",
    },
    {
      number: 6,
      item: "item_6",
    },
    {
      number: 7,
      item: "item_7",
    },
    {
      number: 8,
      item: "item_8",
    },
    {
      number: 9,
      item: "item_9",
    },
    {
      number: 10,
      item: "item_10",
    },
  ];
  const len = data.length;

  const previous_data = (e) => {};
  const next_data = (e) => {};

  for (let i = 0; i < len; i++) {
    setShow(data[2]);
  }

  return (
    <div>
      <div className="p-2 flex">
        <button onClick={previous_data}>prev</button>
        {data.map((item, index) => (
          <>
            <div className="">
              <button className="p-2 bg-slate-500 m-2" key={index}>
                {index + 1}
              </button>
            </div>
          </>
        ))}
        <button onClick={next_data}>next</button>
      </div>
    </div>
  );
};

export default App;
