import { Component, input } from "@angular/core";
@Component({
  selector: "app-intro",
  imports: [],
  template: `
    <section
      id="intro"
      class="h-[100dvh] grid place-items-center text-center">
      <div
        class="w-5/6 md:w-1/2 flex flex-col mx-auto justify-center bg-[#d5a97d]/70 backdrop-blur-xs rounded-xl">
        <div class="flex flex-col gap-4 px-4 py-8">
          <img
            src="/assets/images/persons.webp"
            width="150"
            height="150"
            alt="Bia e Gabriel"
            class="rounded-full mx-auto border border-orange-200 outline outline-orange-100 hover:scale-110 transition-transform shadow-lg" />
          <p class="text-4xl font-cursive font-bold">Beatriz e Gabriel</p>
        </div>
        @if(!isMarriageCompleted()) {
        <p class="text-lg md:text-2xl text-pretty">
          Convidam para a cerimônia de casamento
        </p>
        } @else {
        <p class="text-lg md:text-2xl text-pretty">
          Estamos felizes pela sua participação
        </p>
        }
        <div class="flex flex-col gap-4 mt-4">
          <div>
            <p class="text-xl md:text-3xl mx-2">Sábado às 15h</p>
            <p class="text-lg md:text-2xl">22 de Fevereiro de 2025</p>
          </div>
        </div>
        <nav
          class="flex flex-row gap-2 justify-stretch items-center mx-auto py-4">
          @if (!isMarriageCompleted()) {
          <div class="flex flex-col items-center">
            <p class="uppercase text-xs">Regras</p>
            <a
              href="#rules"
              class="transition-colors rounded-full grid place-items-center bg-[#643f26]/40 active:bg-[#643f26] hover:bg-[#c97c48] p-2 w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="#d5b494"
                viewBox="0 0 24 24">
                <title>Regras</title>
                <path
                  d="M16.5 11L13 7.5L14.4 6.1L16.5 8.2L20.7 4L22.1 5.4L16.5 11M11 7H2V9H11V7M21 13.4L19.6 12L17 14.6L14.4 12L13 13.4L15.6 16L13 18.6L14.4 20L17 17.4L19.6 20L21 18.6L18.4 16L21 13.4M11 15H2V17H11V15Z" />
              </svg>
            </a>
          </div>
          } @else {
          <div class="flex flex-col items-center">
            <p class="uppercase text-xs">Fotos/Videos</p>
            <a
              href="https://drive.google.com/drive/folders/1PNO0EwKBAtg51okKBWVxjg9xoa84S5m_"
              target="_blank"
              class="transition-colors rounded-full grid place-items-center bg-[#643f26]/40 active:bg-[#643f26] hover:bg-[#c97c48] p-2 w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#d5b494">
                <title>Fotos e vídeos</title>
                <path
                  d="M9 13V5C9 3.9 9.9 3 11 3H20C21.1 3 22 3.9 22 5V11H18.57L17.29 9.26C17.23 9.17 17.11 9.17 17.05 9.26L15.06 12C15 12.06 14.88 12.07 14.82 12L13.39 10.25C13.33 10.18 13.22 10.18 13.16 10.25L11.05 12.91C10.97 13 11.04 13.15 11.16 13.15H17.5V15H11C9.89 15 9 14.11 9 13M6 22V21H4V22H2V2H4V3H6V2H8.39C7.54 2.74 7 3.8 7 5V13C7 15.21 8.79 17 11 17H15.7C14.67 17.83 14 19.08 14 20.5C14 21.03 14.11 21.53 14.28 22H6M4 7H6V5H4V7M4 11H6V9H4V11M4 15H6V13H4V15M6 19V17H4V19H6M23 13V15H21V20.5C21 21.88 19.88 23 18.5 23S16 21.88 16 20.5 17.12 18 18.5 18C18.86 18 19.19 18.07 19.5 18.21V13H23Z" />
              </svg>
            </a>
          </div>
          } @if (!isMarriageCompleted()) {
          <div class="flex flex-col items-center">
            <p class="uppercase text-xs">Local</p>
            <a
              href="https://maps.app.goo.gl/mV2GkAzeXDWZ37PY8?g_st=ac"
              target="_blank"
              class="transition-colors rounded-full grid place-items-center bg-[#643f26]/40 active:bg-[#643f26] hover:bg-[#c97c48] p-2 w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-6 h-6"
                fill="#d5b494">
                <title>Local do Casamento</title>
                <path
                  d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
            </a>
          </div>
          }
          <div class="flex flex-col items-center">
            <p class="uppercase text-xs">Presentes</p>
            <a
              href="https://listas.casasbahia.com.br/beatrizbiel"
              target="_blank"
              class="transition-colors rounded-full grid place-items-center bg-[#643f26]/40 active:bg-[#643f26] hover:bg-[#c97c48] p-2 w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-6 h-6"
                fill="#d5b494">
                <title>Lista de Presentes</title>
                <path
                  d="M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z" />
              </svg>
            </a>
          </div>
          @if (!isMarriageCompleted()) {
          <div class="flex flex-col items-center">
            <p class="uppercase text-xs">Confirmar</p>
            <a
              href="https://api.whatsapp.com/send?phone=5511991135939&text=Ol%C3%A1%20Bia,%20estarei%20presente%20no%20seu%20casamento%20com%20o%20Gabriel,%20d%C3%AAs%20de%20j%C3%A1%20desejo%20felicidades."
              target="_blank"
              class="transition-colors rounded-full grid place-items-center bg-[#643f26]/40 active:bg-[#643f26] hover:bg-[#c97c48] p-2 w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-6 h-6"
                fill="#d5b494">
                <title>Confirmar presença</title>
                <path
                  d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
              </svg>
            </a>
          </div>
          }
        </nav>
      </div>
    </section>
  `,
})
export class IntroComponent {
  isMarriageCompleted = input.required<boolean>();
}
