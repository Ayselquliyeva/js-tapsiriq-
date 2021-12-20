class Sirket {
  constructor(sirketAdi, filialAdi) {
    (this.ad = sirketAdi), (this.flial = filialAdi);
  }

  isciler = [[], [], []];

  gonder() {
    let data = this.isciler;

    let ad = document.getElementById("ad").value;
    let vezife = document.getElementById("vezife").value;
    let maas = document.getElementById("maas").value;

    data[0].push(ad);
    data[1].push(vezife);
    data[2].push(maas);
  }

  tableQur() {
    let data = this.isciler;
    let ekran = `
       <tr>
       <th scope="col">№</th>
       <th scope="col">Ad</th>
       <th scope="col">Vezife</th>
       <th scope="col">Maas</th>
     </tr>`;
    for (let i = 0; i < data[0].length; i++) {
      ekran += `
       <tr>
       <th scope="row"> ${i + 1} </th>
       <td> ${data[0][i]} </td>
       <td>${data[1][i]}</td>
       <td> ${data[2][i]}</td>
     </tr>`;
    }

    return ekran;
  }
}

const a = new Sirket("Yup Technlogy", "Nizami");
const b = new Sirket("Yup Technology", "Elmler");
const c = new Sirket("Yup Technology", "Yasamal");

let arr = [];

arr.push(a.flial, b.flial, c.flial);

let sec = document.getElementById("sec");
onload = function () {
  let ekran = `<option selected disabled > Filial Secin </option>`;
  for (let i = 0; i < arr.length; i++) {
    ekran += `<option value="${i}" > ${[arr[i]]} </option>`;
  }
  sec.innerHTML = ekran;
}
sec.onchange =function(){
  let value = arr.value
  let ekran =`<p "> </p>`;
  for(let i = 0; i<arr.length;i++){
     ekran += `<p value="${i}" > ${[arr].value} </p>`;
}
arr.innerHTML =ekran;
}

document.getElementById("sirketAdi").innerHTML = a.ad;
document.getElementById("filial").innerHTML = a.flial;

function saxla() {
  let ad = document.getElementById("ad").value;
  let vezife = document.getElementById("vezife").value;
  let maas = document.getElementById("maas").value;

  if (ad == "" && vezife == "" && maas == "") {
    alert("Bos gonderme");
  } else {
    a.gonder();
    document.getElementById("tbl").innerHTML = a.tableQur();
  }

  let input = document.getElementsByTagName("input");

  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}
