import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiClientProvider {

  API_URL = "http://10.172.45.190:8084/semaforo";

  constructor(public http: Http) {
    // console.log('Hello ApiClientProvider Provider');
  }


  post(data) {
    return new Promise((resolve, reject) => {
      var sendData = {
        led1: data[0] ? "on" : "off",
        led2: data[1] ? "on" : "off",
        led3: data[2] ? "on" : "off",
        led4: data[3] ? "on" : "off",
        led5: data[4] ? "on" : "off"
      };
      this.http.post(this.API_URL, sendData).subscribe(
        res => {
          resolve(data);
        },
        err => {
          reject(err)
        }
      )
    });
  }
}
