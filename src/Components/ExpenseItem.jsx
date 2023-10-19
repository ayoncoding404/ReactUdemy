import "../Components/ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const handleClick = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <button onClick={handleClick} className="expense-item__price">
            ${props.amount}
          </button>
        </div>
      </Card>
    </>
  );
};

export default ExpenseItem;

//props is the objext that hold all the values we get for the attributes on our custom elements
//{props.title}-> 'title' is the same as the name atrribute passed in the APP.js components key 'title.
//props will hold the name value called in the custom component where the attributes is passed
