import React from "react";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changePath, deleteItem, editItem } from "../redux/action";

function Table() {
  const data = useSelector((el) => el?.data);
  const dispatch = useDispatch();
  console.log(data);
  const handleDelete = (el) => {
    const payload = {
      recid: el,
    };
    dispatch(deleteItem(payload));
  };
  const handleEdit = (el) => {
    dispatch(editItem(el));
  };
  const Changepath = () => {
    const payload = {
      changepath: true,
    };
    dispatch(changePath(payload));
  };
  return (
    <div className={styles.tablediv}>
      <table className={styles.table}>
        <tr className={styles.heading}>
          <th>Printer#</th>
          <th>Name</th>
          <th>Workstation</th>
          <th>Type</th>
          <th className={styles.actionTH}>Action</th>
        </tr>
        {data?.map((el) => (
          <>
            <tr className={styles.tabletd}>
              <td>{el.recid}</td>
              <td>{el.name}</td>
              <td>{el.stationnum}</td>
              <td>{el.prtype}</td>
              <div className={styles.btnDiv}>
                <button onClick={() => handleEdit(el)}>Edit</button>
                <button onClick={() => handleDelete(el.recid)}>Delete</button>
              </div>
            </tr>
          </>
        ))}
      </table>
      <button onClick={Changepath} className={styles.saveBtn}>
        ADD
      </button>
    </div>
  );
}

export default Table;
