import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { ShowVehicleComponent } from './show-vehicle/show-vehicle.component';

const routes: Routes = [
	{path: 'create', component: CreateVehicleComponent},
	{path: 'delete', component: DeleteVehicleComponent},
	{path: 'update', component: UpdateVehicleComponent},
	{path: 'show', component: ShowVehicleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CreateVehicleComponent, DeleteVehicleComponent, UpdateVehicleComponent, ShowVehicleComponent];