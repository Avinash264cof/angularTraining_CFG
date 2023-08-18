import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCompomentComponent } from './my-first-compoment.component';

describe('MyFirstCompomentComponent', () => {
  let component: MyFirstCompomentComponent;
  let fixture: ComponentFixture<MyFirstCompomentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFirstCompomentComponent]
    });
    fixture = TestBed.createComponent(MyFirstCompomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
