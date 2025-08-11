/** @format */

import { gql } from '@apollo/client';

export const CREATE_ADMIN_USER_MUTATION = gql`
  mutation CreateAdminUser($input: AdminUserInput) {
    createAdminUser(input: $input) {
      createdAt
      email
      id
      name
      organization
      role
      token
      updatedAt
      username
    }
  }
`;

export const CREATE_ADMIN_USER_MESSAGE_MUTATION = gql`
  mutation CreateAdminUserMessage {
    createAdminUserMessage {
      content
      createdAt
      id
      message_id
      msg_to_group
      title
      updatedAt
      username
    }
  }
`;

export const CREATE_CHILD_WELFARE_ENTITY_MUTATION = gql`
  mutation CreateAmIOkayResponse($input: ChildWelfareEntityInput!) {
    createChildWelfareEntity(input: $input) {
      child_welfare_id
      county
      createdAt
      id
      name
      state
      updatedAt
    }
  }
`;

export const CREATE_I_AM_OKAY_RESPONSE_MUTATION = gql`
  mutation CreateChildWelfareEntity($input: ChildWelfareEntityInput!) {
    createChildWelfareEntity(input: $input) {
      child_welfare_id
      county
      createdAt
      id
      name
      state
      updatedAt
    }
  }
`;

export const CREATE_DEAL_WITH_IT_RESPONSE_MUTATION = gql`
  mutation CreateDealWithItResponse($input: DealWithItResponseInput!) {
    createDealWithItResponse(input: $input) {
      createdAt
      id
      response
      tags
      title
      updatedAt
    }
  }
`;

export const CREATE_ENTERPRISE_DATA_MUTATION = gql`
  mutation CreateEnterpriseData($input: EnterpriseDataInput!) {
    createEnterpriseData(input: $input) {
      child_welfare
      createdAt
      enterprise_id
      id
      payer
      provider
      school
      updatedAt
    }
  }
`;

export const CREATE_GENDER_IDENTITY_MUTATION = gql`
  mutation CreateGenderIdentity($input: GenderIdentityInput!) {
    createGenderIdentity(input: $input) {
      createdAt
      gender_identity_id
      id
      long_name
      updatedAt
    }
  }
`;

