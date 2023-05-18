import { SingleElementTemplate } from "../../../templates/single-element/single-element";
import { BLOGDATA } from "./blog-data";
import { BLOGIMAGES } from "./blog-images";

export const Blog = () => {
  const moreBlogData = BLOGDATA.moreBlogDataFunction();
  const moreCategories = BLOGDATA.moreCategoriesFunction();
  const archieves = BLOGDATA.archievesFunction();
  const replyButton = BLOGDATA.replyButtonFunction();
  const detailAboutPost = BLOGDATA.detailAboutPostFunction();
  return (
    <SingleElementTemplate
      moreBlogsData={moreBlogData}
      moreCategories={moreCategories}
      archieves={archieves}
      mainTitle="Blogs"
      data={BLOGDATA.singleBlog}
      replyButton={replyButton}
      calendarIcon={BLOGIMAGES.calendarImage}
      replyTitle="Leave a Reply"
      replyPlaceholder="Write a comment ..."
      detailAboutPost={detailAboutPost}
    />
  );
};
