import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';
@Injectable()
export class Proxy {
    APIBaseUrl = '';
    url = '';
    constructor(public api: HttpClient, private common: CommonService) {
        this.APIBaseUrl = common.APIUrl;
    }
    Get_Product_By_OWNER_ID(i_Params_Get_Product_By_OWNER_ID: Params_Get_Product_By_OWNER_ID): Observable<Product[]> {
        this.url = this.APIBaseUrl + '/Get_Product_By_OWNER_ID?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_Product_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Product_By_OWNER_ID), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_Product_By_Where(i_Params_Get_Product_By_Where: Params_Get_Product_By_Where): Observable<Product[]> {
        this.url = this.APIBaseUrl + '/Get_Product_By_Where?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_Product_By_Where>(this.url, JSON.stringify(i_Params_Get_Product_By_Where), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Edit_Product(i_Product: Product): Observable<Product> {
        this.url = this.APIBaseUrl + '/Edit_Product?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Edit_Product>(this.url, JSON.stringify(i_Product), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Product; }));
    }
    Delete_Product(i_Params_Delete_Product: Params_Delete_Product): Observable<string> {
        this.url = this.APIBaseUrl + '/Delete_Product?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Product), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    Get_Category_By_OWNER_ID(i_Params_Get_Category_By_OWNER_ID: Params_Get_Category_By_OWNER_ID): Observable<Category[]> {
        this.url = this.APIBaseUrl + '/Get_Category_By_OWNER_ID?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_Category_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Category_By_OWNER_ID), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_Category_By_Where(i_Params_Get_Category_By_Where: Params_Get_Category_By_Where): Observable<Category[]> {
        this.url = this.APIBaseUrl + '/Get_Category_By_Where?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_Category_By_Where>(this.url, JSON.stringify(i_Params_Get_Category_By_Where), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Edit_Category(i_Category: Category): Observable<Category> {
        this.url = this.APIBaseUrl + '/Edit_Category?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Edit_Category>(this.url, JSON.stringify(i_Category), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Category; }));
    }
    Delete_Category(i_Params_Delete_Category: Params_Delete_Category): Observable<string> {
        this.url = this.APIBaseUrl + '/Delete_Category?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Category), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    Get_User_By_OWNER_ID(i_Params_Get_User_By_OWNER_ID: Params_Get_User_By_OWNER_ID): Observable<User[]> {
        this.url = this.APIBaseUrl + '/Get_User_By_OWNER_ID?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_User_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_User_By_OWNER_ID), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_User_By_Where(i_Params_Get_User_By_Where: Params_Get_User_By_Where): Observable<User[]> {
        this.url = this.APIBaseUrl + '/Get_User_By_Where?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_User_By_Where>(this.url, JSON.stringify(i_Params_Get_User_By_Where), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Edit_User(i_User: User): Observable<User> {
        this.url = this.APIBaseUrl + '/Edit_User?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Edit_User>(this.url, JSON.stringify(i_User), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_User; }));
    }
    Delete_User(i_Params_Delete_User: Params_Delete_User): Observable<string> {
        this.url = this.APIBaseUrl + '/Delete_User?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_User), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    EditSetup(i_SetupEntry: SetupEntry): Observable<void> {
        this.url = this.APIBaseUrl + '/EditSetup?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_EditSetup>(this.url, JSON.stringify(i_SetupEntry), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); }));
    }
    Get_SetupEntries_Per_Table(i_Params_Get_SetupEntries_Per_Table: Params_Get_SetupEntries_Per_Table): Observable<User_Type[]> {
        this.url = this.APIBaseUrl + '/Get_SetupEntries_Per_Table?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_SetupEntries_Per_Table>(this.url, JSON.stringify(i_Params_Get_SetupEntries_Per_Table), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_User_account_By_OWNER_ID(i_Params_Get_User_account_By_OWNER_ID: Params_Get_User_account_By_OWNER_ID): Observable<User_account[]> {
        this.url = this.APIBaseUrl + '/Get_User_account_By_OWNER_ID?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_User_account_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_User_account_By_OWNER_ID), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Get_User_account_By_Where(i_Params_Get_User_account_By_Where: Params_Get_User_account_By_Where): Observable<User_account[]> {
        this.url = this.APIBaseUrl + '/Get_User_account_By_Where?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Get_User_account_By_Where>(this.url, JSON.stringify(i_Params_Get_User_account_By_Where), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Edit_User_account(i_User_account: User_account): Observable<User_account> {
        this.url = this.APIBaseUrl + '/Edit_User_account?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Edit_User_account>(this.url, JSON.stringify(i_User_account), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_User_account; }));
    }
    Delete_User_account(i_Params_Delete_User_account: Params_Delete_User_account): Observable<string> {
        this.url = this.APIBaseUrl + '/Delete_User_account?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_User_account), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    Authenticate(i_Params_Authenticate: Params_Authenticate): Observable<User> {
        this.url = this.APIBaseUrl + '/Authenticate?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Authenticate>(this.url, JSON.stringify(i_Params_Authenticate), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
    }
    Edit_Uploaded_file(i_Uploaded_file: Uploaded_file): Observable<Uploaded_file> {
        this.url = this.APIBaseUrl + '/Edit_Uploaded_file?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<Result_Edit_Uploaded_file>(this.url, JSON.stringify(i_Uploaded_file), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Uploaded_file; }));
    }
    Delete_Uploaded_file(i_Params_Delete_Uploaded_file: Params_Delete_Uploaded_file): Observable<string> {
        this.url = this.APIBaseUrl + '/Delete_Uploaded_file?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
    Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD: Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD): Observable<string> {
        this.url = this.APIBaseUrl + '/Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD?Ticket=' + this.common.ticket;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
        const options = { headers: headers };
        return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD), options)
            .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
    }
}
export class Params_Get_Product_By_OWNER_ID {
    OWNER_ID?: number;
}
export class Product {
    PRODUCT_ID?: number;
    NAME: string;
    DESCRIPTION: string;
    CATEGORY_ID?: number;
    STOCK?: number;
    FULL_PRICE: number;
    DISCOUNT_PRICE?: number;
    IS_BEST_SELLING?: boolean;
    IS_RECOMMENDED?: boolean;
    ENTRY_USER_ID?: number;
    ENTRY_DATE: string;
    OWNER_ID?: number;
    My_Category: Category;
    My_Uploaded_files: Uploaded_file[];
    My_Image_Url: string;
}
export class Category {
    CATEGORY_ID?: number;
    NAME: string;
    ENTRY_USER_ID?: number;
    ENTRY_DATE: string;
    OWNER_ID?: number;
    My_Uploaded_files: Uploaded_file[];
}
export class Uploaded_file {
    UPLOADED_FILE_ID?: number;
    REL_ENTITY: string;
    REL_KEY?: number;
    REL_FIELD: string;
    SIZE?: number;
    EXTENSION: string;
    STAMP: string;
    ENTRY_USER_ID?: number;
    ENTRY_DATE: string;
    OWNER_ID?: number;
    My_URL: string;
}
export class Params_Get_Product_By_Where {
    OWNER_ID?: number;
    NAME: string;
    DESCRIPTION: string;
    START_ROW?: number;
    END_ROW?: number;
    TOTAL_COUNT?: number;
}
export class Params_Delete_Product {
    PRODUCT_ID?: number;
}
export class Params_Get_Category_By_OWNER_ID {
    OWNER_ID?: number;
}
export class Params_Get_Category_By_Where {
    OWNER_ID?: number;
    NAME: string;
    START_ROW?: number;
    END_ROW?: number;
    TOTAL_COUNT?: number;
}
export class Params_Delete_Category {
    CATEGORY_ID?: number;
}
export class Params_Get_User_By_OWNER_ID {
    OWNER_ID?: number;
}
export class User {
    USER_ID?: number;
    OWNER_ID?: number;
    EMAIL: string;
    USERNAME: string;
    PASSWORD: string;
    USER_TYPE_CODE: string;
    IS_ACTIVE?: boolean;
    ENTRY_DATE: string;
    myTicket: string;
    My_Image_Url: string;
    My_Uploaded_files: Uploaded_file[];
}
export class Params_Get_User_By_Where {
    OWNER_ID?: number;
    EMAIL: string;
    USERNAME: string;
    PASSWORD: string;
    USER_TYPE_CODE: string;
    START_ROW?: number;
    END_ROW?: number;
    TOTAL_COUNT?: number;
}
export class Params_Delete_User {
    USER_ID?: number;
}
export class SetupEntry {
    OWNER_ID?: number;
    TBL_NAME: string;
    CODE_NAME: string;
    ISSYSTEM?: boolean;
    ISDELETEABLE?: boolean;
    ISUPDATEABLE?: boolean;
    ISVISIBLE?: boolean;
    ISDELETED?: boolean;
    DISPLAY_ORDER?: number;
    CODE_VALUE_EN: string;
    CODE_VALUE_FR: string;
    CODE_VALUE_AR: string;
    ENTRY_DATE: string;
    ENTRY_USER_ID?: number;
    NOTES: string;
    INVARIANT_VALUE: string;
}
export class Params_Get_SetupEntries_Per_Table {
    OWNER_ID: number;
    TBL_NAME: string;
    ISVISIBLE: boolean;
    ISDELETED: boolean;
}
export class User_Type {
    OWNER_ID: number;
    TBL_NAME: string;
    CODE_NAME: string;
    ISSYSTEM: boolean;
    ISDELETEABLE: boolean;
    ISUPDATEABLE: boolean;
    DISPLAY_ORDER: number;
    ISVISIBLE: boolean;
    ISDELETED: boolean;
    CODE_VALUE_EN: string;
    CODE_VALUE_FR: string;
    CODE_VALUE_AR: string;
    NOTES: string;
    ENTRY_DATE: string;
    ENTRY_USER_ID: string;
}
export class Params_Get_User_account_By_OWNER_ID {
    OWNER_ID?: number;
}
export class User_account {
    USER_ACCOUNT_ID?: number;
    USER_ID?: number;
    ENTRY_USER_ID?: number;
    ENTRY_DATE: string;
    OWNER_ID?: number;
    DESCRIPTION: string;
    My_User: User;
}
export class Params_Get_User_account_By_Where {
    OWNER_ID?: number;
    DESCRIPTION: string;
    START_ROW?: number;
    END_ROW?: number;
    TOTAL_COUNT?: number;
}
export class Params_Delete_User_account {
    USER_ACCOUNT_ID?: number;
}
export class Params_Authenticate {
    OWNER_ID: number;
    USERNAME: string;
    EMAIL: string;
    PASSWORD: string;
}
export class Params_Delete_Uploaded_file {
    UPLOADED_FILE_ID?: number;
}
export class Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD {
    REL_ENTITY: string;
    REL_KEY?: number;
    REL_FIELD: string;
}
export class Action_Result {
    ExceptionMsg: string;
}
export class Result_Get_Product_By_OWNER_ID extends Action_Result {
    My_Result: Product[];
    My_Params_Get_Product_By_OWNER_ID: Params_Get_Product_By_OWNER_ID;
}
export class Result_Get_Product_By_Where extends Action_Result {
    My_Result: Product[];
    My_Params_Get_Product_By_Where: Params_Get_Product_By_Where;
}
export class Result_Edit_Product extends Action_Result {
    My_Product: Product;
}
export class Result_Delete_Product extends Action_Result {
    My_Params_Delete_Product: Params_Delete_Product;
}
export class Result_Get_Category_By_OWNER_ID extends Action_Result {
    My_Result: Category[];
    My_Params_Get_Category_By_OWNER_ID: Params_Get_Category_By_OWNER_ID;
}
export class Result_Get_Category_By_Where extends Action_Result {
    My_Result: Category[];
    My_Params_Get_Category_By_Where: Params_Get_Category_By_Where;
}
export class Result_Edit_Category extends Action_Result {
    My_Category: Category;
}
export class Result_Delete_Category extends Action_Result {
    My_Params_Delete_Category: Params_Delete_Category;
}
export class Result_Get_User_By_OWNER_ID extends Action_Result {
    My_Result: User[];
    My_Params_Get_User_By_OWNER_ID: Params_Get_User_By_OWNER_ID;
}
export class Result_Get_User_By_Where extends Action_Result {
    My_Result: User[];
    My_Params_Get_User_By_Where: Params_Get_User_By_Where;
}
export class Result_Edit_User extends Action_Result {
    My_User: User;
}
export class Result_Delete_User extends Action_Result {
    My_Params_Delete_User: Params_Delete_User;
}
export class Result_EditSetup extends Action_Result {
}
export class Result_Get_SetupEntries_Per_Table extends Action_Result {
    My_Result: User_Type[];
    My_Params_Get_SetupEntries_Per_Table: Params_Get_SetupEntries_Per_Table;
}
export class Result_Get_User_account_By_OWNER_ID extends Action_Result {
    My_Result: User_account[];
    My_Params_Get_User_account_By_OWNER_ID: Params_Get_User_account_By_OWNER_ID;
}
export class Result_Get_User_account_By_Where extends Action_Result {
    My_Result: User_account[];
    My_Params_Get_User_account_By_Where: Params_Get_User_account_By_Where;
}
export class Result_Edit_User_account extends Action_Result {
    My_User_account: User_account;
}
export class Result_Delete_User_account extends Action_Result {
    My_Params_Delete_User_account: Params_Delete_User_account;
}
export class Result_Authenticate extends Action_Result {
    My_Result: User;
    My_Params_Authenticate: Params_Authenticate;
}
export class Result_Edit_Uploaded_file extends Action_Result {
    My_Uploaded_file: Uploaded_file;
}
export class Result_Delete_Uploaded_file extends Action_Result {
    My_Params_Delete_Uploaded_file: Params_Delete_Uploaded_file;
}
export class Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD extends Action_Result {
    My_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD: Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD;
}
