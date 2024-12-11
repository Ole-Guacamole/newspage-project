import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestPage() {
  const latestNews = getLatestNews();

  return (
    <div id="latest">
      <>
        <h2>Latest News</h2>
        <NewsList news={latestNews} />
      </>
    </div>
  );
}
