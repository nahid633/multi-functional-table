import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithPluginComponent } from './table-with-plugin.component';

describe('TableWithPluginComponent', () => {
  let component: TableWithPluginComponent;
  let fixture: ComponentFixture<TableWithPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
