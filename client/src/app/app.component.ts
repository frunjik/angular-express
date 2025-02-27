import { Component } from '@angular/core';
import { FileBrowserComponent } from './file-browser/file-browser/file-browser.component';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
// import { FileEditorComponent } from './file-editor/file-editor.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        RouterOutlet,
        // FileEditorComponent,
        FileBrowserComponent,
        MatButtonModule
    ]
})
export class AppComponent {
    title = 'client';
}
