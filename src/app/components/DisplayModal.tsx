"use client";
import { Modal } from "antd";
import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

interface ModalProps {
  ModalPopup: boolean;
  // setModalPopup: (value: boolean) => void;
  ModalOkFunction: any;
  ModalCancelFunction: any;
  title: React.ReactNode;
  type?: "primary" | "danger";
  text: "Update" | "Edit" | "Delete" | "Ok";
  Icon: "DeleteIcon" | "EditIcon" | "InfoIcon" | "CheckIcon";
  CustomIcon?: React.ReactNode;
}
const DisplayModal = ({
  ModalPopup,
  ModalOkFunction,
  ModalCancelFunction,
  title,
  text,
  type: OkType = "primary",
  Icon,
  CustomIcon = null,
}: ModalProps) => {
  let CIcon = null;
  switch (Icon) {
    case "InfoIcon":
      CIcon = (
        <InfoCircleOutlined style={{ color: "orange", fontSize: "1.2rem" }} />
      );
      break;
    case "DeleteIcon":
      CIcon = <DeleteOutlined style={{ color: "red", fontSize: "1.2rem" }} />;
      break;
    case "EditIcon":
      CIcon = <EditOutlined style={{ color: "blue", fontSize: "1.2rem" }} />;
      break;
    default:
      CIcon = (
        <CheckCircleOutlined style={{ color: "green", fontSize: "1.2rem" }} />
      );
      break;
  }
  console.log(CIcon);
  return (
    <Modal
      width={"fit-content"}
      closable={false}
      okType={OkType}
      okText={text}
      title={
        <span>
          {CustomIcon ?? CIcon} {title}
        </span>
      }
      centered
      open={ModalPopup}
      onOk={ModalOkFunction}
      onCancel={ModalCancelFunction}
    ></Modal>
  );
};

export default DisplayModal;
