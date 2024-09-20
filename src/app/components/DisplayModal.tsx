"use client";
import { Modal } from "antd";
import React from "react";

interface ModalProps {
  ModalPopup: boolean;
  // setModalPopup: (value: boolean) => void;
  ModalOkFunction: any;
  ModalCancelFunction: any;
  title: React.ReactNode;
  type: "primary" | "danger";
  text: "Update" | "Edit" | "Delete" | "Ok";
  Icon: React.ReactNode;
}
const DisplayModal = ({
  ModalPopup,
  ModalOkFunction,
  ModalCancelFunction,
  title,
  text,
  type: OkType = "primary",
  Icon,
}: ModalProps) => {
  return (
    <Modal
      style={{ width: "fit-content !important" }}
      closable={false}
      okType={OkType}
      okText={text}
      title={`${Icon} ${title}`}
      centered
      open={ModalPopup}
      onOk={ModalOkFunction}
      onCancel={ModalCancelFunction}
    ></Modal>
  );
};

export default DisplayModal;
