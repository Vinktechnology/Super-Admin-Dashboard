//Auth

export const emailLoginApi = "/auth/login";
export const checkusertokenvalidityApi= "/auth/validate-token"

// Register
export const sentOTPMobileApi = "/auth/send-mobile-otp"
export const validateOTPMobileApi = "/auth/verify-mobile-otp"

// Category

export const getAllCategoryApi ="/v1/category/all"
export const getCategoryByIdApi ="/v1/category"
export const addNewCategoryApi="/v1/category"
export const updateCategoryStatusApi="/v1/category/active-status"
export const getAllActiveCategoryApi="/v1/category/active"


// HomeSection

export const getAllHomeSectionApi ="/v1/home-section/all"
export const getHomeSectionByIdApi ="/v1/home-section"
export const addNewHomeSectionApi="/v1/home-section"
export const updateHomeSectionStatusApi="/v1/home-section/active-status"
export const getAllHomeSectionProductApi="/v1/home-section"


// Home

export const getAllHomeRenderingApi ="/v1/home-rendering"
export const getAllHomeRSetPositionApi ="/v1/home-rendering/set-position"

// banner

export const getAllBannerApi ="/v1/banner/all"
export const getBannerByIdApi ="/v1/banner"
export const addNewBannerApi="/v1/banner"
export const updateBannerStatusApi="/v1/banner/active-status"


// file upload
export const fileUploadApi="/file/upload"

// Master name

export const getAllActiveGenericMasterDataApi="/v1/generic-product-master/active"


//dashboard
export const getDashboardDataApi="/v1/dashboard/admin"


// SUBCategory

export const getAllSubCategoryApi ="/v1/subCategory/all"
export const getSubCategoryByIdApi ="/v1/subCategory"
export const addNewSubCategoryApi="/v1/subCategory"
export const updateSubCategoryStatusApi="/v1/subCategory/active-status"
export const getAllActiveSubCategoryApi="/v1/subCategory/active"



// Tag

export const getAllTagApi ="/v1/tags/all"
export const getTagByIdApi ="/v1/tags"
export const addNewTagApi="/v1/tags"
export const updateTagStatusApi="/v1/tags/active-status"
export const getAllActiveTagsApi="/v1/tags/active"

// generic-product-master

export const getAllGenericMasterApi ="/v1/generic-product-master/all"
export const getGenericMasterByIdApi ="/v1/generic-product-master"
export const addNewGenericMasterApi="/v1/generic-product-master"
export const updateGenericMasterStatusApi="/v1/generic-product-master/active-status"

// procurement master

export const getAllProcurementApi ="/v1/product-master/procurement-pack/all"
export const getProcurementByIdApi ="/v1/product-master/procurement-pack"
export const addNewProcurementApi="/v1/product-master/procurement-pack"
export const updateProcurementStatusApi="/v1/product-master/procurement-pack/active-status"

// procurement hsnandtaxcode
export const getAllhsntaxcodeApi ="/v1/product-master/code/all"
export const gethsntaxcodeByIdApi ="/v1/product-master/code"
export const addNewhsntaxcodeApi="/v1/product-master/code"
export const updatehsntaxcodeStatusApi="/v1/product-master/code/active-status"


// procurement genericmasterdata
export const getAllGenericMasterDataApi ="/v1/product-master/all"
export const getGenericMasterDataByIdApi ="/v1/product-master"
export const addNewGenericMasterDataApi="/v1/product-master"
export const updateGenericMasterDataStatusApi="/v1/product-master/active-status"


// vendor
export const getAllVendorsApi ="/v1/vendor/all"
export const getVendorsByIdApi ="/v1/vendor/details"
export const addNewVendorsApi="/v1/vendor"
export const updateVendorsStatusApi="/v1/vendor/active-status"
export const approvalVendorApi="/v1/vendor/approve-status"



// Brand & Product
export const getAllActiveUserBrandsApi="/v1/vendor/brands";
export const validateUserBrandApi="/v1/product"
export const updateProductApi="/v1/product"
export const getAllProductsApi="/v1/product/all"
export const getProductsByIdApi="/v1/product/details"
export const updateProductStatusApi="/v1/product/active-status"
export const approvalProductApi="/v1/product/qc"


//Users
export const userApi = "/user";
export const getBusinessProfileApi = "/client/business_profile";
export const getAddressesApi = "/client/business_addresses";
export const uploadUserProfileApi = "/user/upload_profile";
export const addBusinessProfile = "/client/business_profile";
export const editBusinessProfile = "/client/business_profile";
export const addBusinessAddress = "/client/business_address";
export const editBusinessAddress = "/client/business_address";

//usefullinks and header/footer
export const addGlobalUsefulLinksApi = "/v1/footer";

// header and footer
export const getAllheaderandfooterApi ="/v1/weblink"
export const getheaderandfooterByIdApi ="/v1/weblink"
export const addNewheaderandfooterApi="/v1/weblink"
export const updateheaderandfooterStatusApi="/v1/weblink/active-status"

// filter master

export const getAllFilterApi ="/v1/filter-master"
export const getFilterByIdApi ="/v1/filter-master"
export const addNewFilterApi="/v1/filter-master"
export const updateFilterStatusApi="/v1/filter-master/active-status"


