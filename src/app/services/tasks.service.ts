import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TaskService {
    
    private API_URL: string;

    constructor(private http: HttpClient) {
        this.API_URL = 'http://localhost:8080/tasks';
    } 

    getTasks(): any {
        return this.http.get(this.API_URL);
    }

}