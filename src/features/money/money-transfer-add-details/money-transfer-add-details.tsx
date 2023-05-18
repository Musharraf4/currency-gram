import { TabsProps } from "antd";
import { useParams } from "react-router-dom";
import { AppCardWhite } from "../../../components/cards/app-card-white/app-card-white";
import { TabsSwitch } from "../../../components/navigations/app-tabs-switch/app-tabs-switch";
import { SENDMONEYTYPEPARAMSCONSTANTS } from "../../../constants/params-constant";
import { SendMoneyForm } from "../../../templates/send-money-form/send-money-form";
import { useMoneyTransferAddDetails } from "./use-money-transfer-add-details";

export const MoneyTransferAddDetails = () => {
  const { transferType, paymentType } = useParams();
  const props = { transferType, paymentType };
  const {
    getForm,
    onFinish,
    onFinishFailed,
    internationalTransferCompanyFormInputFields,
    internationalTransferindividualFormInputFields,
    sendMoney,
  } = useMoneyTransferAddDetails(props);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Company`,
      children: (
        <SendMoneyForm
          FormInputField={internationalTransferCompanyFormInputFields}
          initialValues={sendMoney.sendMoneyAddDetailsForm}
          onFinish={(e: any) => onFinish?.(e)}
          onFinishFailed={(e: any) => onFinishFailed(e)}
          firstButtonText="NEXT"
        />
      ),
    },
    {
      key: "2",
      label: `Individual`,
      children: (
        <SendMoneyForm
          FormInputField={internationalTransferindividualFormInputFields}
          initialValues={sendMoney.sendMoneyAddDetailsForm}
          onFinish={(e: any) => onFinish?.(e)}
          onFinishFailed={(e: any) => onFinishFailed(e)}
          firstButtonText="NEXT"
        />
      ),
    },
  ];

  console.log(transferType, paymentType);
  return (
    <>
      {transferType === SENDMONEYTYPEPARAMSCONSTANTS.international ? (
        <AppCardWhite cardClassName="pt-2 pb-2 pl-4 pr-4">
          <TabsSwitch defaultActiveKey="1" items={items} />
        </AppCardWhite>
      ) : (
        <AppCardWhite cardClassName="pt-2 pb-24 pl-4 pr-4">
          <SendMoneyForm
            FormInputField={getForm?.(transferType, paymentType)}
            initialValues={sendMoney.sendMoneyAddDetailsForm}
            onFinish={(e: any) => onFinish?.(e)}
            onFinishFailed={(e: any) => onFinishFailed?.(e)}
            firstButtonText="NEXT"
          />
        </AppCardWhite>
      )}
    </>
  );
};
