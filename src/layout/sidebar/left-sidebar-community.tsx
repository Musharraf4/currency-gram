import { AppDetailListItemsModal } from "../../components/modals/app-detail-list-items-modal/app-detail-list-items-modal";
import { AppDetailListItems } from "../../components/data-display/app-detail-list-items/app-detail-list-items";
import { AppListItems } from "../../components/data-display/app-list-items/app-list-items";
import { useSidebar } from "./use-sidebar";

export const LeftSideBarCommunity = () => {
  const {
    contributors,
    relatedTopics,
    detailAbouttopic,
    isViewAll,
    setIsViewAll,
    modalData,
    relatedQuestions,
  } = useSidebar();
  return (
    <>
      <div className="bg-alice-blue-background rounded-lg p-4 my-4">
        {contributors?.length &&
          contributors?.map?.((singlecontri: any) => (
            <AppDetailListItems
              mainTitle={singlecontri.mainTitle}
              listItems={singlecontri?.data}
              linkTitle={singlecontri.linkTitle}
            />
          ))}
      </div>
      <div className="bg-alice-blue-background rounded-lg p-4 my-4">
        {detailAbouttopic?.length &&
          detailAbouttopic?.map?.((moreCategory: any) => (
            <AppListItems
              mainTitle={moreCategory.mainTitle}
              listItems={moreCategory?.data}
              hasHr={moreCategory.hasHr}
              mainTitleClassName="border-0"
            />
          ))}
      </div>
      <div className="bg-alice-blue-background rounded-lg p-4 my-4">
        {relatedTopics?.length &&
          relatedTopics?.map?.((singleRelatedTopics: any) => (
            <AppDetailListItems
              mainTitle={singleRelatedTopics.mainTitle}
              listItems={singleRelatedTopics?.data}
              linkTitle={singleRelatedTopics.linkTitle}
            />
          ))}
      </div>
      <div className="bg-alice-blue-background rounded-lg p-4 my-4">
        {!!relatedQuestions?.length &&
          relatedQuestions?.map?.((singleRelatedTopics: any) => (
            <AppDetailListItems
              mainTitle={singleRelatedTopics.mainTitle}
              listItems={singleRelatedTopics?.data}
              linkTitle={singleRelatedTopics.linkTitle}
            />
          ))}
      </div>
      {isViewAll && (
        <AppDetailListItemsModal
          isModalOpen={isViewAll}
          handleOk={() => setIsViewAll?.(false)}
          handleCancel={() => setIsViewAll?.(false)}
          listItems={modalData?.data}
          mainTitle={modalData?.mainTitle}
        />
      )}
    </>
  );
};
