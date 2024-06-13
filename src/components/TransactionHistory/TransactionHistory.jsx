import Transaction from "../Transaction/Transaction";
import css from "./TransactionHistory.module.css"


export default function TransactionHistory({items}){
return (
<table className={css.table}>
    <thead className={css.head}>
        <tr>
            <th className={css.header}>Type</th>
            <th className={css.header}>Amount</th>
            <th className={css.header}>Currency</th>
        </tr>
    </thead>
    <tbody className={css.tableBody}>
        {items.map((item) => (
            <tr key={item.id} className={css.row}>
            <Transaction item={item}/>
            </tr>)
        )}
    </tbody>
</table>
)}