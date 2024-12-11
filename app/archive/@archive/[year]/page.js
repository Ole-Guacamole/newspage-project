import { getNewsForYear } from "@/lib/news";
import NewsList from "@/components/news/news-list";

export default function FilteredNewsPage({params}) {
    
    const newsYear = params.year;
    console.log(newsYear);

    const news = getNewsForYear(newsYear);
    console.log(news);
  
    return (

    <div>
        <NewsList news={news} />
    </div>  );
}
