import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Client } from '../models/client';


export const API_URL = 'https://5be0e0c5f2ef840013994c3d.mockapi.io/api/v1/';

@Injectable()
export class ClientService {

    constructor(public http: HttpClient) {
    }

    getClients() {

           return this.http.get<Client[]>(API_URL + '/Clientes');

    }
}
