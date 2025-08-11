import apolloClient from "./client";
import * as mutations from "./mutations";

// Helper to run a mutation with variables
const runMutation = async (mutation, variables = {}) => {
  const { data } = await apolloClient.mutate({
    mutation,
    variables,
  });
  return data;
};

export const createAdminUser = (variables) => runMutation(mutations.CREATE_ADMIN_USER_MUTATION, variables);
export const createAdminUserMessage = (variables) => runMutation(mutations.CREATE_ADMIN_USER_MESSAGE_MUTATION, variables);
export const createChildWelfareEntity = (variables) => runMutation(mutations.CREATE_CHILD_WELFARE_ENTITY_MUTATION, variables);
export const createIAmOkayResponse = (variables) => runMutation(mutations.CREATE_I_AM_OKAY_RESPONSE_MUTATION, variables);
export const createDealWithItResponse = (variables) => runMutation(mutations.CREATE_DEAL_WITH_IT_RESPONSE_MUTATION, variables);
export const createEnterpriseData = (variables) => runMutation(mutations.CREATE_ENTERPRISE_DATA_MUTATION, variables);
export const createGenderIdentity = (variables) => runMutation(mutations.CREATE_GENDER_IDENTITY_MUTATION, variables);
export const createGrade = (variables) => runMutation(mutations.CREATE_GRADE_MUTATION, variables);
export const createKid = (variables) => runMutation(mutations.CREATE_KID_MUTATION, variables);
export const createNicknamesList = (variables) => runMutation(mutations.CREATE_NICKNAMES_LIST_MUTATION, variables);
export const createParent = (variables) => runMutation(mutations.CREATE_PARENT_MUTATION, variables);
export const createPayer = (variables) => runMutation(mutations.CREATE_PAYER_MUTATION, variables);
export const createProvider = (variables) => runMutation(mutations.CREATE_PROVIDER_MUTATION, variables);
export const createSchoolEntity = (variables) => runMutation(mutations.CREATE_SCHOOL_ENTITY_MUTATION, variables);
export const createSexualOrientation = (variables) => runMutation(mutations.CREATE_SEXUAL_ORIENTATION_MUTATION, variables);
export const createSubscription = (variables) => runMutation(mutations.CREATE_SUBSCRIPTION_MUTATION, variables);
export const createSwearWordList = (variables) => runMutation(mutations.CREATE_SWEAR_WORD_LIST_MUTATION, variables);
export const createTag = (variables) => runMutation(mutations.CREATE_TAG_MUTATION, variables);
export const createTribe = (variables) => runMutation(mutations.CREATE_TRIBE_MUTATION, variables);
export const createWhatsUpResponse = (variables) => runMutation(mutations.CREATE_WHATS_UP_RESPONSE_MUTATION, variables);

// Delete mutations
export const deleteAdminUser = (variables) => runMutation(mutations.DELETE_ADMIN_USER_MUTATION, variables);
export const deleteAdminUserMessage = (variables) => runMutation(mutations.DELETE_ADMIN_USER_MESSAGE_MUTATION, variables);
export const deleteAmIOkayResponse = (variables) => runMutation(mutations.DELETE_AM_I_OKAY_RESPONSE_MUTATION, variables);
export const deleteChildWelfareEntity = (variables) => runMutation(mutations.DELETE_CHILD_WELFARE_ENTITY_MUTATION, variables);
export const deleteDealWithItResponse = (variables) => runMutation(mutations.DELETE_DEAL_WITH_IT_RESPONSE_MUTATION, variables);
export const deleteEnterpriseData = (variables) => runMutation(mutations.DELETE_ENTERPRISE_DATA_MUTATION, variables);
export const deleteGenderIdentity = (variables) => runMutation(mutations.DELETE_GENDER_IDENTITY_MUTATION, variables);
export const deleteGrade = (variables) => runMutation(mutations.DELETE_GRADE_MUTATION, variables);
export const deleteKid = (variables) => runMutation(mutations.DELETE_KID_MUTATION, variables);
export const deleteNicknamesList = (variables) => runMutation(mutations.DELETE_NICKNAMES_LIST_MUTATION, variables);
export const deleteParent = (variables) => runMutation(mutations.DELETE_PARENT_MUTATION, variables);
export const deletePayer = (variables) => runMutation(mutations.DELETE_PAYER_MUTATION, variables);
export const deleteProvider = (variables) => runMutation(mutations.DELETE_PROVIDER_MUTATION, variables);
export const deleteSchoolEntity = (variables) => runMutation(mutations.DELETE_SCHOOL_ENTITY_MUTATION, variables);
export const deleteSexualOrientation = (variables) => runMutation(mutations.DELETE_SEXUAL_ORIENTATION_MUTATION, variables);
export const deleteSubscription = (variables) => runMutation(mutations.DELETE_SUBSCRIPTION_MUTATION, variables);
export const deleteSwearWordList = (variables) => runMutation(mutations.DELETE_SWEAR_WORD_LIST_MUTATION, variables);
export const deleteTag = (variables) => runMutation(mutations.DELETE_TAG_MUTATION, variables);
export const deleteTribe = (variables) => runMutation(mutations.DELETE_TRIBE_MUTATION, variables);
export const deleteWhatsUpResponse = (variables) => runMutation(mutations.DELETE_WHATS_UP_RESPONSE_MUTATION, variables);

