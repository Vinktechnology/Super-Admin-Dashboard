import * as yup from "yup";
const phoneRegExp = /^[6-9]\d{9}$/;
const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
export const LoginSchema = yup.object().shape({
  username: yup
    .string()
    .email("*Email must be a valid email address")
    .required("*Email is required"),
  password: yup.string().required("*Password is required"),
});

export const LoginWithOTPSchema = yup.object().shape({
  mobileno: yup
  .string()
  .matches(phoneRegExp, "*Contact Number is not valid")
  .required("*Contact Number is required"),
  // password: yup.string().required("*Password is required"),
});

export const ReasonSchema = yup.object().shape({
  reason: yup.string().required("*Reason is required"),
  section: yup.array().of(
    yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required(),
      id: yup.string().required(),
    }).required("*Seaction is required")
  ).min(1, "*At least one section value is required"),
});




export const RegisterStep2Schema = yup.object().shape({
  username: yup.string().required("*Username is required"),
  displayname: yup.string().required("*Username is required"),
  password: yup.string().required("*Password is required"),
});

export const RegisterStep3Schema = yup.object().shape({
  bankaccount: yup.number().required("*Bank Account is required"),
  ifsccode: yup
    .string()
    .required("*IFSC Code is required")
    .matches(ifscRegex, "*Invalid IFSC code"),
  address1: yup.string().required("*Address is required"),
  address2: yup.string().required("*Address is required"),
  pincode: yup
    .number()
    .required("*Pin Code is required")
    .test(
      "len",
      "*Pin Code must be 6 digit",
      (val) => val?.toString()?.length === 6
    ),
  city: yup.string().required("*City is required"),
  state: yup.string().required("*State is required"),
  country: yup.string().required("*Country is required"),
});

