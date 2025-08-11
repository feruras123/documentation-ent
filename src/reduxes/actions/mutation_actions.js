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
import * as gqlMutations from "@graphql/graphqlMutationFunctions";

const apiBaseUrl = `${process.env.REACT_APP_API_ENDPOINT}`;

/**
 *
 * @param {*} data
 * @param {*} response
 * @returns
*/

// Updated From Rest To GraphQL
export const forgotPassword = (data, response) => async (dispatch, getState) => {
	dispatch({ type: LOADING, payload: true });

	try {
		const result = await apolloClient.mutate({
			mutation: FORGOT_PASSWORD_MUTATION,
			variables: {
				email: data.email,
			},
		});

		const { error, success, message } = result.data.profile_reset_password || {};

		if (success) {
			response({
				message: message || "Password reset email sent successfully",
				status: "success",
			});
		} else {
			response({
				message: error || "Something went wrong",
				status: "error",
			});
		}
	} catch (err) {
		const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "An error occurred while processing your request";
		response({
			message: errorMessage,
			status: "error",
		});
	} finally {
		dispatch({ type: LOADING, payload: false });
	}

	setTimeout(() => {
		if (!navigator.onLine) {
			response({
				message: "Check your internet connection",
				status: "error",
			});
		}
	}, 3000);
};

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


// (This block is the body of all fetches)

const createThunk = (mutationFn, resultKey) => (variables, response) => async (dispatch) => {
	dispatch({ type: LOADING, payload: true });
	try {
		const result = await mutationFn(variables);
		response({ data: result[resultKey], status: "success" });
	} catch (err) {
		const errorMessage = err.graphQLErrors?.[0]?.message || err.message || "An error occurred while processing your request";
		response({ message: errorMessage, status: "error" });
	} finally {
		dispatch({ type: LOADING, payload: false });
	}
	handleOffline(response);
};

// CREATE
export const fetchCreateAdminUser = createThunk(gqlMutations.createAdminUser, "createAdminUser");
export const fetchCreateAdminUserMessage = createThunk(gqlMutations.createAdminUserMessage, "createAdminUserMessage");
export const fetchCreateChildWelfareEntity = createThunk(gqlMutations.createChildWelfareEntity, "createChildWelfareEntity");
export const fetchCreateIAmOkayResponse = createThunk(gqlMutations.createIAmOkayResponse, "createChildWelfareEntity");
export const fetchCreateDealWithItResponse = createThunk(gqlMutations.createDealWithItResponse, "createDealWithItResponse");
export const fetchCreateEnterpriseData = createThunk(gqlMutations.createEnterpriseData, "createEnterpriseData");
export const fetchCreateGenderIdentity = createThunk(gqlMutations.createGenderIdentity, "createGenderIdentity");
export const fetchCreateGrade = createThunk(gqlMutations.createGrade, "createGrade");
export const fetchCreateKid = createThunk(gqlMutations.createKid, "createKid");
export const fetchCreateNicknamesList = createThunk(gqlMutations.createNicknamesList, "createNicknamesList");
export const fetchCreateParent = createThunk(gqlMutations.createParent, "createParent");
export const fetchCreatePayer = createThunk(gqlMutations.createPayer, "createPayer");
export const fetchCreateProvider = createThunk(gqlMutations.createProvider, "createProvider");
export const fetchCreateSchoolEntity = createThunk(gqlMutations.createSchoolEntity, "createSchool");
export const fetchCreateSexualOrientation = createThunk(gqlMutations.createSexualOrientation, "createSexualOrientation");
export const fetchCreateSubscription = createThunk(gqlMutations.createSubscription, "createSubscription");
export const fetchCreateSwearWordList = createThunk(gqlMutations.createSwearWordList, "createSwearWordList");
export const fetchCreateTag = createThunk(gqlMutations.createTag, "createTag");
export const fetchCreateTribe = createThunk(gqlMutations.createTribe, "createTribe");
export const fetchCreateWhatsUpResponse = createThunk(gqlMutations.createWhatsUpResponse, "createWhatsUpResponse");
export const fetchCreateUser = createThunk(gqlMutations.createUser, "createUser");
export const fetchCreateDistrict = createThunk(gqlMutations.createDistrict, "createDistrict");
export const fetchCreateSchool = createThunk(gqlMutations.createSchool, "createSchool");

