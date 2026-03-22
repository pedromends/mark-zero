import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDialogButton } from './admin-dialog-button';

describe('AdminDialogButton', () => {
	let component: AdminDialogButton;
	let fixture: ComponentFixture<AdminDialogButton>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AdminDialogButton],
		}).compileComponents();

		fixture = TestBed.createComponent(AdminDialogButton);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
