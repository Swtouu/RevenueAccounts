import Item from "./Item";
import "./Transaction.css";

const Transaction = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className="item-list">
        {items.map((e) => {
          // return <Item title={e.title} amount={e.amount}/>
          return <Item {...e} key={e.id} />;
        })}
      </ul>
    </div>
  );
};

export default Transaction;
