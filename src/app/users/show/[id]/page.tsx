"use client"
import { useNavigation, useShow } from '@refinedev/core';
import React from 'react'
import {Flex, Grid} from "antd"
import CustomerInfoSummary from '@app/components/CustomerInfoSummary';
import CustomerInfoList from '@app/components/CustomerInfoList';

export default function UserShow(){
  const breakpoint = Grid.useBreakpoint();
  const { query: queryResult } = useShow();

  const { data } = queryResult;
  const user = data?.data;
  return (
    <Flex
        vertical
        gap={32}
        style={{
          padding: "32px",
        }}
      >
        <CustomerInfoSummary customer={user} />
         <CustomerInfoList customer={user} />
        {/* <CustomerOrderHistory customer={user} />  */}
      </Flex>
  )
}


