import { Avatar } from "antd";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppItemDropdown } from "../../components/dropdowns/app-item-dropdown/app-item-dropdown";
import { QuestionsByDate } from "../questions-by-date/questions-by-date";

export const PostScreen = (props: any) => {
  const { items, title, className, mainTitle, buttons, imgSrc, questionsData } = props;
  console.log(props);
  return (
    <>
      <AppItemDropdown
        items={items}
        title={
          <>
            <AppTitle title={title} Variant="span" />{" "}
            <Avatar src={imgSrc} size="small" className="p-1" />
          </>
        }
        className={className}
        mainTitle={mainTitle}
        button={buttons}
      />
      {!!questionsData?.length &&
        questionsData?.map((single: any) => (
          <QuestionsByDate
            questionData={single?.questions}
            date={single?.date}
            mainTitle={mainTitle}
            items={items}
            title={title}
            imgSrc={imgSrc}
            iconButton={single?.iconButton}
            onClickAnswer={single?.onClickAnswer}
          />
        ))}
    </>
  );
};
