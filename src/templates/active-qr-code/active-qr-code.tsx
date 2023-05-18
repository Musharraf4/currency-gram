import { QRCode } from 'antd'
import { AppTitle } from '../../components/data-display/app-title/app-title'

export const ActiveQrCodeTemplate = (props: any) => {
    const { variantOne, title, discription, AppQrCodevalue, AppQrCodeClassName, QrCodesize } = props;
    return (
        <>
            <div className="w-full max-w-sm mx-auto text-center">
                <AppTitle
                    Variant={variantOne}
                    title={title}
                    className="text-3xl font-semibold mb-4"
                />
                <AppTitle
                    title={discription}
                    className="mb-6 text-base font-normal text-[#374151]"
                />
                <QRCode value={AppQrCodevalue} className={AppQrCodeClassName} size={QrCodesize} />
            </div>
        </>
    )
}