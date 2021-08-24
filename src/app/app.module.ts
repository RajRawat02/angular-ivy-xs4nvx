import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from '../table/table.component';
import { ModalComponent } from '../modal/modal.component';
import { GraphComponent } from '../graph/graph.component';
import { PolicyService } from '../services/policy.service';
import { HeaderComponent } from '../header/header.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ModalComponent,
    GraphComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    NgbModule
  ],
  providers: [PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
