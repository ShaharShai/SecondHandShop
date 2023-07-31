import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductComponent } from "./components/product/product.component";
import { AddNewComponent } from "./components/add-new/add-new.component";

const appRoutes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'product/:id', component: ProductComponent},
 {path: 'add', component: AddNewComponent}
]

export const routing = RouterModule.forRoot(appRoutes);