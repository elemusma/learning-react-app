// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// function ListGroup(props: ListGroupProps) {
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // let selectedIndex = 0;
  // Hook: allows us to tap into built-in features in React
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState("");
  // arr[0]; // variable (selectedIndex)
  // arr[1]; //updater function
  // items = [];

  // const message = items.length === 0 ? <p>No items found.</p> : null;

  // the benefit of a function is that it can have parameters
  // const getMessage = () => {
  //   items.length === 0 ? <p>No items found.</p> : null;
  // };

  // type annotation in Typescript
  // event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage} */}
      {/* {items.length === 0 ? <p>No items found.</p> : null} */}
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log(item, index)}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}
export default ListGroup;
