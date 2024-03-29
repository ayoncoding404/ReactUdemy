import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.scss'

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title} //attributes name 'title' as I like.
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title} //attributes name 'title' as I like.
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title} //attributes name 'title' as I like.
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title} //attributes name 'title' as I like.
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
