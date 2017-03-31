import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateLogComponent } from './create-log/create-log.component';
import { EditLogComponent } from './edit-log/edit-log.component';
import { LogListComponent } from './log-list/log-list.component';
import { FilterByCaloriesPipe } from './filter-by-calories.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateLogComponent,
    EditLogComponent,
    LogListComponent,
    FilterByCaloriesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
