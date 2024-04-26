import { Routes } from '@angular/router';
import { ForComponent } from './pages/for/for.component';
import { IfElseComponent } from './pages/if-else/if-else.component';
import { SwitchCaseComponent } from './pages/switch-case/switch-case.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { DeferComponent } from './pages/defer/defer.component';

export const routes: Routes = [
    { path: '', component: ForComponent },
    { path: 'if-else', component: IfElseComponent },
    { path: 'switch', component: SwitchCaseComponent },
    { path: 'empty', component: EmptyComponent },
    { path: 'defer', component: DeferComponent }
  ];
  
