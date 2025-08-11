/** @format */

import { gql } from '@apollo/client';

export const ADMIN_USER = gql`
  query AdminUser($filter: AdminUserInput) {
    adminUser(filter: $filter) {
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

export const ADMIN_USER_MESSAGE = gql`
  query AdminUserMessage($filter: AdminUserMessageInput) {
    adminUserMessage(filter: $filter) {
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

export const AM_I_OKAY_RESPONSES = gql`
  query AmIOkayResponses {
    amIOkayResponses {
      id
      title
      question
      options
      createdAt
      updatedAt
    }
  }
`;

export const CHILD_WELFARE_ENTITIES = gql`
  query ChildWelfareEntities {
    childWelfareEntities {
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

export const DEAL_WITH_IT_RESPONSES = gql`
  query DealWithItResponses($filter: DealWithItResponseInput) {
    dealWithItResponses(filter: $filter) {
      id
      title
      tags
      response
      createdAt
      updatedAt
    }
  }
`;

export const ENTERPRISE_DATA = gql`
  query EnterpriseData($filter: EnterpriseDataInput) {
    enterpriseData(filter: $filter) {
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

export const GENDER_IDENTITY = gql`
  query GenderIdentity($filter: GenderIdentityInput) {
    genderIdentity(filter: $filter) {
      id
      gender_identity_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const GRADE = gql`
  query Grade($filter: GradeInput) {
    grade(filter: $filter) {
      id
      grade_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const KID = gql`
  query Kid($filter: KidInput) {
    kid(filter: $filter) {
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

export const ME_EXTENDED = gql`
  query Me {
    me {
      id
      first_name
      last_name
      email
      nick_name
      school_start
      school_end
      time_zone
      createdAt
      updatedAt
      phone_number
      birthday
      gender
      push_comment
      view_post
      display_post
      registration_date
      balance
    }
  }
`;

export const NICKNAMES_LIST = gql`
  query NicknamesList($filter: NicknamesListInput) {
    nicknamesList(filter: $filter) {
      id
      nickname
      createdAt
      updatedAt
    }
  }
`;

export const PARENT = gql`
  query Parent($filter: ParentInput) {
    parent(filter: $filter) {
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

export const PAYERS = gql`
  query Payers($filter: PayerInput) {
    payers(filter: $filter) {
      id
      payer_id
      state
      payer_department
      createdAt
      updatedAt
    }
  }
`;

export const PROFILE_ACTIVE = gql`
  query Profile_active($token: String!) {
    profile_active(token: $token) {
      status
      index_value
      index_status
      error
    }
  }
`;

export const PROFILE_INDEX = gql`
  query Profile_index($token: String!) {
    profile_index(token: $token) {
      status
      index_value
      index_status
      error
    }
  }
`;

export const PROFILE_INFO = gql`
  query Profile_info($userId: ID!) {
    profile_info(user_id: $userId) {
      id
      first_name
      last_name
      email
      nick_name
      school_start
      school_end
      time_zone
      createdAt
      updatedAt
      phone_number
      birthday
      gender
      push_comment
      view_post
      display_post
      registration_date
      balance
    }
  }
`;

export const PROVIDERS = gql`
  query Providers($filter: ProviderInput) {
    providers(filter: $filter) {
      id
      provider_id
      provider_practice
      state
      createdAt
      updatedAt
    }
  }
`;

export const SCHOOLS_EXTENDED = gql`
  query Schools($filter: SchoolInput) {
    schools(filter: $filter) {
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

export const SEXUAL_ORIENTATION = gql`
  query SexualOrientation($filter: SexualOrientationInput) {
    sexualOrientation(filter: $filter) {
      id
      sexual_orientation_id
      long_name
      createdAt
      updatedAt
    }
  }
`;

export const SUBSCRIPTION = gql`
  query Subscription($filter: SubscriptionInput) {
    subscription(filter: $filter) {
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

export const SWEAR_WORD_LISTS = gql`
  query SwearWordLists($filter: SwearWordListInput) {
    swearWordLists(filter: $filter) {
      id
      swear_word
      createdAt
      updatedAt
    }
  }
`;

export const TAGS = gql`
  query Tags($filter: TagInput) {
    tags(filter: $filter) {
      id
      tag_name
      createdAt
      updatedAt
    }
  }
`;

export const TRIBES = gql`
  query Tribes($filter: TribeInput) {
    tribes(filter: $filter) {
      id
      tribe_id
      is_public
      createdAt
      updatedAt
    }
  }
`;

export const WHATS_UP_RESPONSE = gql`
  query WhatsUpResponse($filter: WhatsUpResponseInput) {
    whatsUpResponse(filter: $filter) {
      id
      title
      question_or_prompt
      language
      createdAt
      updatedAt
    }
  }
`;


// User/Profile Queries
export const GET_USER_PROFILE = gql`
  query GetUserProfile($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      lastName
      role
      createdAt
      updatedAt
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      email
      firstName
      lastName
      role
      permissions
    }
  }
`;

// Data Queries
export const GET_GENDERS = gql`
  query GetGenders {
    genders {
      id
      name
      value
    }
  }
`;

export const GET_GRADES = gql`
  query GetGrades {
    grades {
      id
      name
      value
    }
  }
`;

export const GET_ETHNICITY = gql`
  query GetEthnicity {
    ethnicity {
      id
      name
      value
    }
  }
`;

export const GET_COUNSELORS = gql`
  query GetCounselors($districtId: ID!) {
    counselors(districtId: $districtId) {
      id
      firstName
      lastName
      email
      district {
        id
        name
      }
    }
  }
`;

export const GET_SCHOOLS = gql`
  query GetSchools($districtId: ID!) {
    schools(districtId: $districtId) {
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

export const GET_DASHBOARD_DATA = gql`
  query GetDashboardData($filters: DashboardFiltersInput) {
    dashboard(filters: $filters) {
      ethnicity {
        label
        value
        percentage
      }
      sexual_orientation {
        label
        value
        percentage
      }
      genders {
        label
        value
        percentage
      }
      grades {
        label
        value
        percentage
      }
      totalUsers
      activeUsers
      inactiveUsers
    }
  }
`;

// Users Queries
export const GET_USERS = gql`
  query GetUsers($filters: UsersFiltersInput, $pagination: PaginationInput) {
    users(filters: $filters, pagination: $pagination) {
      data {
        id
        firstName
        lastName
        email
        role
        status
        createdAt
        district {
          id
          name
        }
        school {
          id
          name
        }
      }
      pagination {
        total
        page
        limit
        totalPages
      }
    }
  }
`;

export const GET_USER_ACTIVITY = gql`
  query GetUserActivity($userId: ID!, $dateRange: DateRangeInput) {
    userActivity(userId: $userId, dateRange: $dateRange) {
      loginHistory {
        date
        ipAddress
        userAgent
      }
      activityLog {
        action
        timestamp
        details
      }
      statistics {
        totalLogins
        lastLogin
        averageSessionDuration
      }
    }
  }
`;

// Districts Queries
export const GET_DISTRICTS = gql`
  query GetDistricts {
    districts {
      id
      name
      code
      address
      contactEmail
      contactPhone
    }
  }
`;