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

export interface ITableConfig{
    data:Array<any>;
    cols:Array<ITableColumns>;
    selection?:boolean;
    selectionStickey?:boolean;
    useDefaultFilter?:boolean;
    exportExcel?:boolean;
    exportPDF?:boolean;
}

export interface ITableColumns{
    uuid?:string;
    key:string;
    displayName:string;
    icon?:string;
    width?:string;
    height?:string;
    sticky?:boolean;
    type?:ITableColumnType
}

export enum ITableColumnType{
    icon='icon',
    link='link',
    amount='amount',
    date='date',
    approve='approve',
    reject='reject',
    number='number'
}