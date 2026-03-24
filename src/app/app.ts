import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { ComponentsModule } from './pages/components/components-module';
import { particleOptions } from './themes/particles/particle-options';
 
@Component({
	selector: 'app-root',
	imports: [ComponentsModule, RouterOutlet, NgxParticlesModule],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {

	protected readonly title = signal('mark-zero');
	public particlesOptions: ISourceOptions = particleOptions

	constructor(private readonly ngParticlesService: NgParticlesService) { }

	ngOnInit(): void {
		this.ngParticlesService.init(async (engine) => {
			await loadFull(engine);
		});
	}
}
