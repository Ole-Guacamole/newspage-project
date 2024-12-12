import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestPage() {
  const latestNews = await getLatestNews();

  return (
    <div id="latest">
      <>
        <h2>Latest News</h2>
        <NewsList news={latestNews} />
      </>
    </div>
  );
}
