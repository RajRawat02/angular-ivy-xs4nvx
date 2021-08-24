import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class PolicyService {
  url: string = 'http://localhost:3000/api/v1/';

  constructor(private http: HttpClient) {}

  getAllPolicies() {
    return this.http.get(this.url + 'policies');
  }

  getAllPolicieswithRegion(regionid) {
    return this.http.get(this.url + 'policies/month/' + regionid);
  }
  searchpolicy(id) {
    return this.http.get(this.url + 'policies/' + id);
  }
}
