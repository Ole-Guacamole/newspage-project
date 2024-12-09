import Link from 'next/link';

export default function NewsItem({ news }) {
  return (
    <li>
      <Link href={`/news/${news.slug}`}>
        <a>{news.title}</a>
      </Link>
    </li>
  )
}