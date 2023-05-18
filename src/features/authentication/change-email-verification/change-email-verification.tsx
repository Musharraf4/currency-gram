import { AppAlert } from "../../../components/feedback/app-alert/app-alert";
import { DASHBOARDPATH } from "../../../constants/routes-constant";

import { useChangeEmailVerification } from "./use-change-email-verification";

export const ChangeEmailVerification = () => {
  const { auth, user, sendEmailAgain } = useChangeEmailVerification();

  // code: 257885

  return (
    <>
      {/* <div style={{ background: `linear-gradient(309.66deg, #FFFFFF 45.03%, #CCDAFF 126.13%, #8B89DA 168.44%)`, minHeight: '100vh' }}> */}
      <div>
        {/* <Grid container
                    className="align-center height-100 padding-top-0 padding-bottom-0 margin-bottom-1"
                >
                    <Grid item xs={12} sm={5.5} md={4} xl={2} className="flex margin-top-0" justifyContent={{ xs: 'center', sm: 'flex-start' }}>
                        <AppBrand brandLogoContainerClassName="margin-left-1" routelink="/home" />
                    </Grid>
                    <div className="position-absolute" style={{ right: '5%', top: '1%' }}>
                        {alert?.showAlert && <AppAlert />}
                    </div>
                </Grid> */}
        <>
          {/* <SentEmailTemplate
                        mainHeading={auth.isEmailChanged ? `Email Verified` : `OOPs! Something went wrong`}
                        subHeading={auth.isEmailChanged ? `` : `Please Try Again`}
                        mainTitle={auth.isEmailChanged ? 'Congratulation! You have successfully changed your email' :
                                                        ''}
                        subTitle={auth.isEmailChanged ? 'Now you can use your account' : 'Please click on button to home'}
                        showButton={true}
                        containerClassName='min-height-60vh'
                        email={user}
                        resetLinkFunction={(e:any, seconds:any, setMinutes:any , functionTimer:any , email:any)=>{
                                 sendEmailAgain?.(e, seconds, setMinutes , functionTimer , email)}}
                        status={auth.status}
                        showEmailAlert={false}
                        btnText="Go To Dashboard"
                        btnLink={DASHBOARDPATH}

                    // showHeader={true} 
                    /> */}

          {/* <div className="min-height-60vh flex align-center justify-center center-text">
                                <div>
                                    <div className="primary-color margin-bottom-1 secondary-heading font-weight-600">
                                        {currentAuthCase?.mainHeading}
                                    </div>
                                    {currentAuthCase?.mainTitle?.length &&
                                        <div className="primary-text-color margin-bottom-0 primary-title font-weight-400">
                                            {currentAuthCase?.mainTitle}
                                        </div>
                                    }
                                    {
                                        currentAuthCase?.subTitle?.length &&
                                        <div className="primary-text-color margin-bottom-0 primary-title font-weight-400">
                                            {currentAuthCase?.subTitle}
                                        </div>
                                    }
                                    <div className="max-height-200px">

                                    </div>
                                    {
                                        currentAuthCase?.sendEmail &&

                                        <div className="primary-text-color margin-bottom-0 primary-title font-weight-400">
                                            If you didn’t get the verification email click on
                                            <span className="primary-color cursor-pointer"> resend link </span>
                                        </div>
                                    }
                                    {
                                        currentAuthCase?.showBtn &&
                                        <div>
                                            <Button btnText="Click here to sign in"
                                                btnFunction={() => navigate(SIGNINPATH)}
                                                className="bg-primary-color white-color padding-left-1 padding-right-1" />
                                        </div>
                                    }
                                </div>
                            </div> */}
        </>
      </div>
    </>
  );
};
