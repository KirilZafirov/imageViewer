import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PixelComponent } from './components/pixel/pixel.component';
import { ImageComponent } from './components/image/image.component';
import { SizingComponent } from './components/sizing/sizing.component';
import { CodeSelectionComponent } from './components/code-selection/code-selection.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    PixelComponent,
    ImageComponent,
    SizingComponent,
    CodeSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
