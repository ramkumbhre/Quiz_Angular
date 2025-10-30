import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../auth/services/user-storage.service';

const BASIC_URL ="https://quiz-app-15.duckdns.org/";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

    getAllTest(): Observable<any>{
      return this.http.get(BASIC_URL+ `api/test`);
    }

    getTestQuestions(id: number): Observable<any>{
      return this.http.get(BASIC_URL+ `api/test/${id}`);
    }

    submitTest(data: any): Observable<any>{
      return this.http.post(BASIC_URL+ `api/test/submit-test`,data);
    }

    getMyTestResults(): Observable<any>{
      return this.http.get(BASIC_URL+ `api/test/test-result/${UserStorageService.getUserId()}`);
    }
}
