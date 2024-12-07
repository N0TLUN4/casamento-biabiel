import { afterNextRender, Component } from "@angular/core";
import { ClothingComponent } from "./components/clothing/clothing.component";
import { FooterComponent } from "./components/footer/footer.component";
import { IntroComponent } from "./components/intro/intro.component";
import { RulesComponent } from "./components/rules/rules.component";

@Component({
  selector: "app-root",
  imports: [IntroComponent, RulesComponent, ClothingComponent, FooterComponent],
  template: `
    <div
      class="flex flex-col bg-[url(/assets/images/bg.webp)] bg-fixed bg-no-repeat bg-cover bg-right"
    >
      <app-intro />
      <app-rules />
      <app-clothing />
      <app-footer />
    </div>
  `,
  styles: [],
})
export class AppComponent {
  message = "ATENÇÃO: Confirme sua presença até 10 de Fevereiro.";
  constructor() {
    afterNextRender(() => {
      return;
      setTimeout(() => {
        alert(this.message);
      }, 1200);
    });
  }
}
