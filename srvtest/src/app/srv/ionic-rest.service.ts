import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Student {
  id: string;
  name: string;
  email: string;
  dob: number;
  fees: number;
}

@Injectable({
  providedIn: 'root'
})
export class IonicRestService {

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addStudent(student: Student): Observable<any> {
    return this.http.post<Student>('api-goes-here', student, this.httpHeader)
      .pipe(
        catchError(this.handleError<Student>('Add Student'))
      );
  }

  getStudent(id): Observable<Student[]> {
    return this.http.get<Student[]>('api-goes-here/' + id)
      .pipe(
        tap(_ => console.log(`Student fetched: ${id}`)),
        catchError(this.handleError<Student[]>(`Get student id=${id}`))
      );
  }
  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>('api-goes-here/')
      .pipe(
        tap(Student => console.log('Student fetched!')),
        catchError(this.handleError<Student[]>('Get student', []))
      );
  }

  updateStudent(id, student: Student): Observable<any> {
    return this.http.put('api-goes-here/' + id, student, this.httpHeader)
      .pipe(
        tap(_ => console.log(`Student updated: ${id}`)),
        catchError(this.handleError<Student[]>('Update student'))
      );
  }
  deleteStudent(id): Observable<Student[]> {
    return this.http.delete<Student[]>('api-goes-here/' + id, this.httpHeader)
      .pipe(
        tap(_ => console.log(`Student deleted: ${id}`)),
        catchError(this.handleError<Student[]>('Delete student'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
