"use client"; // Ensure this is a Client Component

import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams(); // Get route parameters

  console.log(params); // Logs: { slug: 'your-value' } for a dynamic route

  return <div>Slug: {params?.slug}</div>;
};

export default Page;
