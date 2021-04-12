import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TaskGroupService {
    private API_URL: string;

    constructor(private http: HttpClient) {
        this.API_URL = 'http://localhost:8080/task-group';
    }

    getTaskGroups(): any {
        return this.http.get(this.API_URL);
    } 
}