// Update mutations
export const updateAdminUser = (variables) => runMutation(mutations.UPDATE_ADMIN_USER_MUTATION, variables);
export const updateAdminUserMessage = (variables) => runMutation(mutations.UPDATE_ADMIN_USER_MESSAGE_MUTATION, variables);
export const updateAmIOkayResponse = (variables) => runMutation(mutations.UPDATE_AM_I_OKAY_RESPONSE_MUTATION, variables);
export const updateChildWelfareEntity = (variables) => runMutation(mutations.UPDATE_CHILD_WELFARE_ENTITY_MUTATION, variables);
export const updateDealWithItResponse = (variables) => runMutation(mutations.UPDATE_DEAL_WITH_IT_RESPONSE_MUTATION, variables);
export const updateEnterpriseData = (variables) => runMutation(mutations.UPDATE_ENTERPRISE_DATA_MUTATION, variables);
export const updateGenderIdentity = (variables) => runMutation(mutations.UPDATE_GENDER_IDENTITY_MUTATION, variables);
export const updateGrade = (variables) => runMutation(mutations.UPDATE_GRADE_MUTATION, variables);
export const updateKid = (variables) => runMutation(mutations.UPDATE_KID_MUTATION, variables);
export const updateNicknamesList = (variables) => runMutation(mutations.UPDATE_NICKNAMES_LIST_MUTATION, variables);
export const updateParent = (variables) => runMutation(mutations.UPDATE_PARENT_MUTATION, variables);
export const updatePayer = (variables) => runMutation(mutations.UPDATE_PAYER_MUTATION, variables);
export const updateProvider = (variables) => runMutation(mutations.UPDATE_PROVIDER_MUTATION, variables);
export const updateSchoolEntity = (variables) => runMutation(mutations.UPDATE_SCHOOL_ENTITY_MUTATION, variables);
export const updateSexualOrientation = (variables) => runMutation(mutations.UPDATE_SEXUAL_ORIENTATION_MUTATION, variables);
export const updateSubscription = (variables) => runMutation(mutations.UPDATE_SUBSCRIPTION_MUTATION, variables);
export const updateSwearWordList = (variables) => runMutation(mutations.UPDATE_SWEAR_WORD_LIST_MUTATION, variables);
export const updateTag = (variables) => runMutation(mutations.UPDATE_TAG_MUTATION, variables);
export const updateTribe = (variables) => runMutation(mutations.UPDATE_TRIBE_MUTATION, variables);
export const updateWhatsUpResponse = (variables) => runMutation(mutations.UPDATE_WHATS_UP_RESPONSE_MUTATION, variables);

// Authentication Mutations
export const login = (variables) => runMutation(mutations.LOGIN_MUTATION, variables);
export const logout = (variables) => runMutation(mutations.LOGOUT_MUTATION, variables);
export const forgotPassword = (variables) => runMutation(mutations.FORGOT_PASSWORD_MUTATION, variables);
export const validateResetToken = (variables) => runMutation(mutations.VALIDATE_RESET_TOKEN_MUTATION, variables);
export const resetPassword = (variables) => runMutation(mutations.RESET_PASSWORD_MUTATION, variables);

// User Management Mutations
export const createUser = (variables) => runMutation(mutations.CREATE_USER_MUTATION, variables);
export const updateUser = (variables) => runMutation(mutations.UPDATE_USER_MUTATION, variables);
export const deleteUser = (variables) => runMutation(mutations.DELETE_USER_MUTATION, variables);
export const activateUser = (variables) => runMutation(mutations.ACTIVATE_USER_MUTATION, variables);
export const deactivateUser = (variables) => runMutation(mutations.DEACTIVATE_USER_MUTATION, variables);

// Settings Mutations
export const updateUserSettings = (variables) => runMutation(mutations.UPDATE_USER_SETTINGS_MUTATION, variables);
export const updateSystemSettings = (variables) => runMutation(mutations.UPDATE_SYSTEM_SETTINGS_MUTATION, variables);

// District Management Mutations
export const createDistrict = (variables) => runMutation(mutations.CREATE_DISTRICT_MUTATION, variables);
export const updateDistrict = (variables) => runMutation(mutations.UPDATE_DISTRICT_MUTATION, variables);

// School Management Mutations
export const createSchool = (variables) => runMutation(mutations.CREATE_SCHOOL_MUTATION, variables);
export const updateSchool = (variables) => runMutation(mutations.UPDATE_SCHOOL_MUTATION, variables);
