import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { CONNECT_PARAMS, SEARCH } from '../helpers/constants';
import { objectToQueryString } from "src/app/helpers/queryParams";

@Injectable({
  providedIn: "root"
})

export class ApiService {
  constructor(private http: HttpClient) { }

  post<T>(dir: string, model: object): Observable<T> {
	return this.http.post<T>(`${environment.api_url}/${dir}`, model);
  }

  getAll<T>(dir: string, model?: object): Observable<T> {
	return this.http.get<T>(`${environment.api_url}/${dir}`, model);
  }

  getByParams<T>(dir: string, params: object): Observable<T> {
	return this.http.get<T>(`${environment.api_url}/${dir}/${SEARCH}${CONNECT_PARAMS}${objectToQueryString(params)}`);
  }

  getById<T>(dir: string, id: number): Observable<T> {
	return this.http.get<T>(`${environment.api_url}/${dir}/${id}`);
  }

	put<T>(dir: string, id: string, model: object): Observable<T> {
		return this.http.put<T>(`${environment.api_url}/${dir}/${id}`, model);
	}

	updateList(dir: string, model: object): Observable<any> {
		return this.http.put<any>(`${environment.api_url}/${dir}`, model);
	}

	sendEmail(dir: string, model: object): Observable<any> {
		return this.http.post<any>(dir, model);
	}
}
