import { TestBed, inject } from '@angular/core/testing';

import { TodoListPrivateService } from './todo-list-private.service';

describe('TodoListPrivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListPrivateService]
    });
  });

  it('should be created', inject([TodoListPrivateService], (service: TodoListPrivateService) => {
    expect(service).toBeTruthy();
  }));
});
