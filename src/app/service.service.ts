import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private readonly api = environment.baseUrl;
  constructor(private http: HttpClient) {}

  addTodo(title: string, description: string): Observable<Todo> {
    return this.http.post<Todo>(this.api, {
      title,
      description,
    });
  }
  getTodo(): Observable<Todo[]> {
    return this.http
      .get<{ data: Todo[] }>(this.api)
      .pipe(map((res: any) => res.data));
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.api}/${id}`);
  }
  updateTool(id: string, changes: Todo) {
    return this.http.put<Todo>(`${this.api}/${id}`, changes);
  }
}
