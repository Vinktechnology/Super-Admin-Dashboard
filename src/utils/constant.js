import { projectServices } from "./enum";

export const ACCESS_TOKEN = "32hhbdv786s";
export const ORG_ID = "8374mnmsn23";

export const routesForBreadcrumbs = [
  {
    path: "/dashboard/app",
    breadcrumb: "Dashboard",
  },
  {
    path: "/dashboard/projects",
    breadcrumb: "All Projects",
  },
  {
    path: "/dashboard/projects/:id",
    breadcrumb: "Project Detail",
  },
  {
    path: "/dashboard/user",
    breadcrumb: "Users",
  },
  {
    path: "/dashboard/user/createUser",
    breadcrumb: "Create User",
  },
  {
    path: "/dashboard/projects/:id/tickets/:id",
    breadcrumb: "Chat Thread",
  },
  {
    path: "/dashboard/contact_us",
    breadcrumb: "Support ",
  },
  {
    path: "/dashboard/contact_us/tickets/:id",
    breadcrumb: " Chat Thread",
  },
];

export const routesMapper = [
  "/dashboard/app",
  "/dashboard/projects",
  "/dashboard/projects/:id",
  "/dashboard/user/createUser",
  "/dashboard/user",
  "/dashboard/projects/:id/tickets/:id",
  "/dashboard/contact_us",
  "/dashboard/contact_us/tickets/:id",
];

export const services = [
  {
    title: projectServices.desiging,
    iconPath: "/static/icons/Graphics.svg",
  },
  {
    title: projectServices.development,
    iconPath: "/static/icons/Development.svg",
  },
  {
    title: projectServices.marketing,
    iconPath: "/static/icons/Digital-Marketing.svg",
  },
];

export const subServicesData = {
  [projectServices.desiging]: [
    {
      title: "UI/UX Designing",
      iconPath: "/static/icons/graphics/UIUX.svg",
    },
    {
      title: "Logo Designing",
      iconPath: "/static/icons/graphics/logodesign.svg",
    },
    {
      title: "Product Packaging Designing",
      iconPath: "/static/icons/graphics/packagedesign.svg",
    },
    {
      title: "Videography",
      iconPath: "/static/icons/graphics/videography.svg",
    },
    {
      title: "Product Photography (White Background)",
      iconPath: "/static/icons/graphics/Productdesign.svg",
    },
    {
      title: "Product Photography (Theme Based)",
      iconPath: "/static/icons/graphics/Productdesign.svg",
    },
    {
      title: "Video Animation",
      iconPath: "/static/icons/graphics/animation.svg",
    },
    {
      title: "Corporate Video Shoot",
      iconPath: "/static/icons/graphics/shoot.svg",
    },
    {
      title: "Ad Film Shoot",
      iconPath: "/static/icons/graphics/shoot.svg",
    },
    {
      title: "Letterhead Designing",
      iconPath: "/static/icons/graphics/letterhead.svg",
    },
    {
      title: "Packaging Designing",
      iconPath: "/static/icons/graphics/packagedesign.svg",
    },
    {
      title: "Envelop Designing",
      iconPath: "/static/icons/graphics/envelopDesign.svg",
    },
    {
      title: "Brochure Designing",
      iconPath: "/static/icons/graphics/brochure.svg",
    },
    {
      title: "Physical Poster Designing",
      iconPath: "/static/icons/graphics/poster.svg",
    },
    {
      title: "Visiting Card Designing",
      iconPath: "/static/icons/graphics/visiting.svg",
    },
  ],

  [projectServices.development]: [
    {
      title: "Website Development ",
      iconPath: "/static/icons/development/Webdev.svg",
    },
    {
      title: "App Development",
      iconPath: "/static/icons/development/Appdev.svg",
    },
    {
      title: "Blockchain Development",
      iconPath: "/static/icons/development/BlockChain.svg",
    },
    {
      title: "AR/VR",
      iconPath: "/static/icons/development/VRAr.svg",
    },
    {
      title: "IOT",
      iconPath: "/static/icons/development/IOT.svg",
    },
    {
      title: "Ecommerce Development",
      iconPath: "/static/icons/development/EcomDev.svg",
    },
    {
      title: "ERP Development",
      iconPath: "/static/icons/development/ERP.svg",
    },
    {
      title: "CRM Development",
      iconPath: "/static/icons/development/crm.svg",
    },
    {
      title: "Cryptocurrency",
      iconPath: "/static/icons/development/crypto.svg",
    },
    {
      title: "QA and Testing",
      iconPath: "/static/icons/development/QATesting.svg",
    },
    {
      title: "Cloud Computing ",
      iconPath: "/static/icons/development/CloudComputing.svg",
    },
    {
      title: "Data Science",
      iconPath: "/static/icons/development/DataSci.svg",
    },
    {
      title: "AI / ML",
      iconPath: "/static/icons/development/AI.svg",
    },
    {
      title: "Maintainence and support",
      iconPath: "/static/icons/development/Maintencesupport.svg",
    },
  ],

  [projectServices.marketing]: [
    {
      title: "E-Mail Marketing",
      iconPath: "/static/icons/digitalmarketing/email.svg",
    },
    {
      title: "Influencer Marketing",
      iconPath: "/static/icons/digitalmarketing/influencer.svg",
    },
    {
      title: "Content Marketing",
      iconPath: "/static/icons/digitalmarketing/contentwriting.svg",
    },
    {
      title: "Search Engine Advertising",
      iconPath: "/static/icons/digitalmarketing/sea.svg",
    },
    {
      title: "Search Engine Optimisation",
      iconPath: "/static/icons/digitalmarketing/seo.svg",
    },
    {
      title: "Social Media Management",
      iconPath: "/static/icons/digitalmarketing/socialmediamanagement.svg",
    },
    {
      title: "Play Store & App Store Marketing",
      iconPath: "/static/icons/digitalmarketing/storeMarketing.svg",
    },
    {
      title: "Marketplace Marketing & Listing",
      iconPath:
        "/static/icons/digitalmarketing/marketplacemarketinglistening.svg",
    },
    {
      title: "Other",
      iconPath: "/static/icons/digitalmarketing/others.svg",
    },
  ],
};


export const overviewPath = "overview";
export const proposalPath = "proposal";
export const tablePath = "table";
export const scopePath = "scope";
export const supportPath = "tickets";
export const milestonePath = "milestone";
export const ratingsPath = "ratings";

export const formErrorStyle= {
  marginTop: "0rem",
  fontSize: ".875em",
  color: "red",
  display: "block",
  marginLeft: "0.5rem",
}

export const formSuccessStyle= {
  marginTop: "0rem",
  fontSize: ".875em",
  color: "green",
  display: "block",
  marginLeft: "0.5rem",
}