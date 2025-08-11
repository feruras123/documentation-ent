import apolloClient from "./client";
import * as queries from "./queries";

// Helper to run a query with variables
const runQuery = async (query, variables = {}) => {
  const { data } = await apolloClient.query({
    query,
    variables,
    fetchPolicy: "network-only",
  });
  return data;
};

export const adminUserQuery = (variables) => runQuery(queries.ADMIN_USER, variables);
export const adminUserMessageQuery = (variables) => runQuery(queries.ADMIN_USER_MESSAGE, variables);
export const amIOkayResponsesQuery = (variables) => runQuery(queries.AM_I_OKAY_RESPONSES, variables);
export const childWelfareEntitiesQuery = (variables) => runQuery(queries.CHILD_WELFARE_ENTITIES, variables);
export const dealWithItResponsesQuery = (variables) => runQuery(queries.DEAL_WITH_IT_RESPONSES, variables);
export const enterpriseDataQuery = (variables) => runQuery(queries.ENTERPRISE_DATA, variables);
export const genderIdentityQuery = (variables) => runQuery(queries.GENDER_IDENTITY, variables);
export const gradeQuery = (variables) => runQuery(queries.GRADE, variables);
export const kidQuery = (variables) => runQuery(queries.KID, variables);
export const meExtendedQuery = (variables) => runQuery(queries.ME_EXTENDED, variables);
export const nicknamesListQuery = (variables) => runQuery(queries.NICKNAMES_LIST, variables);
export const parentQuery = (variables) => runQuery(queries.PARENT, variables);
export const payersQuery = (variables) => runQuery(queries.PAYERS, variables);
export const profileActiveQuery = (variables) => runQuery(queries.PROFILE_ACTIVE, variables);
export const profileIndexQuery = (variables) => runQuery(queries.PROFILE_INDEX, variables);
export const profileInfoQuery = (variables) => runQuery(queries.PROFILE_INFO, variables);
export const providersQuery = (variables) => runQuery(queries.PROVIDERS, variables);
export const schoolsExtendedQuery = (variables) => runQuery(queries.SCHOOLS_EXTENDED, variables);
export const sexualOrientationQuery = (variables) => runQuery(queries.SEXUAL_ORIENTATION, variables);
export const subscriptionQuery = (variables) => runQuery(queries.SUBSCRIPTION, variables);
export const swearWordListsQuery = (variables) => runQuery(queries.SWEAR_WORD_LISTS, variables);
export const tagsQuery = (variables) => runQuery(queries.TAGS, variables);
export const tribesQuery = (variables) => runQuery(queries.TRIBES, variables);
export const whatsUpResponseQuery = (variables) => runQuery(queries.WHATS_UP_RESPONSE, variables);
export const getUserProfile = (variables) => runQuery(queries.GET_USER_PROFILE, variables);
export const getCurrentUser = (variables) => runQuery(queries.GET_CURRENT_USER, variables);
export const getGenders = (variables) => runQuery(queries.GET_GENDERS, variables);
export const getGrades = (variables) => runQuery(queries.GET_GRADES, variables);
export const getEthnicity = (variables) => runQuery(queries.GET_ETHNICITY, variables);
export const getCounselors = (variables) => runQuery(queries.GET_COUNSELORS, variables);
export const getSchools = (variables) => runQuery(queries.GET_SCHOOLS, variables);
export const getDashboardData = (variables) => runQuery(queries.GET_DASHBOARD_DATA, variables);
export const getUsers = (variables) => runQuery(queries.GET_USERS, variables);
export const getUserActivity = (variables) => runQuery(queries.GET_USER_ACTIVITY, variables);
export const getDistricts = (variables) => runQuery(queries.GET_DISTRICTS, variables);
