import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule(
    {
        declarations:[
            HeaderComponent,
            FooterComponent,
        ],
        imports:[
            
            MatToolbarModule,
            MatIconModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatCardModule,
            MatButtonModule
        ],
        exports:[
            HeaderComponent,
            FooterComponent,
            MatToolbarModule,
            MatIconModule,
            MatInputModule,
            MatFormFieldModule,
            MatSelectModule,
            MatCardModule,
            MatButtonModule
        ]
    }
)
export class SharedModule{

}