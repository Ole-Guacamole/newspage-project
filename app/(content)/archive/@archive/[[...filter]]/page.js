import { Suspense } from "react";
import NewsList from "@/components/news/news-list";
import Link from "next/link";

import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
  getAvailableNewsYears,
} from "@/lib/news";

async function FilterHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  const availableMonths = getAvailableNewsMonths(year);
  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  // let news;

  //

  return (
    <>
      <Suspense fallback={<p>Loading Filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>

      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
