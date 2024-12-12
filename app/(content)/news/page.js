import NewsList from "@/components/news/news-list";
// import { useEffect, useState } from "react";
// import { DUMMY_NEWS } from "@/dummy-news";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");
  
  if(!response.ok) {
    return <div>Failed to fetch news</div>;
  }
  
  const news = await response.json();

  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
