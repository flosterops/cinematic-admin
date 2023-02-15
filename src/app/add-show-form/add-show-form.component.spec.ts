import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShowFormComponent } from './add-show-form.component';

describe('AddShowFormComponent', () => {
  let component: AddShowFormComponent;
  let fixture: ComponentFixture<AddShowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShowFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
