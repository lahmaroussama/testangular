import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-Video/add-Video.component';
import { VideoComponent } from './Video/Video.component';



const routes: Routes = [
 
  {path: 'video' , component: VideoComponent } , 

  {path:'addVideo' , component:AddVideoComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