export const CREATE_GRADE_MUTATION = gql`
  mutation CreateGrade($input: GradeInput) {
    createGrade(input: $input) {
      id
      grade_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_KID_MUTATION = gql`
  mutation CreateKid($input: KidInput!) {
    createKid(input: $input) {
      id
      kid_id
      name
      nickname
      nick_anonymous
      email
      grade
      gender_identity
      sexual_orientation
      scores
      parent
      enterprise_data
      tribe
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_NICKNAMES_LIST_MUTATION = gql`
  mutation CreateNicknamesList($input: NicknamesListInput) {
    createNicknamesList(input: $input) {
      id
      nickname
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_PARENT_MUTATION = gql`
  mutation CreateParent($input: ParentInput) {
    createParent(input: $input) {
      id
      parent_id
      subscription_type
      subscription_purchase_date
      subscription_expiry
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_PAYER_MUTATION = gql`
  mutation CreatePayer($input: PayerInput!) {
    createPayer(input: $input) {
      createdAt
      id
      payer_department
      payer_id
      state
      updatedAt
    }
  }
`;

export const CREATE_PROVIDER_MUTATION = gql`
  mutation CreateProvider($input: ProviderInput!) {
    createProvider(input: $input) {
      createdAt
      id
      provider_id
      provider_practice
      state
      updatedAt
    }
  }
`;

export const CREATE_SCHOOL_ENTITY_MUTATION = gql`
  mutation CreateSchool($input: SchoolInput!) {
    createSchool(input: $input) {
      createdAt
      district
      id
      name
      school_id
      state
      updatedAt
    }
  }
`;

export const CREATE_SEXUAL_ORIENTATION_MUTATION = gql`
  mutation CreateSexualOrientation($input: SexualOrientationInput!) {
    createSexualOrientation(input: $input) {
      id
      sexual_orientation_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_SUBSCRIPTION_MUTATION = gql`
  mutation CreateSubscription($input: SubscriptionInput) {
    createSubscription(input: $input) {
      id
      subscription_id
      name
      period
      price
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_SWEAR_WORD_LIST_MUTATION = gql`
  mutation CreateSwearWordList($input: SwearWordListInput!) {
    createSwearWordList(input: $input) {
      id
      swear_word
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_TAG_MUTATION = gql`
  mutation CreateTag($input: TagInput!) {
    createTag(input: $input) {
      id
      tag_name
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_TRIBE_MUTATION = gql`
  mutation CreateTribe($input: TribeInput!) {
    createTribe(input: $input) {
      id
      tribe_id
      is_public
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_WHATS_UP_RESPONSE_MUTATION = gql`
  mutation CreateWhatsUpResponse($input: WhatsUpResponseInput!) {
    createWhatsUpResponse(input: $input) {
      id
      title
      question_or_prompt
      language
      createdAt
      updatedAt
    }
  }
`;

// Delete mutations
export const DELETE_ADMIN_USER_MUTATION = gql`
  mutation DeleteAdminUser($username: String!) {
    deleteAdminUser(username: $username) {
      id
      username
      name
      organization
      email
      token
      role
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_ADMIN_USER_MESSAGE_MUTATION = gql`
  mutation DeleteAdminUserMessage($messageId: Int!) {
    deleteAdminUserMessage(message_id: $messageId) {
      id
      message_id
      username
      msg_to_group
      title
      content
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_AM_I_OKAY_RESPONSE_MUTATION = gql`
  mutation DeleteAmIOkayResponse($deleteAmIOkayResponseId: ID!) {
    deleteAmIOkayResponse(id: $deleteAmIOkayResponseId) {
      createdAt
      id
      options
      question
      title
      updatedAt
    }
  }
`;

export const DELETE_CHILD_WELFARE_ENTITY_MUTATION = gql`
  mutation DeleteChildWelfareEntity($childWelfareId: Int!) {
    deleteChildWelfareEntity(child_welfare_id: $childWelfareId) {
      child_welfare_id
      county
      createdAt
      id
      name
      state
      updatedAt
    }
  }
`;

export const DELETE_DEAL_WITH_IT_RESPONSE_MUTATION = gql`
  mutation DeleteDealWithItResponse($deleteDealWithItResponseId: ID!) {
    deleteDealWithItResponse(id: $deleteDealWithItResponseId) {
      createdAt
      id
      response
      tags
      title
      updatedAt
    }
  }
`;

export const DELETE_ENTERPRISE_DATA_MUTATION = gql`
  mutation DeleteEnterpriseData($enterpriseId: Int!) {
    deleteEnterpriseData(enterprise_id: $enterpriseId) {
      id
      enterprise_id
      school
      child_welfare
      provider
      payer
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_GENDER_IDENTITY_MUTATION = gql`
  mutation DeleteGenderIdentity($genderIdentityId: Int!) {
    deleteGenderIdentity(gender_identity_id: $genderIdentityId) {
      id
      gender_identity_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_GRADE_MUTATION = gql`
  mutation DeleteGrade($gradeId: Int!) {
    deleteGrade(grade_id: $gradeId) {
      createdAt
      grade_id
      id
      long_name
      updatedAt
    }
  }
`;

export const DELETE_KID_MUTATION = gql`
  mutation DeleteKid($kidId: Int!) {
    deleteKid(kid_id: $kidId) {
      createdAt
      email
      enterprise_data
      gender_identity
      grade
      id
      kid_id
      name
      nick_anonymous
      nickname
      parent
      scores
      sexual_orientation
      tribe
      updatedAt
    }
  }
`;

export const DELETE_NICKNAMES_LIST_MUTATION = gql`
  mutation DeleteNicknamesList($deleteNicknamesListId: ID!) {
    deleteNicknamesList(id: $deleteNicknamesListId) {
      createdAt
      id
      nickname
      updatedAt
    }
  }
`;

export const DELETE_PARENT_MUTATION = gql`
  mutation DeleteParent($parentId: Int!) {
    deleteParent(parent_id: $parentId) {
      id
      parent_id
      subscription_type
      subscription_purchase_date
      subscription_expiry
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_PAYER_MUTATION = gql`
  mutation DeletePayer($payerId: Int!) {
    deletePayer(payer_id: $payerId) {
      id
      payer_id
      state
      payer_department
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_PROVIDER_MUTATION = gql`
  mutation DeleteProvider($providerId: Int!) {
    deleteProvider(provider_id: $providerId) {
      id
      provider_id
      provider_practice
      state
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_SCHOOL_ENTITY_MUTATION = gql`
  mutation DeleteSchool($schoolId: Int!) {
    deleteSchool(school_id: $schoolId) {
      id
      school_id
      name
      district
      state
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_SEXUAL_ORIENTATION_MUTATION = gql`
  mutation DeleteSexualOrientation($sexualOrientationId: Int!) {
    deleteSexualOrientation(sexual_orientation_id: $sexualOrientationId) {
      createdAt
      id
      long_name
      sexual_orientation_id
      updatedAt
    }
  }
`;

export const DELETE_SUBSCRIPTION_MUTATION = gql`
  mutation DeleteSubscription($subscriptionId: Int!) {
    deleteSubscription(subscription_id: $subscriptionId) {
      createdAt
      id
      name
      period
      price
      subscription_id
      updatedAt
    }
  }
`;

export const DELETE_SWEAR_WORD_LIST_MUTATION = gql`
  mutation DeleteSwearWordList($deleteSwearWordListId: ID!) {
    deleteSwearWordList(id: $deleteSwearWordListId) {
      id
      swear_word
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_TAG_MUTATION = gql`
  mutation DeleteTag($deleteTagId: ID!) {
    deleteTag(id: $deleteTagId) {
      id
      tag_name
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_TRIBE_MUTATION = gql`
  mutation DeleteTribe($tribeId: Int!) {
    deleteTribe(tribe_id: $tribeId) {
      id
      tribe_id
      is_public
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_WHATS_UP_RESPONSE_MUTATION = gql`
  mutation DeleteWhatsUpResponse($title: String!) {
    deleteWhatsUpResponse(title: $title) {
      id
      title
      question_or_prompt
      language
      createdAt
      updatedAt
    }
  }
`;

// Update mutations
export const UPDATE_ADMIN_USER_MUTATION = gql`
  mutation UpdateAdminUser($username: String!, $input: AdminUserInput) {
    updateAdminUser(username: $username, input: $input) {
      id
      username
      name
      organization
      email
      token
      role
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_ADMIN_USER_MESSAGE_MUTATION = gql`
  mutation UpdateAdminUserMessage($messageId: Int!, $input: AdminUserMessageInput) {
    updateAdminUserMessage(message_id: $messageId, input: $input) {
      id
      message_id
      username
      msg_to_group
      title
      content
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_AM_I_OKAY_RESPONSE_MUTATION = gql`
  mutation UpdateAmIOkayResponse($updateAmIOkayResponseId: ID!, $input: AmIOkayResponseInput!) {
    updateAmIOkayResponse(id: $updateAmIOkayResponseId, input: $input) {
      id
      title
      question
      options
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CHILD_WELFARE_ENTITY_MUTATION = gql`
  mutation UpdateChildWelfareEntity($childWelfareId: Int!, $input: ChildWelfareEntityInput!) {
    updateChildWelfareEntity(child_welfare_id: $childWelfareId, input: $input) {
      id
      child_welfare_id
      name
      county
      state
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_DEAL_WITH_IT_RESPONSE_MUTATION = gql`
  mutation UpdateDealWithItResponse($updateDealWithItResponseId: ID!, $input: DealWithItResponseInput!) {
    updateDealWithItResponse(id: $updateDealWithItResponseId, input: $input) {
      id
      title
      tags
      response
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_ENTERPRISE_DATA_MUTATION = gql`
  mutation UpdateEnterpriseData($enterpriseId: Int!, $input: EnterpriseDataInput!) {
    updateEnterpriseData(enterprise_id: $enterpriseId, input: $input) {
      id
      enterprise_id
      school
      child_welfare
      provider
      payer
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_GENDER_IDENTITY_MUTATION = gql`
  mutation UpdateGenderIdentity($genderIdentityId: Int!, $input: GenderIdentityInput!) {
    updateGenderIdentity(gender_identity_id: $genderIdentityId, input: $input) {
      id
      gender_identity_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_GRADE_MUTATION = gql`
  mutation UpdateGrade($gradeId: Int!, $input: GradeInput) {
    updateGrade(grade_id: $gradeId, input: $input) {
      id
      grade_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_KID_MUTATION = gql`
  mutation UpdateKid($kidId: Int!, $input: KidInput!) {
    updateKid(kid_id: $kidId, input: $input) {
      id
      kid_id
      name
      nickname
      nick_anonymous
      email
      grade
      gender_identity
      sexual_orientation
      scores
      parent
      enterprise_data
      tribe
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_NICKNAMES_LIST_MUTATION = gql`
  mutation UpdateNicknamesList($updateNicknamesListId: ID!, $input: NicknamesListInput) {
    updateNicknamesList(id: $updateNicknamesListId, input: $input) {
      id
      nickname
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_PARENT_MUTATION = gql`
  mutation UpdateParent($parentId: Int!) {
    updateParent(parent_id: $parentId) {
      id
      parent_id
      subscription_type
      subscription_purchase_date
      subscription_expiry
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_PAYER_MUTATION = gql`
  mutation UpdatePayer($payerId: Int!, $input: PayerInput!) {
    updatePayer(payer_id: $payerId, input: $input) {
      id
      payer_id
      state
      payer_department
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_PROVIDER_MUTATION = gql`
  mutation UpdateProvider($providerId: Int!, $input: ProviderInput!) {
    updateProvider(provider_id: $providerId, input: $input) {
      id
      provider_id
      provider_practice
      state
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SCHOOL_ENTITY_MUTATION = gql`
  mutation UpdateSchool($schoolId: Int!, $input: SchoolInput!) {
    updateSchool(school_id: $schoolId, input: $input) {
      id
      school_id
      name
      district
      state
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SEXUAL_ORIENTATION_MUTATION = gql`
  mutation UpdateSexualOrientation($sexualOrientationId: Int!, $input: SexualOrientationInput!) {
    updateSexualOrientation(sexual_orientation_id: $sexualOrientationId, input: $input) {
      id
      sexual_orientation_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SUBSCRIPTION_MUTATION = gql`
  mutation UpdateSubscription($subscriptionId: Int!) {
    updateSubscription(subscription_id: $subscriptionId) {
      id
      subscription_id
      name
      period
      price
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_SWEAR_WORD_LIST_MUTATION = gql`
  mutation UpdateSwearWordList($updateSwearWordListId: ID!, $input: SwearWordListInput!) {
    updateSwearWordList(id: $updateSwearWordListId, input: $input) {
      id
      swear_word
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_TAG_MUTATION = gql`
  mutation UpdateTag($updateTagId: ID!, $input: TagInput!) {
    updateTag(id: $updateTagId, input: $input) {
      id
      tag_name
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_TRIBE_MUTATION = gql`
  mutation UpdateTribe($tribeId: Int!, $input: TribeInput!) {
    updateTribe(tribe_id: $tribeId, input: $input) {
      id
      tribe_id
      is_public
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_WHATS_UP_RESPONSE_MUTATION = gql`
  mutation UpdateWhatsUpResponse($title: String!, $input: WhatsUpResponseInput!) {
    updateWhatsUpResponse(title: $title, input: $input) {
      id
      title
      question_or_prompt
      language
      createdAt
      updatedAt
    }
  }
`;

// Authentication Mutations
export const LOGIN_MUTATION = gql`
  mutation Profile_authorization($login: String!, $password: String!) {
    profile_authorization(login: $login, password: $password) {
      token
      user_id
      hash
      error
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation Profile_logout($token: String!) {
    profile_logout(token: $token)
  }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation Profile_reset_password($email: String!) {
    profile_reset_password(email: $email) {
      error
      success
      message
    }
  }
`;

export const VALIDATE_RESET_TOKEN_MUTATION = gql`
  mutation Profile_validate_reset_token($token: String!) {
    profile_validate_reset_token(token: $token) {
      success
      error
      message
    }
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation Profile_reset_password_confirm($token: String!, $newPassword: String!) {
    profile_reset_password_confirm(token: $token, new_password: $newPassword) {
      error
      success
      message
    }
  }
`;

// User Management Mutations
export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      email
      role
      status
      district {
        id
        name
      }
      school {
        id
        name
      }
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      firstName
      lastName
      email
      role
      status
      district {
        id
        name
      }
      school {
        id
        name
      }
    }
  }
`;

export const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      success
      message
    }
  }
`;

export const ACTIVATE_USER_MUTATION = gql`
  mutation ActivateUser($id: ID!) {
    activateUser(id: $id) {
      id
      status
    }
  }
`;

export const DEACTIVATE_USER_MUTATION = gql`
  mutation DeactivateUser($id: ID!) {
    deactivateUser(id: $id) {
      id
      status
    }
  }
`;

// Settings Mutations
export const UPDATE_USER_SETTINGS_MUTATION = gql`
  mutation UpdateUserSettings($input: UserSettingsInput!) {
    updateUserSettings(input: $input) {
      id
      notifications {
        email
        push
        sms
      }
      preferences {
        theme
        language
        timezone
      }
    }
  }
`;

export const UPDATE_SYSTEM_SETTINGS_MUTATION = gql`
  mutation UpdateSystemSettings($input: SystemSettingsInput!) {
    updateSystemSettings(input: $input) {
      maintenanceMode
      allowRegistration
      maxUsersPerDistrict
      sessionTimeout
    }
  }
`;

// District Management Mutations
export const CREATE_DISTRICT_MUTATION = gql`
  mutation CreateDistrict($input: CreateDistrictInput!) {
    createDistrict(input: $input) {
      id
      name
      code
      address
      contactEmail
      contactPhone
    }
  }
`;

export const UPDATE_DISTRICT_MUTATION = gql`
  mutation UpdateDistrict($id: ID!, $input: UpdateDistrictInput!) {
    updateDistrict(id: $id, input: $input) {
      id
      name
      code
      address
      contactEmail
      contactPhone
    }
  }
`;

// School Management Mutations
export const CREATE_SCHOOL_MUTATION = gql`
  mutation CreateSchool($input: CreateSchoolInput!) {
    createSchool(input: $input) {
      id
      name
      address
      district {
        id
        name
      }
    }
  }
`;

export const UPDATE_SCHOOL_MUTATION = gql`
  mutation UpdateSchool($id: ID!, $input: UpdateSchoolInput!) {
    updateSchool(id: $id, input: $input) {
      id
      name
      address
      district {
        id
        name
      }
    }
  }
`;
