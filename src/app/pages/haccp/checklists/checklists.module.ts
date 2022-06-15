import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ChecklistsComponent } from './checklists.component'

const routes: Routes = [
  {
    path: '',
    component: ChecklistsComponent,
  },
]

@NgModule({
  declarations: [ChecklistsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ChecklistsModule {}
