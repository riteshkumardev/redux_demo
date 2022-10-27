import {
  ADDITEM,
  CANCEL,
  CHANGEPATH,
  DELETEITEM,
  EDITITEM,
  UPDATE,
} from "./type";

const int = {
  isEdit: false,
  changepath: false,
  filterdata: [],
  edit: {},
  data: [
    {
      name: "99AS",

      stationnum: "99",

      port: "1",

      prtype: "advantage",

      height: 1,

      width: 5,

      linetonext: 1,

      printbar: "Y",

      printname: "Y",

      printtest: "Y",

      pins: "bar128c",

      extra: 99,

      checksum: "Y",

      skip: "Y",

      indent: 11,

      labelType: "S",

      filler: "",

      recid: 20,
    },

    {
      name: "COIN",

      stationnum: "99",

      port: "1",

      prtype: "zebra",

      height: 1,

      width: 5,

      linetonext: 1,

      printbar: "Y",

      printname: "Y",

      printtest: "Y",

      pins: "bar39",

      extra: 99,

      checksum: "Y",

      skip: "Y",

      indent: 11,

      labelType: "SRC",

      filler: "",

      recid: 21,
    },
  ],
};
export const reducer = (state = int, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDITEM:
      console.log(payload, "payload");
      return {
        ...state,
        data: [...state.data, payload.item],
        isEdit: payload.isEdit,
        changepath: false,
      };
    case EDITITEM:
      return {
        ...state,
        edit: payload,
        isEdit: true,
      };
    case CANCEL:
      return {
        isEdit: false,
        changepath: false,
      };
    case CHANGEPATH:
      return {
        ...state,
        changepath: payload.changepath,
      };
    case UPDATE:
      return {
        ...state,
        data: state.data.map((el) =>
          el.recid === payload.recid ? payload : el
        ),
        isEdit: false,
      };
    case DELETEITEM:
      const deletdata = state.data.filter((el) => el.recid !== payload.recid);

      console.log(deletdata);
      return {
        ...state,
        data: deletdata,
      };

    default:
      return state;
  }
};
