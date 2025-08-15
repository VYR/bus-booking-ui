export interface AppConfigModel{
    basic:IBasic;
    apiOperations:any;
}

export interface IBasic{
    api:IApi;
    website:IWebsite;
}
export interface IApi{
    url:string;
    useMockApis:boolean;
}
export interface IWebsite{
    title:string;
}
export interface IAPIOperation{
    endpoint:string;
    mockApiEndPoint:string;
    useMockApi:boolean;
    isFileUpload:boolean;
}