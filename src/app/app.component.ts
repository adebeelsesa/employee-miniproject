import { Component } from '@angular/core';
import { asapScheduler } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  dataEmployee = [
    { "id": 1, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebeelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 2, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "a@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 3, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ad@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 4, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "a@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 9', "description": "Lorem Ipsum" },
    { "id": 5, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "asd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 6, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebeelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 7, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "assd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 8, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "xcv@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 7', "description": "Lorem Ipsum" },
    { "id": 9, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "assd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 5', "description": "Lorem Ipsum" },
    { "id": 10, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ee@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 11, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "nn@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 9', "description": "Lorem Ipsum" },
    { "id": 12, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebcceelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 13, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebeelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 14, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "qwe@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 15, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "gf@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 9', "description": "Lorem Ipsum" },
    { "id": 16, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ss@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 17, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ghf@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 18, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "vb@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 5', "description": "Lorem Ipsum" },
    { "id": 19, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebdasdeelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 7', "description": "Lorem Ipsum" },
    { "id": 20, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "cc@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 21, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebeelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 5', "description": "Lorem Ipsum" },
    { "id": 22, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "jjk@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 23, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ii@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 24, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "yu@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 25, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "tt@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 26, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "5@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 7', "description": "Lorem Ipsum" },
    { "id": 27, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "54@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 28, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "gfg@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 29, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "swe@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 30, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ity@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 31, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "jgh@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 7', "description": "Lorem Ipsum" },
    { "id": 32, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "dew@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 5', "description": "Lorem Ipsum" },
    { "id": 33, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adeberhelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 34, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "jhj@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 35, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "fdd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 36, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "kj@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 37, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "hhh@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 38, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "kky@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 39, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "4yikk@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 40, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "kjkj@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 41, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "yuyj@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 42, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "hjkl@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 7', "description": "Lorem Ipsum" },
    { "id": 43, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "kjmn@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 44, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "kgdrw@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 5', "description": "Lorem Ipsum" },
    { "id": 45, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adkjnbvcebeelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 46, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "edfgb@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 47, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "uhbvcx@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 48, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "qwsdfghj@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 49, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "cvbnjk@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 50, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "odfad@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 51, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "kjdhvadskj@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 52, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "asjhdiadeuiqw@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 53, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ahfa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 7', "description": "Lorem Ipsum" },
    { "id": 54, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "iuasujf@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 55, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "wheqjn@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 56, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ajdiau@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 5', "description": "Lorem Ipsum" },
    { "id": 57, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "jadiauu@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 58, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "jdzsjiu@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 59, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "jjaudaui@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 60, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ajhdsiuahui@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 61, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ljajoia@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 62, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "iaojad@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 63, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "zcaqwww@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 7', "description": "Lorem Ipsum" },
    { "id": 64, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "www@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 65, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ddgg@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 66, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "asdcaxxx@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 67, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "jvijaujfj@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 68, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "huiafjipfasjjki@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 69, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "asdasd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 70, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "asda@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 71, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "fvcxca@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 9', "description": "Lorem Ipsum" },
    { "id": 72, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "zvasfc@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 73, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "dsfs@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 74, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "sdfcx@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 75, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "aedebeewerwelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 76, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebeeweewlsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 77, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "sdsd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 78, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebezzaelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 5', "description": "Lorem Ipsum" },
    { "id": 79, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "werf@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 80, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "gerw@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 7', "description": "Lorem Ipsum" },
    { "id": 81, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "sgh3we3f@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 82, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "ewrwehg@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 4', "description": "Lorem Ipsum" },
    { "id": 83, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "sdgsd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 9', "description": "Lorem Ipsum" },
    { "id": 84, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "erwrw@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 5', "description": "Lorem Ipsum" },
    { "id": 85, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adebesfsffelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 86, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "gwtwerw@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 87, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "sfsdf@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 88, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "bbbsdf@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 89, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "hwefdsc@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 91, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "wq3rewd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 92, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "hgf@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" },
    { "id": 93, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "qwsed@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 2', "description": "Lorem Ipsum" },
    { "id": 94, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "gfcd@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 95, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adsxdcebeelsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 9', "description": "Lorem Ipsum" },
    { "id": 96, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "adeebeelasxsesa@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 3', "description": "Lorem Ipsum" },
    { "id": 97, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "edcx@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 8', "description": "Lorem Ipsum" },
    { "id": 98, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "nbv@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 1', "description": "Lorem Ipsum" },
    { "id": 99, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "gtresw@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 6', "description": "Lorem Ipsum" },
    { "id": 100, "username": "Ade", "first_name": "Ade", "last_name": "Sesa", "email": "wedrfg@gmail.com", "birthdate": "02-12-1991", "gender": "Male", "basicSalary": 8000000, "status": false, "group": 'Group 10', "description": "Lorem Ipsum" }
  ]
  groupList: any = [
    { id: 1, title: "Group 1" },
    { id: 2, title: "Group 2" },
    { id: 3, title: "Group 3" },
    { id: 4, title: "Group 4" },
    { id: 5, title: "Group 5" },
    { id: 6, title: "Group 6" },
    { id: 7, title: "Group 7" },
    { id: 8, title: "Group 8" },
    { id: 9, title: "Group 9" },
    { id: 10, title: "Group 10" }
  ]

  constructor() {
    if (!JSON.parse(localStorage.getItem('AppComponent'))) localStorage.setItem('AppComponent', JSON.stringify(this.dataEmployee));
    if (!JSON.parse(localStorage.getItem('dataGroupList'))) localStorage.setItem('dataGroupList', JSON.stringify(this.groupList));
  }

}
