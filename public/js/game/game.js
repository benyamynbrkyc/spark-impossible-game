function generisiIgrace() {
  let igraci = [];
  for (let i = 0; i < 2; i++) {
    let igrac = {};
    igrac.ime_prezime = prompt(`Igrac ${i + 1}: Unesite vase ime i prezime.`);
    igrac.kombinacija = [];
    for (let j = 0; j < 6; j++) {
      let broj_kombinacija = parseInt(
        prompt(
          `Unesite ${j +
            1}. broj za kombinaciju.\nNapomena: Broj mora biti izmedju 1 i 20.`
        )
      );
      if (broj_kombinacija >= 1 && broj_kombinacija <= 20) {
        if (!igrac.kombinacija.includes(broj_kombinacija)) {
          igrac.kombinacija.push(broj_kombinacija);
        } else {
          alert('Ne smijete unijeti dva puta isti broj.');
          j--;
        }
      } else {
        alert('Broj mora biti izmedju 1 i 20');
        j--;
      }
    }
    igraci.push(igrac);
  }
  return igraci;
}

export const generisiDobitnuKombinaciju = niz_igraca => {
  let dobitna_kombinacija = [];
  let koristeni_brojevi = [];
  for (let i = 0; i < niz_igraca.length; i++) {
    niz_igraca[i].kombinacija.forEach(broj => {
      if (!koristeni_brojevi.includes(broj)) koristeni_brojevi.push(broj);
    });
  }
  for (let i = 0; i < 6; i++) {
    let temp_broj = parseInt(Math.random() * 20) + 1;
    if (koristeni_brojevi.includes(temp_broj)) {
      i--;
    } else {
      if (!dobitna_kombinacija.includes(temp_broj))
        dobitna_kombinacija.push(temp_broj);
      else i--;
    }
  }
  return dobitna_kombinacija;
};
