import { generisiDobitnuKombinaciju } from './game/game.js';
const regex = /\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2}/;

new Vue({
  el: '#game_fields',
  data: {
    player1_ime: '',
    player1_kombinacija: '',
    player2_ime: '',
    player2_kombinacija: '',
    show_form: true,
    dobitna_kombinacija: ''
  },
  methods: {
    provjeriInput(kombinacija) {
      let ne_valja = false;
      kombinacija.forEach(broj => {
        if (broj > 20 || broj < 1) {
          ne_valja = true;
        }
      });
      if (ne_valja) return false;
      else return true;
    },
    uNizIntova(str) {
      let niz_intova = [];
      str.split(',').forEach(char => {
        niz_intova.push(parseInt(char));
      });
      return niz_intova;
    },
    start() {
      if (!regex.test(this.player1_kombinacija))
        return alert(
          `${this.player1_ime}: U kombinaciju morate unijeti 6 brojeva (izmedju 1 i 20), razdvojenih zarezom.`
        );
      if (!regex.test(this.player2_kombinacija))
        return alert(
          `${this.player2_ime}: U kombinaciju morate unijeti 6 brojeva (izmedju 1 i 20), razdvojenih zarezom.`
        );

      if (
        this.provjeriInput(this.uNizIntova(this.player1_kombinacija)) == false
      )
        return alert(`${this.player1_ime}: Brojevi moraju biti izmedju 1 i 20`);
      if (
        this.provjeriInput(this.uNizIntova(this.player2_kombinacija)) == false
      )
        return alert('Brojevi moraju biti izmedju 1 i 20');

      if (
        regex.test(this.player2_kombinacija) &&
        regex.test(this.player2_kombinacija)
      ) {
        this.show_form = !this.show_form;
        const igraci = [
          {
            ime_prezime: this.player1_ime,
            kombinacija: this.uNizIntova(this.player1_kombinacija)
          },
          {
            ime_prezime: this.player2_ime,
            kombinacija: this.uNizIntova(this.player2_kombinacija)
          }
        ];

        this.dobitna_kombinacija = generisiDobitnuKombinaciju(igraci).join(
          ' | '
        );
      }
    }
  }
});
