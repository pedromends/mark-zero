import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMain } from './dialog-main';

describe('DialogMain', () => {
    let component: DialogMain;
    let fixture: ComponentFixture<DialogMain>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DialogMain],
        }).compileComponents();

        fixture = TestBed.createComponent(DialogMain);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
