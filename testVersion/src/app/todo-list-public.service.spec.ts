import { TestBed, inject } from '@angular/core/testing';

import { TodoListPublicService } from './todo-list-public.service';

describe('TodoListPublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoListPublicService]
    });
  });

  it('should be created', inject([TodoListPublicService], (service: TodoListPublicService) => {
    expect(service).toBeTruthy();
  }));
});