// DELETE
export const fetchDeleteAdminUser = createThunk(gqlMutations.deleteAdminUser, "deleteAdminUser");
export const fetchDeleteAdminUserMessage = createThunk(gqlMutations.deleteAdminUserMessage, "deleteAdminUserMessage");
export const fetchDeleteAmIOkayResponse = createThunk(gqlMutations.deleteAmIOkayResponse, "deleteAmIOkayResponse");
export const fetchDeleteChildWelfareEntity = createThunk(gqlMutations.deleteChildWelfareEntity, "deleteChildWelfareEntity");
export const fetchDeleteDealWithItResponse = createThunk(gqlMutations.deleteDealWithItResponse, "deleteDealWithItResponse");
export const fetchDeleteEnterpriseData = createThunk(gqlMutations.deleteEnterpriseData, "deleteEnterpriseData");
export const fetchDeleteGenderIdentity = createThunk(gqlMutations.deleteGenderIdentity, "deleteGenderIdentity");
export const fetchDeleteGrade = createThunk(gqlMutations.deleteGrade, "deleteGrade");
export const fetchDeleteKid = createThunk(gqlMutations.deleteKid, "deleteKid");
export const fetchDeleteNicknamesList = createThunk(gqlMutations.deleteNicknamesList, "deleteNicknamesList");
export const fetchDeleteParent = createThunk(gqlMutations.deleteParent, "deleteParent");
export const fetchDeletePayer = createThunk(gqlMutations.deletePayer, "deletePayer");
export const fetchDeleteProvider = createThunk(gqlMutations.deleteProvider, "deleteProvider");
export const fetchDeleteSchoolEntity = createThunk(gqlMutations.deleteSchoolEntity, "deleteSchool");
export const fetchDeleteSexualOrientation = createThunk(gqlMutations.deleteSexualOrientation, "deleteSexualOrientation");
export const fetchDeleteSubscription = createThunk(gqlMutations.deleteSubscription, "deleteSubscription");
export const fetchDeleteSwearWordList = createThunk(gqlMutations.deleteSwearWordList, "deleteSwearWordList");
export const fetchDeleteTag = createThunk(gqlMutations.deleteTag, "deleteTag");
export const fetchDeleteTribe = createThunk(gqlMutations.deleteTribe, "deleteTribe");
export const fetchDeleteWhatsUpResponse = createThunk(gqlMutations.deleteWhatsUpResponse, "deleteWhatsUpResponse");
export const fetchDeleteUser = createThunk(gqlMutations.deleteUser, "deleteUser");

// UPDATE
export const fetchUpdateAdminUser = createThunk(gqlMutations.updateAdminUser, "updateAdminUser");
export const fetchUpdateAdminUserMessage = createThunk(gqlMutations.updateAdminUserMessage, "updateAdminUserMessage");
export const fetchUpdateAmIOkayResponse = createThunk(gqlMutations.updateAmIOkayResponse, "updateAmIOkayResponse");
export const fetchUpdateChildWelfareEntity = createThunk(gqlMutations.updateChildWelfareEntity, "updateChildWelfareEntity");
export const fetchUpdateDealWithItResponse = createThunk(gqlMutations.updateDealWithItResponse, "updateDealWithItResponse");
export const fetchUpdateEnterpriseData = createThunk(gqlMutations.updateEnterpriseData, "updateEnterpriseData");
export const fetchUpdateGenderIdentity = createThunk(gqlMutations.updateGenderIdentity, "updateGenderIdentity");
export const fetchUpdateGrade = createThunk(gqlMutations.updateGrade, "updateGrade");
export const fetchUpdateKid = createThunk(gqlMutations.updateKid, "updateKid");
export const fetchUpdateNicknamesList = createThunk(gqlMutations.updateNicknamesList, "updateNicknamesList");
export const fetchUpdateParent = createThunk(gqlMutations.updateParent, "updateParent");
export const fetchUpdatePayer = createThunk(gqlMutations.updatePayer, "updatePayer");
export const fetchUpdateProvider = createThunk(gqlMutations.updateProvider, "updateProvider");
export const fetchUpdateSchoolEntity = createThunk(gqlMutations.updateSchoolEntity, "updateSchool");
export const fetchUpdateSexualOrientation = createThunk(gqlMutations.updateSexualOrientation, "updateSexualOrientation");
export const fetchUpdateSubscription = createThunk(gqlMutations.updateSubscription, "updateSubscription");
export const fetchUpdateSwearWordList = createThunk(gqlMutations.updateSwearWordList, "updateSwearWordList");
export const fetchUpdateTag = createThunk(gqlMutations.updateTag, "updateTag");
export const fetchUpdateTribe = createThunk(gqlMutations.updateTribe, "updateTribe");
export const fetchUpdateWhatsUpResponse = createThunk(gqlMutations.updateWhatsUpResponse, "updateWhatsUpResponse");
export const fetchUpdateUser = createThunk(gqlMutations.updateUser, "updateUser");
export const fetchUpdateUserSettings = createThunk(gqlMutations.updateUserSettings, "updateUserSettings");
export const fetchUpdateSystemSettings = createThunk(gqlMutations.updateSystemSettings, "updateSystemSettings");
export const fetchUpdateDistrict = createThunk(gqlMutations.updateDistrict, "updateDistrict");
export const fetchUpdateSchool = createThunk(gqlMutations.updateSchool, "updateSchool");

// AUTHENTICATION
export const fetchLogin = createThunk(gqlMutations.login, "profile_authorization");
export const fetchLogout = createThunk(gqlMutations.logout, "profile_logout");
export const fetchForgotPassword = createThunk(gqlMutations.forgotPassword, "profile_reset_password");
export const fetchValidateResetToken = createThunk(gqlMutations.validateResetToken, "profile_validate_reset_token");
export const fetchResetPassword = createThunk(gqlMutations.resetPassword, "profile_reset_password_confirm");
export const fetchActivateUser = createThunk(gqlMutations.activateUser, "activateUser");
export const fetchDeactivateUser = createThunk(gqlMutations.deactivateUser, "deactivateUser");

