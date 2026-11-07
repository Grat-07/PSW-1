import { hitungTotal } from "./utils.js";

console.log(hitungTotal(2, 10000));

const kegiatan = [
    { id: 1, judul: "HTML", kuota: 20 },
    { id: 2, judul: "CSS", kuota: 10 },
    { id: 3, judul: "JavaScript", kuota: 3 }
];
const tersedia = kegiatan.filter(k => k.kuota > 0);
console.log(tersedia);

const { judul, kuota } = kegiatan[0];
console.log(judul, kuota);