export const HomeContactUsSchema = yup.object().shape({
  username: yup.string().required("*Username is required"),
  email: yup
    .string()
    .email("*Email must be a valid email address")
    .required("*Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "*Contact Number is not valid")
    .required("*Contact Number is required"),
});

export const RegisterStep1Schema = yup.object().shape({
  gstno: yup
    .string()
    .matches(gstRegex, "*Invalid GST number")
    .required("*GST is required"),
  emailid: yup
    .string()
    .email("*Email must be a valid email address")
    .required("*Email is required"),
  contactnumber: yup
    .string()
    .matches(phoneRegExp, "*Contact Number is not valid")
    .required("*Contact Number is required"),
});

export const CatgorySchema = yup.object().shape({
  category: yup.string().required("*Category is required"),
  description: yup.string().required("*Description is required"),
  thumbnail: yup.mixed().required("*Thumbnail is required"),
  slug: yup.string().required("*Slug is required"),
});


export const GenericMasterSchema = yup.object().shape({
  masterName: yup.string().required("*Master Name is required"),
  masterSlug: yup.string().required("*Master Slug is required"),
  description: yup.string().required("*Description is required"),
});



export const SubCatgorySchema = yup.object().shape({
  subcategory: yup.string().required("*Sub-Category is required"),
  description: yup.string().required("*Description is required"),
  thumbnail: yup.mixed().required("*Thumbnail is required"),
  slug: yup.string().required("*Slug is required"),
});

export const TagSchema = yup.object().shape({
  tag: yup.string().required("*Tag is required"),
  // category:yup.array().of(
  //   yup.object().shape({
  //     label: yup.string().required(),
  //     value: yup.string().required(),
  //     name: yup.string().required(),
  //     id: yup.string().required(),
  //   }).required("*Category object is required")
  // ).min(1, "*At least one category is required"),
  // subcategory: yup.array().of(
  //   yup.object().shape({
  //     label: yup.string().required(),
  //     value: yup.string().required(),
  //     name: yup.string().required(),
  //     id: yup.string().required(),
  //   }).required("*SubCategory object is required")
  // ).min(1, "*At least one subcategory is required"),
  description: yup.string().required("*Description is required"),
  thumbnail: yup.mixed().required("*Thumbnail is required"),
  slug: yup.string().required("*Slug is required"),
});

export const AttributeSchema = yup.object().shape({
  attribute: yup.string().required("*Attribute is required"),
  description: yup.string().required("*Description is required"),
  slug: yup.string().required("*Slug is required"),
});

export const TeamSchema = yup.object().shape({
  firstname: yup.string().required("*FirstName is required"),
  lastname: yup.string().required("*LastName is required"),
  role: yup.string().required("*Role is required"),
  email: yup
    .string()
    .email("*Email must be a valid email address")
    .required("*Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "*Contact Number is not valid")
    .required("*Contact Number is required"),
  thumbnail: yup.mixed().required("*Thumbnail is required"),
});

export const ProductStockSchema=yup.object().shape({
  sellerskuid: yup.string().required("*Seller SKU ID is required"),
  listingstatus: yup.string().required("*Listing Status is required"),
  fullfillmentby: yup.string().required("*Fullfillment By is required"),
  procurementtype: yup.string().required("*Procurement Type is required"),
  procurementsla: yup.number().required("*Procurement SLA is required"),
  stock: yup.number().required("*Stock is required"),
  shippingprovider: yup.string().required("*Shipping Provider is required"),
  length: yup.number().required("*Length is required"),
  breadth: yup.number().required("*Breadth is required"),
  height: yup.number().required("*Height is required"),
  weight: yup.number().required("*Weight is required"),
  hsn: yup.number().required("*HSN is required"),
  taxcode: yup.string().required("*Tax Code is required"),
  countryoforigin: yup.string().required("*Country Of Origin Code is required"),
  manufactdetails: yup.string().required("*Manufacturer Details is required"),
  packerdetails: yup.string().required("*Packer Details is required"),
});

export const ProductPriceSchema=yup.object().shape({
  minorderquantity: yup.string().required("*Minimum Order Quantity is required"),
  mrp: yup.number().required("*MRP is required"),
  yoursellingprice: yup.number().required("*Selling Price is required"),
});


export const ProductDescriptionSareeSchema=yup.object().shape({
  size: yup.string().required("*Size is required"),
  occasion: yup.string().required("*Occasion is required"),
  stylecode: yup.string().required("*Style Code is required"),
  fabric: yup.string().required("*Fabric is required"),
  pattern:yup.string().required("*Pattern is required"),
  type:yup.string().required("*Type is required"),
  saripurity:yup.string().required("*Sari Purity is required"),
  color:yup.string().required("*Color is required"),
  brandcolor:yup.string().required("*Brand Color is required"),
  idealfor:yup.string().required("*Ideal For is required"),
  packof:yup.string().required("*Pack of is required"),
  blousepiecetype:yup.string().required("*Blouse Piece Type is required"),
  fabriccare:yup.string().required("*Fabric Care is required"),
  sarilength:yup.string().required("*Sari Length is required"),
  saristyle:yup.string().required("*Sari Style is required"),
  blousepiecelength:yup.string().required("*Blouse Piece Length is required"),
});



// export const addRoleFormValidations = yup.object({
//   role: yup.string().required("Role is required"),
//   permission: yup.string().required("Permission is required"),
// });

// export const mobileValidation = yup.object({
//   mobile: yup.object({
//     mobile_number: yup
//       .string()
//       .required("Mobile is Required")
//       .max(10, "Please Enter a Valid Mobile Number")
//       .min(10, "Please Enter a Valid Mobile Number"),
//   }),
// });

// export const createProjectScreen1Validation = yup.object({
//   project_name: yup.string().required("Project Title is Required"),
//   description: yup.string().required("Please Enter Description"),
// });

// export const createProjectScreen2Validation = yup.object({
//   service: yup.array().min(1, "Please Select a Service"),
//   sub_service: yup.array().min(1, "Please Select a Sub Service"),
// });

// export const createProjectScreen3Validation = yup.object({
//   expected_timeline: yup.string().required("Timeline is Required"),
//   expected_budget: yup.string().required("Budget is Required"),
//   industry: yup.string().required("Industry is Required"),
// });

// export const createProjectScreen4Validation = yup.object({});

// export const profileSchema = yup.object({
//   first_name: yup.string().required("First Name is Required"),
// });

// export const ticketValidations = yup.object({
//   title: yup.string().required("Title is Required"),
//   description: yup.string().required("Description is Required"),
// });

// export const addressValidation = yup.object({
//   address_line1: yup.string().required("Address Line 1 is Required"),
//   state: yup.string().required("State is Required"),
//   country: yup.string().required("Country is Required"),
//   zip_code: yup
//     .string()
//     .required("Zip code is Required")
//     .matches(/^[0-9]{6}$/, "Please Enter a Valid ZIP Code"),
// });

// export const forgotPasswordValidation = yup.object({
//   email: yup
//     .string()
//     .email("Email must be a valid email address")
//     .required("Email is required"),
// });
