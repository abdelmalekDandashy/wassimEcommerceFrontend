import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { CommonService } from './common.service';
@Injectable()
export class Proxy {
APIBaseUrl = '';
url = '';
constructor(public api: HttpClient, private common: CommonService) {
this.APIBaseUrl = common.APIUrl; 
}
Get_Product_By_OWNER_ID(i_Params_Get_Product_By_OWNER_ID: Params_Get_Product_By_OWNER_ID) : Observable<Product[]> {
this.url = this.APIBaseUrl + '/Get_Product_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Product_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Product_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Product_By_Where(i_Params_Get_Product_By_Where: Params_Get_Product_By_Where) : Observable<Product[]> {
this.url = this.APIBaseUrl + '/Get_Product_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Product_By_Where>(this.url, JSON.stringify(i_Params_Get_Product_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Product(i_Product: Product) : Observable<Product> {
this.url = this.APIBaseUrl + '/Edit_Product?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Product>(this.url, JSON.stringify(i_Product), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Product;}));
}
Delete_Product(i_Params_Delete_Product: Params_Delete_Product) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Product?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Product), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Category_By_OWNER_ID(i_Params_Get_Category_By_OWNER_ID: Params_Get_Category_By_OWNER_ID) : Observable<Category[]> {
this.url = this.APIBaseUrl + '/Get_Category_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Category_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Category_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Category_By_Where(i_Params_Get_Category_By_Where: Params_Get_Category_By_Where) : Observable<Category[]> {
this.url = this.APIBaseUrl + '/Get_Category_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Category_By_Where>(this.url, JSON.stringify(i_Params_Get_Category_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Category(i_Category: Category) : Observable<Category> {
this.url = this.APIBaseUrl + '/Edit_Category?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Category>(this.url, JSON.stringify(i_Category), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Category;}));
}
Delete_Category(i_Params_Delete_Category: Params_Delete_Category) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Category?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Category), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Product_By_Where_Adv(i_Params_Get_Product_By_Where: Params_Get_Product_By_Where) : Observable<Product[]> {
this.url = this.APIBaseUrl + '/Get_Product_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Product_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Product_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Uploaded_file(i_Uploaded_file: Uploaded_file) : Observable<Uploaded_file> {
this.url = this.APIBaseUrl + '/Edit_Uploaded_file?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Uploaded_file>(this.url, JSON.stringify(i_Uploaded_file), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Uploaded_file;}));
}
Delete_Uploaded_file(i_Params_Delete_Uploaded_file: Params_Delete_Uploaded_file) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Uploaded_file?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD: Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
}
export class Params_Get_Product_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Product
{
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
My_Color: Product_color[];
My_Size: Product_size[];
}
export class Category
{
CATEGORY_ID?: number;
NAME: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
My_Uploaded_files: Uploaded_file[];
}
export class Uploaded_file
{
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
export class Product_color
{
PRODUCT_COLOR_ID?: number;
PRODUCT_ID?: number;
COLOR_ID?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
My_Product: Product;
My_Color: Color;
}
export class Product_size
{
PRODUCT_SIZE_ID?: number;
PRODUCT_ID?: number;
SIZE_ID?: number;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
DESCRIPTION: string;
My_Product: Product;
My_Size: Size;
}
export class Params_Get_Product_By_Where
{
OWNER_ID?: number;
NAME: string;
DESCRIPTION: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Delete_Product
{
PRODUCT_ID?: number;
}
export class Params_Get_Category_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Category_By_Where
{
OWNER_ID?: number;
NAME: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Delete_Category
{
CATEGORY_ID?: number;
}
export class Params_Delete_Uploaded_file
{
UPLOADED_FILE_ID?: number;
}
export class Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD
{
REL_ENTITY: string;
REL_KEY?: number;
REL_FIELD: string;
}
export class Color
{
COLOR_ID?: number;
NAME: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Size
{
SIZE_ID?: number;
DESCRIPTION: string;
ENTRY_USER_ID?: number;
ENTRY_DATE: string;
OWNER_ID?: number;
}
export class Action_Result{
ExceptionMsg: string;
}
export class Result_Get_Product_By_OWNER_ID extends Action_Result {
My_Result : Product[];
My_Params_Get_Product_By_OWNER_ID : Params_Get_Product_By_OWNER_ID;
}
export class Result_Get_Product_By_Where extends Action_Result {
My_Result : Product[];
My_Params_Get_Product_By_Where : Params_Get_Product_By_Where;
}
export class Result_Edit_Product extends Action_Result {
My_Product : Product;
}
export class Result_Delete_Product extends Action_Result {
My_Params_Delete_Product : Params_Delete_Product;
}
export class Result_Get_Category_By_OWNER_ID extends Action_Result {
My_Result : Category[];
My_Params_Get_Category_By_OWNER_ID : Params_Get_Category_By_OWNER_ID;
}
export class Result_Get_Category_By_Where extends Action_Result {
My_Result : Category[];
My_Params_Get_Category_By_Where : Params_Get_Category_By_Where;
}
export class Result_Edit_Category extends Action_Result {
My_Category : Category;
}
export class Result_Delete_Category extends Action_Result {
My_Params_Delete_Category : Params_Delete_Category;
}
export class Result_Get_Product_By_Where_Adv extends Action_Result {
My_Result : Product[];
My_Params_Get_Product_By_Where : Params_Get_Product_By_Where;
}
export class Result_Edit_Uploaded_file extends Action_Result {
My_Uploaded_file : Uploaded_file;
}
export class Result_Delete_Uploaded_file extends Action_Result {
My_Params_Delete_Uploaded_file : Params_Delete_Uploaded_file;
}
export class Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD extends Action_Result {
My_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD : Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD;
}
