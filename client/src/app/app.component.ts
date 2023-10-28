import { Component } from '@angular/core';
import { FileBrowserComponent } from './file-browser/file-browser/file-browser.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        FileBrowserComponent
    ]
})
export class AppComponent {
    title = 'client';
}
