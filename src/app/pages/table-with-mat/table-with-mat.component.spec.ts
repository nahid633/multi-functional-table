import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithMatComponent } from './table-with-mat.component';

describe('TableWithMatComponent', () => {
  let component: TableWithMatComponent;
  let fixture: ComponentFixture<TableWithMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
