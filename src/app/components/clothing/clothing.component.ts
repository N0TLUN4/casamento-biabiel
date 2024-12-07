import { Component } from "@angular/core";

@Component({
  selector: "app-clothing",
  imports: [],
  template: `
    <section
      id="clothing"
      class="h-[100dvh] grid place-items-center text-center"
    >
      <div
        class="w-5/6 md:w-1/2 flex flex-col mx-auto justify-center bg-[#d5a97d]/70 backdrop-blur-xs rounded-xl"
      >
        <div class="flex flex-col gap-4 py-4">
          <p class="text-4xl font-cursive font-bold">Vestimentas</p>
        </div>
        <div class="mx-auto flex flex-col gap-4 text-justify px-4">
          <p class="text-lg">
            -> Os convidados não poderão vir a cerimônia utilizando as cores:
            branco, azul e rosê.
          </p>
          <p class="text-lg">-> Traje: esporte chique.</p>
        </div>
        <nav class="flex flex-row gap-2 justify-between items-center py-4 px-2">
          <p class="text-xl font-cursive text-balance mx-auto font-semibold">
            Por fim, esperamos que todos se divirtam e obrigada por participarem
            do nosso momento!
          </p>
          <div class="flex flex-col items-center">
            <a
              href="#intro"
              class="transition-colors rounded-full grid place-items-center bg-[#643f26]/40 active:bg-[#643f26] hover:bg-[#c97c48] p-2 w-12 h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#d5b494"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <title>Início</title>
                <path
                  d="M16,13V21H8V13H2L12,3L22,13H16M7,11H10V19H14V11H17L12,6L7,11Z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </section>
  `,
})
export class ClothingComponent {}
