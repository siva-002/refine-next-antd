"use client"
import { Avatar, Flex, Typography } from 'antd'
import React from 'react'

const CustomerInfoSummary = ({customer}:any) => {
  return (
  <Flex align="center" gap={32}>
      <Avatar size={96} src={customer?.avatar?.[0]?.url} />
      <Flex vertical>
        <Typography.Text type="secondary">#{customer?.id}</Typography.Text>
        <Typography.Title
          level={3}
          style={{
            margin: 0,
          }}
        >
          {customer?.fullName}
        </Typography.Title>
      </Flex>
    </Flex>
  )
}

export default CustomerInfoSummary