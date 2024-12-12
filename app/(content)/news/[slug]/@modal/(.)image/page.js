import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/model-backdrop";
export default async function InterceptedImagePage({ params }) {

  const newsSlug = params.slug;

  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
        <ModalBackdrop /> 
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      
    </>
  );
}
