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
}
const DisplayModal = ({
  ModalPopup,
  ModalOkFunction,
  ModalCancelFunction,
  title,
  type: OkType = "primary",
}: ModalProps) => {
  return (
    <Modal
      okType={OkType}
      title={title}
      centered
      open={ModalPopup}
      onOk={ModalOkFunction}
      onCancel={ModalCancelFunction}
    ></Modal>
  );
};

export default DisplayModal;
