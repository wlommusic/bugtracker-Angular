import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeboardComponent } from './noticeboard.component';

describe('NoticeboardComponent', () => {
  let component: NoticeboardComponent;
  let fixture: ComponentFixture<NoticeboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
