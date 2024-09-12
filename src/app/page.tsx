"use client";

import { Suspense } from "react";
import { Authenticated, WelcomePage } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import BlogPostList from "./Users/page";

export default function IndexPage() {
  return (
    <Suspense>
       <Authenticated key="home-page" >
        {/* <NavigateToResource /> */}
        <BlogPostList/>
      </Authenticated>
    </Suspense>
  );
}
