import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeBotComponent } from './joke-bot.component';

describe('JokeBotComponent', () => {
  let component: JokeBotComponent;
  let fixture: ComponentFixture<JokeBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
