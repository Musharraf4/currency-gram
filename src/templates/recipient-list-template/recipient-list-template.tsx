import { AppTable } from "../../components/data-display/app-table/app-table";
import searchImage from "../../assets/images/dashboard/search.svg";
import { AppTitle } from "../../components/data-display/app-title/app-title";
import { AppInput } from "../../components/form-elements/app-input/app-input";
import {
  recipientData,
  recipientColumns,
} from "../../features/gift/select-gift-recipient/select-gift-recipient-data";
import { AppButton } from "../../components/buttons/app-button/app-button";

export const RecipientListTemplate = (props: any) => {
  const { setShowComponent, rowSelection, selectedRowKeys } = props;
  console.log(
    "🚀 ~ file: select-gift-recipient.tsx:130 ~ RecipientList ~ selectedRowKeys:",
    selectedRowKeys
  );

  return (
    <>
      <AppTitle title="Currencygram Friends" className="text-center font-semibold text-xl mb-3 " />
      <AppInput
        placeholder="Name, Phone Number"
        size="large"
        className="w-10/12 my-8 flex justify-center mx-auto"
        prefix={<img src={searchImage} alt="bin" className="cursor-pointer" />}
      />
      {/* <div className="h-56 overflow-auto"> */}
      <AppTable
        dataSource={recipientData}
        columns={recipientColumns}
        rowSelection={rowSelection}
        scrollY={260}
        scrollX={400}
      />
      {/* </div> */}

      <div className="text-center">
        <AppButton
          buttons={[
            {
              size: "large",
              disabled: selectedRowKeys,
              // htmlType:"submit",
              btnLink: () => setShowComponent(false),
              className: " bg-primary text-white w-10/12 mt-10",
              btnText: "Continue",
            },
          ]}
        />
      </div>
    </>
  );
};
