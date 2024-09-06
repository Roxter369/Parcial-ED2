import { HashTabla } from "./hashTable";

//main
let productos: HashTabla = new HashTabla(0)
productos.insert("P001");
productos.insert("P002")
productos.print();
let buscar: string = "P001";
console.log(productos.search(buscar))