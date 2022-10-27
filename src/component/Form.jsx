import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, cancel, update } from "../redux/action";
import styles from "./Navbar.module.css";

function Form() {
  const obj = {
    name: "",

    stationnum: "",

    port: "",

    prtype: "",

    height: "",

    width: "",

    linetonext: "",

    printbar: false,

    printname: false,

    printtest: false,

    pins: "",

    extra: "",

    checksum: false,

    skip: false,

    indent: "",

    labelType: "",

    filler: "",

    recid: "",
    checkbox: false,
  };
  const dispatch = useDispatch();
  const { isEdit, edit } = useSelector((el) => el);
  const [input, setInput] = useState(isEdit ? edit : obj);
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setInput({
      ...input,
      [name]: value,
      [name]: checked,
    });
  };
  const handleCancel = () => {
    const payload = { isEdit: false };
    dispatch(cancel(payload));
  };
  const handleSave = () => {
    const isEdit = {
      item: input,
      isEdit: false,
    };
    dispatch(addItem(isEdit));
    setInput(obj);
  };
  const handleupdate = () => {
    dispatch(update(input));
  };

  return (
    <div>
      <div className={styles.div}>
        <h3 className={styles.h3}>Barcode Printer Information</h3>
        <div
          style={{
            border: "1px solid black",
            width: "30%",
            marginLeft: "118px",
            backgroundColor: "blue",
            marginBottom: "-25px",
            color: "white",
            textAlign: "center",
          }}
        >
          {isEdit ? input.name : "ADD SOMETHING"}
        </div>

        <div className={styles.form}>
          <label>
            Barcode#
            <input
              disabled={isEdit}
              name="recid"
              value={input.recid}
              onChange={handleChange}
            />
          </label>
          <label>
            Printer Name
            <input value={input.name} name="name" onChange={handleChange} />
          </label>
          <label>
            Printer Type
            <select
              onChange={handleChange}
              name="prtype"
              defaultChecked={input.skip}
            >
              <option value="Blaster">Blaster</option>
              <option value="Blaster2">Blaster2</option>
              <option value="Advantage">Advantage</option>
              <option value="Zebra">Zebra</option>
              <option value="Sigma">Sigma</option>
            </select>
          </label>
          <label>
            Port/Command
            <input value={input.port} name="port" onChange={handleChange} />
          </label>
          <label>
            Workstation Connected
            <input
              value={input.stationnum}
              name="stationnum"
              onChange={handleChange}
            />
          </label>
        </div>

        <h3 className={styles.h32}>Additional Info</h3>
        <div className={styles.form2}>
          <label>
            Label Height (Lines)
            <input name="height" value={input.height} onChange={handleChange} />
          </label>
          <label>
            Label Width (Chars)
            <input name="width" value={input.width} onChange={handleChange} />
          </label>
          <label>
            Lines to Next Label
            <input
              name="linetonext"
              value={input.linetonext}
              onChange={handleChange}
            />
          </label>
          <label>
            Indent (Char)
            <input name="indent" value={input.indent} onChange={handleChange} />
          </label>
          <label>
            Print Barcode
            <input
              type="checkbox"
              name="printbar"
              defaultChecked={input.printbar}
              value={input.printbar}
              onChange={handleChange}
            />
          </label>
          <label>
            Print Name
            <input
              type="checkbox"
              name="printname"
              defaultChecked={input.printname}
              value={input.printname}
              onChange={handleChange}
            />
          </label>
          <label>
            Print Tests
            <input
              type="checkbox"
              name="printtest"
              defaultChecked={input.printtest}
              value={input.printtest}
              onChange={handleChange}
            />
          </label>
          <label>
            Barcord Type
            <select name="pins" onChange={handleChange} value={input.pins}>
              <option value="BAR128"> BAR128</option>
              <option value="BAR128C"> BAR128C</option>
              <option value="BAR25"> BAR25</option>
              <option value="BAR39">BAR39</option>
              <option value="CODABAR"> CODABAR</option>
            </select>
          </label>
          <label>
            Label Type
            <select
              name="labelType"
              onChange={handleChange}
              value={input.labelType}
            >
              <option value="Blank"> Regular</option>
              <option value="Y"> 2 columns</option>
              <option value="M"> Small 2 column</option>
              <option value="S"> Small</option>
              <option value="A">Smaller</option>
              <option value="O"> Barcode+accession only</option>
              <option value="B">B= Cognitive 1”X0.5”</option>
              <option value="C">Cytology 2”X2”</option>
              <option value="SRC"> Small Rectangle Circle</option>
            </select>
          </label>
          <label>
            Number of Extra Labels
            <input name="extra" value={input.extra} onChange={handleChange} />
          </label>

          <label>
            Use Checksum
            <input
              type="checkbox"
              name="checksum"
              defaultChecked={input.checksum}
              value={input.checksum}
              onChange={handleChange}
            />
          </label>
          <label>
            Do NOT skip blank label
            <input
              type="checkbox"
              name="skip"
              defaultChecked={input.skip}
              value={input.skip}
              onChange={handleChange}
            />
          </label>
        </div>
        <div style={{ display: "flex" }}>
          <button
            className={styles.saveBtn}
            onClick={isEdit ? handleupdate : handleSave}
          >
            {isEdit ? "UPDATE" : "SAVE"}
          </button>
          <button className={styles.canBtn} onClick={handleCancel}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
