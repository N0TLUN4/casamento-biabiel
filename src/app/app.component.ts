import { Component } from "@angular/core";
import { ClothingComponent } from "./components/clothing/clothing.component";
import { FooterComponent } from "./components/footer/footer.component";
import { IntroComponent } from "./components/intro/intro.component";
import { RulesComponent } from "./components/rules/rules.component";

@Component({
  selector: "app-root",
  imports: [IntroComponent, FooterComponent],
  template: `
    <div
      class="flex flex-col bg-[url(/assets/images/bg.webp)] bg-fixed bg-no-repeat bg-cover bg-center md:bg-right">
      <app-intro [isMarriageCompleted]="isMarriageCompleted" />
      <!-- <app-rules />
      <app-clothing /> -->
      <app-footer />
    </div>
  `,
})
export class AppComponent {
  isMarriageCompleted = true;
}
