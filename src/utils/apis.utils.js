//Auth
export const googleLogin = "/social_login";
export const emailLogin = "/user";
export const signup = "/user/signup";
export const validateEmailOTP = "/validate_email/otp";
export const validateMobileOTP = "/validate_mobile/otp";
export const resendEmailOTP = "/email/resend_otp";
export const signInWithPhoneApi = "/mobile_login";
export const validateTokenApi = "/user/validate_user_password_link";
export const setPasswordApi = "/user/set_password";

//Users
export const userApi = "/user";
export const getBusinessProfileApi = "/client/business_profile";
export const getAddressesApi = "/client/business_addresses";
export const uploadUserProfileApi = "/user/upload_profile";
export const addBusinessProfile = "/client/business_profile";
export const editBusinessProfile = "/client/business_profile";
export const addBusinessAddress = "/client/business_address";
export const editBusinessAddress = "/client/business_address";

//Wallet
export const getWalletDetailsApi = "/client/wallet_transactions";

//milestones
export const getAllMilestonesApi = "/client/collection/all_milestones";

//Dashboard
export const projectMatrixApi = "/client_dashboard_metrics";

//Project
export const fetchAllProjectsApi = "/get_client_projects";
export const createProjectApi = "/project";
export const pushLeadsToZohoApi = "/zoho/lead";
export const fetchProjectByIdApi = "/project";
export const uploadProjectAttachmentApi = "/upload/project/attachment";
export const reportedIssueApi = "/support/get_tickets";
export const createGlobalTicketApi = "/support/comment";
export const createSupportApi = "/support";
export const fetchGlobalTicketsApi = "/support/get_tickets";
export const globalReportedIssueApi = "/support/comments";
export const ratingQuestionApi = "/client/project_review_questions";
export const submitReviewQuestionsApi = "/project_review";
export const proposalApi = "/client/proposals";
export const getVendorListApi = "/client/get_accepted_proposal_vendors";
export const chooseVendorApi = "/client/vendor/add";
export const chatCommentsApi = "/support/comments";
export const createChatCommentApi = "/support/comment";

//forgotpassword
export const fetchAllForgotPasswordsApi = "/forgot_password";

//Verification
export const mobileVerificationApi = "/mobile/verify";
export const emailVerificationApi = "/email/verify";

// Charter
export const fetchProjectCharterByProjectIdApi = "/project_charter";
export const fetchProjectTimelineByProjectIdApi = "/client/project_table";
export const commentsCharterApi = "/charter/comment";
export const filesCharterApi = "/charter/file_upload";
export const createProjectTimelineApi = "/project_timeline_charter";
export const getVendorsCharterListApi = "/vendor_charter/client";
export const updateCharterApi = "/client/charter";

// Notifications
export const fetchAllNotificationsApi = "/get_all_user_notifications/";
export const markNotificationAsReadApi = "/mark_push_notification_as_read";
export const markAllNotificationsAsReadApi =
  "/mark_all_push_notification_as_read";

// Suppport

export const fetchAllSupportApi = "/support_ticket";
export const ticketstatusApi = "/change_support_ticket/state";

// Project Table
export const createNewSectionApi = "/project_table/add_new_section/client";
export const deleteNewSectionApi = "/project_table/remove_section/client";
export const newRowApi = "/project_table/row/client";
export const removeRowApi = "/project_table/remove_row/client";
export const newColumnApi = "/project_table/column/client";
export const removeColumnApi = "/project_table/remove_column/client";
export const shiftRowApi = "/project_table/row_shift/client";
export const columnShiftApi = "/project_table/column_shift/client";
export const addChoiceApi = "/project_table/column_choice/add/client";
export const removeChoiceApi = "/project_table/column_choice/remove/client";
export const publishSectionDataApi = "/published_project_table";
export const updateSectionNameApi = "/project_table/update_section_name/client";

// Kanban
export const changeRowStatusApi = "/project_table/change_row_status/client";

// Gantt
export const updateStartEndDateApi =
  "/project_table/update_start_end_date/client";
