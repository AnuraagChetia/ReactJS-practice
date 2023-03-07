import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2023, 3, 5);
  const expenseTitle = "Car Insuranse";
  const expenseAmount = 256;
  const locationOfExpenditure = "Assam";
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div>{locationOfExpenditure}</div>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
