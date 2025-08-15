export const ROUTES={
  HOME:'/',
  LOGIN:'/authentication/login',
  SIGNUP:'/authentication/signup',
  CUSTOMER_DASHBOARD:'/customer/dashboard',
  DRIVER_DASHBOARD:'/driver/dashboard',
  OWNER_DASHBOARD:'/owner/dashboard',
  EMPLOYEE_DASHBOARD:'/employee/dashboard',
  ADMIN_DASHBOARD:'/admin/dashboard',
  SUPER_ADMIN_DASHBOARD:'/super-admin/dashboard'
}
export const CACHE_KEYS:any={
  USER_CONFIG : 'USER_CONFIG'
}

export const CONFIGURATION={
  USER_ENCRYPTION_FOR_CONFIG_SERVICE:false,
  ORIGINAL_CONFIG_PATH:'/config/dev.json',
  ENCRYPTED_CONFIG_PATH:'/config_encrypted/env.json',
  ORIGINAL_API_CONFIG_PATH:'/config/api-operations.json',
  ENCRYPTED_API_CONFIG_PATH:'/config_encrypted/api-operations.json'
}