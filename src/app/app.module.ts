import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      firebaseConfig: {
        apiKey: 'AIzaSyAcygoeh2ZOaQ1jymneFewgArI-F860rms',
        authDomain: 'bfc-jiujitsu.firebaseapp.com',
        projectId: 'bfc-jiujitsu',
        storageBucket: 'bfc-jiujitsu.appspot.com',
        messagingSenderId: '502436994329',
        appId: '1:502436994329:web:3da37c9ac973764bb9b988',
        measurementId: 'G-2ZH5X8H94N',
      },
    }),
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
