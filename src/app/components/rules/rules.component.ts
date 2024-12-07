import { Component } from "@angular/core";

@Component({
  selector: "app-rules",
  imports: [],
  template: `
    <section id="rules" class="h-[100dvh] grid place-items-center text-center">
      <div
        class="w-5/6 md:w-1/2 flex flex-col mx-auto justify-center bg-[#d5a97d]/70 backdrop-blur-xs rounded-xl"
      >
        <div class="flex flex-col gap-4 py-4">
          <p class="text-4xl font-cursive font-bold">Regras</p>
        </div>
        <div class="mx-auto flex flex-col gap-4 text-justify px-4">
          <p class="text-lg">-> Tirem bastante fotos;</p>
          <p class="text-lg">-> Convidados não convidam;</p>
          <p class="text-lg">-> Nada de brigas, só curtição;</p>
          <p class="text-lg">-> Não levar embora os arranjos das mesas;</p>
          <p class="text-lg">-> Bebidas fortes, cada um com seu consumo.</p>
          <p class="text-lg">-> Proibida a entrada na piscina.</p>
        </div>
        <nav class="flex flex-row gap-4 justify-end items-center py-4 px-2">
          <div class="flex flex-col items-center">
            <p class="uppercase text-xs">Vestimentas</p>
            <a
              href="#clothing"
              class="transition-colors rounded-full grid place-items-center bg-[#643f26]/40 active:bg-[#643f26] hover:bg-[#c97c48] p-2 w-12 h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="#d5b494"
                viewBox="0 0 24 24"
              >
                <title>Vestimentas</title>
                <path
                  d="M12 4A3.5 3.5 0 0 0 8.5 7.5H10.5A1.5 1.5 0 0 1 12 6A1.5 1.5 0 0 1 13.5 7.5A1.5 1.5 0 0 1 12 9C11.45 9 11 9.45 11 10V11.75L2.4 18.2A1 1 0 0 0 3 20H21A1 1 0 0 0 21.6 18.2L13 11.75V10.85A3.5 3.5 0 0 0 15.5 7.5A3.5 3.5 0 0 0 12 4M12 13.5L18 18H6Z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </section>
  `,
})
export class RulesComponent {}
