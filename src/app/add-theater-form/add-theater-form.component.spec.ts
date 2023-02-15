import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTheaterFormComponent } from './add-theater-form.component';

describe('AddTheaterFormComponent', () => {
  let component: AddTheaterFormComponent;
  let fixture: ComponentFixture<AddTheaterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTheaterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTheaterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
