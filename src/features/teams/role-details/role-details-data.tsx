import { ROLEDETAILSIMAGES } from "./role-details-images";

export const rolePermissionDataFunction = (setSelectedCard: any) => [
  {
    title: "Account Activity",
    child: [
      {
        heading: "Account",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.AccountSvg,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "Transfers",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.TransfersSvg,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "Requests",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.RequestsSvg,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
      {
        heading: "Beneficiary Management",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.BeneficiarySvg,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
  {
    title: "Card Management",
    child: [
      {
        heading: "Cards",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.CardsSvg,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
  {
    title: "Role Management",
    child: [
      {
        heading: "Teams",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.TeamsSvg,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
  {
    title: "Personalized gift",
    child: [
      {
        heading: "Personalized gift",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.PersonalizedSvg,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
  {
    title: "Resolution Center",
    child: [
      {
        heading: "Resolution Center",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.ResolutionSvg,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
  {
    title: "Account Details",
    child: [
      {
        heading: "Account Details",
        description: (
          <div className="flex items-center">
            <img src={ROLEDETAILSIMAGES.PartialAcces} className="mr-1" alt="Icon" /> Partial Acces
          </div>
        ),
        imgSrc: ROLEDETAILSIMAGES.AccountDetails,
        linkPath: (e: any, active: any) => {
          setSelectedCard(active?.heading);
        },
      },
    ],
  },
];