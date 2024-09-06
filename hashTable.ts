class hashF {
    private name: string;
    private costo: number;
    private venta: number;

    constructor(name: string, costo: number, venta: number) {
        this.name = name
        this.costo = costo;
        this.venta = venta;
    }

    public nameNumber(): number {
        let num = parseInt(this.name);
        return num
    }

    public getName(): number {
        return this.nameNumber()
    }

    public getCosto(): number {
        return this.costo;
    }

    public getVenta(): number {
        return this.venta;
    }
}

export class HashTabla {
    private size: number;
    private data: hashF[];

    constructor(size: number) {
        this.data = new Array(size);
        this.size = size;
    }

    private hash(key: number): number {
        return key % this.size;
    }
    public insert(key: hashF): void {
        let index: number = this.hash(key.getName());
        this.data[index] = key.getName();
    }
    public search(key: hashF): number {
        let index: number = this.hash(key.getName());
        return this.data[index];
    }
    public print(): void {
        let all_data: string = "";
        for (const key of this.data) {
            all_data += key + " "
        }
        console.log(all_data);
    }
}