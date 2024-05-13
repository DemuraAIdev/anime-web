"use client";
import React, { useState, useEffect } from "react";
import CardMini from "./Card";
import Loading from "./loading";

const Top5 = () => {
  const [top5, setTop5] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/animelist/top");
        const { data } = await response.json();
        setTop5(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap -m-4">
      {isLoading && <Loading />}
      {top5.map((item: any) => (
        <CardMini
          key={item.node.id}
          id={item.node.id}
          picture={item.node.main_picture}
          title={item.node.title}
        />
      ))}
    </div>
  );
};

export default Top5;
