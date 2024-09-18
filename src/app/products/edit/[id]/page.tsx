"use client";

import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { ICategory, IProduct } from "@app/interfaces";
import { Edit, NumberField, SaveButton, useForm } from "@refinedev/antd";
import {
  HttpError,
  useApiUrl,
  useSelect,
  useShow,
  useTranslate,
} from "@refinedev/core";
import {
  Avatar,
  Button,
  Flex,
  Form,
  Input,
  InputNumber,
  Segmented,
  Select,
  Upload,
  message,
  theme,
} from "antd";
import React, { useState } from "react";

interface refineCoreProps {
  resource: string;
  action: string;
  id: any;
}

const ShowProduct = () => {
  const apiUrl = useApiUrl();
  const { query: data } = useShow();

  const t = useTranslate();

  const { token } = theme.useToken();

  const { formProps, saveButtonProps, formLoading } = useForm<IProduct>({
    resource: "products",
    id: data?.data?.data.id, // when undefined, id will be read from the URL.
    action: "edit",
    redirect: false,
  });

  const categorySelectProps = useSelect<ICategory>({
    resource: "categories",
  });

  console.log("casdffsds", categorySelectProps);

  console.log("fffff", formProps);
  console.log("sssss", saveButtonProps);

  const [fileList, setFileList] = useState([]);

  const handleChange = (info: any) => {
    setFileList(info.fileList);

    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const uploadButton =
    fileList.length > 0 ? (
      <div>
        <div style={{ marginTop: 8 }}>Change</div>
      </div>
    ) : (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

  const images = Form.useWatch("images", formProps.form);
  const image = images?.[0] || null;
  const previewImageURL = image?.url || image?.response?.url;

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={t("products.fields.images.label")}
          name="images"
          className="w-100"
          rules={[{ required: true }]}
        >
          <Upload
            name="file"
            action={`${apiUrl}/media/upload`}
            maxCount={1}
            accept=".png,.jpg,.jpeg"
            // className={styles.uploadDragger}
            showUploadList={false}
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
              <Avatar
                shape="square"
                style={{
                  aspectRatio: 1,
                  objectFit: "contain",
                  width: "200px",
                  height: "200px",
                  marginTop: previewImageURL ? undefined : "auto",
                  transform: previewImageURL ? undefined : "translateY(50%)",
                }}
                src={previewImageURL || "/images/product-default-img.png"}
                alt="Product Image"
              />
              <Button
                icon={<UploadOutlined />}
                style={{
                  marginTop: "auto",
                  marginBottom: "5px",
                  backgroundColor: token.colorBgContainer,
                  ...(!!previewImageURL && {
                    position: "absolute",
                    bottom: 0,
                  }),
                }}
              >
                {t("products.fields.images.description")}
              </Button>
            </Flex>
          </Upload>
        </Form.Item>
        <Form.Item
          label={t("products.fields.name")}
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("products.fields.description")}
          name="description"
          rules={[{ required: true }]}
        >
          <Input.TextArea
            rows={1}
            maxLength={100}
            showCount
            style={{ resize: "none" }}
          />
        </Form.Item>
        <Form.Item
          label={t("products.fields.price")}
          name={"price"}
          rules={[{ required: true }]}
        >
          <InputNumber min={0} style={{ width: "150px" }} />
        </Form.Item>
        <Form.Item
          label={t("products.fields.category")}
          rules={[{ required: true }]}
          name={["category", "id"]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label={t("products.fields.isActive.label")}
          rules={[{ required: true }]}
          name={"isActive"}
        >
          <Segmented
            options={[
              {
                label: t("products.fields.isActive.true"),
                value: true,
              },
              {
                label: t("products.fields.isActive.false"),
                value: false,
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};

export default ShowProduct;
