const daftar = document.querySelector("#daftar");
const li = document.createElement("li");
li.textContent = "Rina";
daftar.append(li);

let peserta = [{ id: 1, nama: "Rina" }, { id: 2, nama: "Budi" }];
function render() {
 daftar.replaceChildren();
 for (const p of peserta) {
  const li = document.createElement("li");
  li.textContent = p.nama; daftar.append(li);
 }
}

render();

const pesan = document.querySelector("#pesan");
pesan.textContent = peserta.length ? "" : "Belum ada peserta";