export interface ICacheModal{
  user:IUser,
}

export interface IUser{
  firstName:string;
  lastName:string;
  email:string;
  mobile:string;
  role:string,
  token:string;
}

export interface ICacheKeys{
  USER_CONFIG:string;
}

export class IMobileScreen{
  public dashboard: IMobileScreenDashBoard;
  public main: IMobileScreenDashBoard;
}

export class IMobileScreenDashBoard{
  showSideMenu:boolean;
}