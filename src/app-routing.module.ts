import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'policies', component: TableComponent },
  { path: 'graph', component: GraphComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
