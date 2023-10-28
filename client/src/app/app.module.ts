import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileBrowserComponent } from './file-browser/file-browser/file-browser.component';
import { FolderEntriesComponent } from './file-browser/folder-entries/folder-entries.component';
import { FileEditorComponent } from './file-editor/file-editor.component';

@NgModule({
  declarations: [
  
    FileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
