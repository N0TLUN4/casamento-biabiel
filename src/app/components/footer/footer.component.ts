import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  imports: [],
  template: `
    <footer class="fixed bottom-4 left-1/2 -translate-1/2">
      <a
        href="https://lzart.com.br"
        target="_blank"
        class="bg-[#d5a97d]/70 py-1 px-2 rounded-sm backdrop-blur-xs hover:bg-[#f1c08e] transition-all font-cursive font-bold"
        >Desenvolvido por LZArt</a
      >
    </footer>
  `,
})
export class FooterComponent {}
