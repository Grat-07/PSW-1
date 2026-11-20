const tombol = document.querySelector("#muat");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");

async function muat() {
  tombol.disabled = true;
  pesan.textContent = "Memuat data...";
  daftar.replaceChildren();

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10);

  try {
    const r = await fetch("./data/kegiatan.json", { signal: controller.signal });
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const data = await r.json();

    if (!Array.isArray(data)) throw new Error("Data harus array");
    for (const k of data) {
      if (typeof k.judul !== "string") throw new Error("Judul tidak sesuai");
      const li = document.createElement("li");
      li.textContent = k.judul;
      daftar.append(li);
    }

    pesan.textContent = data.length
      ? `${data.length} kegiatan dimuat`
      : "Belum ada kegiatan";
  } catch (error) {
    if (error.name === "AbortError") {
      pesan.textContent = "Permintaan dibatalkan (timeout)";
    } else {
      pesan.textContent = "Gagal memuat";
    }
    console.error(error);
  } finally {
    clearTimeout(timer);
    tombol.disabled = false;
  }
}

tombol.addEventListener("click", muat);