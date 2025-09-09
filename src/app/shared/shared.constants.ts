export const ROUTES={
  HOME:'/',
  LOGIN:'/authentication/login',
  SIGNUP:'/authentication/signup',
  CUSTOMER_DASHBOARD:'/customer/dashboard',
  DRIVER_DASHBOARD:'/driver/dashboard',
  OWNER_DASHBOARD:'/owner/dashboard',
  EMPLOYEE_DASHBOARD:'/employee/dashboard',
  ADMIN_DASHBOARD:'/admin/dashboard',
  SUPER_ADMIN_DASHBOARD:'/super-admin/dashboard',
  CUSTOMER:{
    ADD_CUSTOMER:'../add',
    UPDATE_CUSTOMER:'../details/update'
  }
}
/**
 *  this.router.navigate(['/list'], {relativeTo: this.route});      //absolute
    this.router.navigate(['./list'], {relativeTo: this.route});     //child
    this.router.navigate(['../list'], {relativeTo: this.route});    //sibling
    this.router.navigate(['../../list'], {relativeTo: this.route}); //parent
    this.router.navigate(['tabs/list'], {relativeTo: this.route});
    this.router.navigate(['/tabs/list'], {relativeTo: this.route});
 */
export const CACHE_KEYS:any={
  USER_CONFIG : 'USER_CONFIG'
}

export const CONFIGURATION={
  USE_ENCRYPTION_FOR_CONFIG_SERVICE:false,
  ORIGINAL_CONFIG_PATH:'/config/',
  ENCRYPTED_CONFIG_PATH:'/config_encrypted/',
  ORIGINAL_API_CONFIG_PATH:'/config/api-operations.json',
  ENCRYPTED_API_CONFIG_PATH:'/config_encrypted/api-operations.json'
}