import React from "react";
import { Menu } from "antd";
import { updateStatusApplication } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { setApplications } from "../../../store/applicationSlice";

const TableStatusMenu = ({ id }) => {
  const applications = useSelector(state => state.application.applications);
  const dispatch = useDispatch();
  return (
    <Menu
      items={[
        {
          label: <span onClick={() => {
            const newArray = applications.map(el => {
              if (Number(el.id) === Number(id)) {
                return { ...el, status: "inProcessing", statusAndId: ["inProcessing", el.id] };
              } else {
                return el;
              }
            });
            dispatch(setApplications(newArray));
            updateStatusApplication(id, "inProcessing").then(r => console.log("inProcessing"));

          }} style={{
            fontSize: 16,
            color: "#295BF4",
            fontWeight: 500
          }}>В обработке</span>,
          key: "inProcessing"
        },
        {
          label: <span onClick={() => {
            const newArray = applications.map(el => {
              if (Number(el.id) === Number(id)) {
                return { ...el, status: "confirmed", statusAndId: ["confirmed", el.id] };
              } else {
                return el;
              }
            });
            dispatch(setApplications(newArray));
            updateStatusApplication(id, "confirmed").then(r => console.log("confirmed"));

          }} style={{
            fontSize: 16,
            color: "#26BD23",
            fontWeight: 500
          }}>Подтверждено</span>,
          key: "confirmed"
        },
        {
          label: <span onClick={() => {
            const newArray = applications.map(el => {
              if (Number(el.id) === Number(id)) {
                return { ...el, status: "rejected", statusAndId: ["rejected", el.id] };
              } else {
                return el;
              }
            });
            dispatch(setApplications(newArray));
            updateStatusApplication(id, "rejected").then(r => console.log("rejected"));

          }} style={{
            fontSize: 16,
            color: "#F92323",
            fontWeight: 500
          }}>Отклонено</span>,
          key: "rejected"
        },
        {
          label: <span onClick={() => {
            const newArray = applications.map(el => {
              if (Number(el.id) === Number(id)) {
                return { ...el, status: "completed", statusAndId: ["completed", el.id] };
              } else {
                return el;
              }
            });
            dispatch(setApplications(newArray));


            updateStatusApplication(id, "completed").then(r => console.log("completed"));
          }} style={{
            fontSize: 16,
            color: "#0F1221",
            fontWeight: 500
          }}>Завершено</span>,
          key: "completed"
        }
      ]}
    />
  );
};

export default TableStatusMenu;