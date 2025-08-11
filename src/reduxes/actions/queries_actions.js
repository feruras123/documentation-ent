import axios from "axios";
import {
    SET_USER,
    LOADING,
    AUTHENTICATED,
    LOGOUT_USER,
} from "@reduxes/reducers/types";
import PAGES_URL from "@router/routes";
import history from "./history";
import {
    LOGIN_MUTATION,
    LOGOUT_MUTATION,
    FORGOT_PASSWORD_MUTATION,
    VALIDATE_RESET_TOKEN_MUTATION,
    RESET_PASSWORD_MUTATION,
} from "@graphql/mutations";
import apolloClient from "@graphql/client";

const apiBaseUrl = `${process.env.REACT_APP_API_ENDPOINT}`;

/**
 *
 * @param {*} data
 * @param {*} response
 * @returns
*/

// Updated From Rest To GraphQL
export const loginUser = (data, response) => async (dispatch, getState) => {
    dispatch({ type: LOADING, payload: true });

    try {
        const result = await apolloClient.mutate({
            mutation: LOGIN_MUTATION,
            variables: {
                login: data.email,
                password: data.password,
            },
        });

        const { error, token, user_id, hash } = result.data.profile_authorization || {};

        if (error) {
            dispatch({ type: LOADING, payload: false });
            response({ message: error, status: "error" });
        } else {
            // Create a user object with the user_id since we don't get full user data
            const user = { id: user_id };
            dispatch({ type: SET_USER, payload: user });
            dispatch({ type: LOADING, payload: false });
            dispatch({ type: AUTHENTICATED });

            response({ message: "Login successful", status: "success" });

            localStorage.setItem("token", `Bearer ${token}`);
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;

            history.push(PAGES_URL.DASHBOARD);
        }
    } catch (err) {
        dispatch({ type: LOADING, payload: false });
        const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "Something went wrong";
        response({ message: errorMessage, status: "error" });
    }

    // Offline check fallback
    setTimeout(() => {
        if (!navigator.onLine) {
            response({
                message: "Check your internet connection",
                status: "error",
            });
        }
    }, 3000);
};

// Improved functional fetchers for each query
import * as gqlQueryFns from "./graphqlQueryFunctions";

const handleOffline = (response) => {
  setTimeout(() => {
    if (!navigator.onLine) {
      response({
        message: "Check your internet connection",
        status: "error",
      });
    }
  }, 3000);
};

// Generic thunk creator for queries
const createQueryThunk = (queryFn, resultKey) => (variables, response) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const result = await queryFn(variables);
    response({ data: result[resultKey], status: "success" });
  } catch (err) {
    const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "Something went wrong";
    response({ message: errorMessage, status: "error" });
  } finally {
    dispatch({ type: LOADING, payload: false });
  }
  handleOffline(response);
};

export const fetchAdminUser = createQueryThunk(gqlQueryFns.adminUserQuery, 'adminUser');
export const fetchAdminUserMessage = createQueryThunk(gqlQueryFns.adminUserMessageQuery, 'adminUserMessage');
export const fetchAmIOkayResponses = createQueryThunk(gqlQueryFns.amIOkayResponsesQuery, 'amIOkayResponses');
export const fetchChildWelfareEntities = createQueryThunk(gqlQueryFns.childWelfareEntitiesQuery, 'childWelfareEntities');
export const fetchDealWithItResponses = createQueryThunk(gqlQueryFns.dealWithItResponsesQuery, 'dealWithItResponses');
export const fetchEnterpriseData = createQueryThunk(gqlQueryFns.enterpriseDataQuery, 'enterpriseData');
export const fetchGenderIdentity = createQueryThunk(gqlQueryFns.genderIdentityQuery, 'genderIdentity');
export const fetchGrade = createQueryThunk(gqlQueryFns.gradeQuery, 'grade');
export const fetchKid = createQueryThunk(gqlQueryFns.kidQuery, 'kid');
export const fetchMeExtended = createQueryThunk(gqlQueryFns.meExtendedQuery, 'meExtended');
export const fetchNicknamesList = createQueryThunk(gqlQueryFns.nicknamesListQuery, 'nicknamesList');
export const fetchParent = createQueryThunk(gqlQueryFns.parentQuery, 'parent');
export const fetchPayers = createQueryThunk(gqlQueryFns.payersQuery, 'payers');
export const fetchProfileActive = createQueryThunk(gqlQueryFns.profileActiveQuery, 'profileActive');
export const fetchProfileIndex = createQueryThunk(gqlQueryFns.profileIndexQuery, 'profileIndex');
export const fetchProfileInfo = createQueryThunk(gqlQueryFns.profileInfoQuery, 'profileInfo');
export const fetchProviders = createQueryThunk(gqlQueryFns.providersQuery, 'providers');
export const fetchSchoolsExtended = createQueryThunk(gqlQueryFns.schoolsExtendedQuery, 'schoolsExtended');
export const fetchSexualOrientation = createQueryThunk(gqlQueryFns.sexualOrientationQuery, 'sexualOrientation');
export const fetchSubscription = createQueryThunk(gqlQueryFns.subscriptionQuery, 'subscription');
export const fetchSwearWordLists = createQueryThunk(gqlQueryFns.swearWordListsQuery, 'swearWordLists');
export const fetchTags = createQueryThunk(gqlQueryFns.tagsQuery, 'tags');
export const fetchTribes = createQueryThunk(gqlQueryFns.tribesQuery, 'tribes');
export const fetchWhatsUpResponse = createQueryThunk(gqlQueryFns.whatsUpResponseQuery, 'whatsUpResponse');
export const fetchUserProfile = createQueryThunk(gqlQueryFns.getUserProfile, 'userProfile');
export const fetchCurrentUser = createQueryThunk(gqlQueryFns.getCurrentUser, 'currentUser');
export const fetchGenders = createQueryThunk(gqlQueryFns.getGenders, 'genders');
export const fetchGrades = createQueryThunk(gqlQueryFns.getGrades, 'grades');
export const fetchEthnicity = createQueryThunk(gqlQueryFns.getEthnicity, 'ethnicity');
export const fetchCounselors = createQueryThunk(gqlQueryFns.getCounselors, 'counselors');
export const fetchSchools = createQueryThunk(gqlQueryFns.getSchools, 'schools');
export const fetchDashboardData = createQueryThunk(gqlQueryFns.getDashboardData, 'dashboardData');
export const fetchUsers = createQueryThunk(gqlQueryFns.getUsers, 'users');
export const fetchUserActivity = createQueryThunk(gqlQueryFns.getUserActivity, 'userActivity');
export const fetchDistricts = createQueryThunk(gqlQueryFns.getDistricts, 'districts');