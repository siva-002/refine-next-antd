"use client";

import { CloudUploadOutlined } from "@ant-design/icons";
import { IProduct } from "@app/interfaces";
import { Create, getValueFromEvent, useForm } from "@refinedev/antd";
import { useApiUrl, useTranslate } from "@refinedev/core";
import { Avatar, Flex, Form, theme, Upload } from "antd";
import React from "react";

const CreateProduct = () => {
  const { formProps, saveButtonProps } = useForm<IProduct>();
  const t = useTranslate();
  console.log(formProps);
  const apiUrl = useApiUrl();
  const { token } = theme.useToken();

  const images = Form.useWatch("images", formProps.form);
  // console.log(images)
  // const image = images?.[0]?.file?.response || null;
  const image = images?.[0] || null;
  const previewImageURL = image?.url || image?.response?.url;
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t("products.fields.images.label")}
          name="images"
          getValueFromEvent={getValueFromEvent}
        >
          <Upload
            action={`${apiUrl}/media/upload`}
            // listType="picture-card"
            // onChange={onChange}
            // onPreview={onPreview}
            showUploadList={false}
            maxCount={1}
          >
            <Flex
              vertical
              align="center"
              justify="center"
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              <Flex
                vertical
                align="center"
                justify="center"
                style={{
                  width: "200px",
                  height: "200px",
                  borderColor: token.volcano,
                  borderWidth: "1px",
                  borderTopStyle: "dashed",
                  borderRightStyle: "dashed",
                  borderLeftStyle: "dashed",
                }}
                className="position-relative d-flex align-items-center justify-content-center rounded-2"
              >
                <Avatar
                  shape="square"
                  style={{
                    aspectRatio: 1,
                    objectFit: "contain",
                    width: previewImageURL ? "200px" : "100px",
                    height: previewImageURL ? "200px" : "100px",
                    marginTop: "auto",
                    transform: previewImageURL ? "" : "translateY(-50%)",
                  }}
                  src={
                    previewImageURL ||
                    "https://img.icons8.com/?size=100&id=lNoX59pec7xI&format=png&color=000000"
                  }
                  alt="Product Image"
                />
                <div
                  className="position-absolute d-flex align-items-center justify-content-center rounded-bottom p-1 fs-6"
                  style={{
                    bottom: "0",
                    width: "100%",
                    backgroundColor: token.volcano,
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <CloudUploadOutlined className="fs-4 px-2" />{" "}
                  <span>{!previewImageURL ? "Upload" : "Change"}</span>
                </div>
              </Flex>
              {/* <Button
                icon={<UploadOutlined />}
                style={{
                  marginTop: "auto",
                  marginBottom: "16px",
                  backgroundColor: token.colorBgContainer,
                  ...(!!previewImageURL && {
                    position: "absolute",
                    bottom: 0,
                  }),
                }}
              >
                {t("products.fields.images.description")}
              </Button> */}
            </Flex>
          </Upload>
        </Form.Item>
      </Form>
    </Create>
  );
};

export default CreateProduct;
