// Data produk
const produk = [
    {
        id_produk: 1,
        nama_produk: "Huawei P30 Pro"
    },
    {
        id_produk: 2,
        nama_produk: "Huawei Nova 5T"
    }
];

// Data stok produk
const stok_produk = [
    {
        id_produk: 1,
        qty: 15
    },
    {
        id_produk: 1,
        qty: 6
    },
    {
        id_produk: 2,
        qty: 4
    },
    {
        id_produk: 2,
        qty: 8
    }
];

// Mengelompokkan stok produk berdasarkan id_produk
// acc (accumulator)

let groupedStok = stok_produk.reduce((acc, current) => {
    if (!acc[current.id_produk]) {
        acc[current.id_produk] = 0;
    }
    acc[current.id_produk] += current.qty;
    return acc;
}, {});

// Menggabungkan data produk dan total stock
let hasil = produk.map(item => {
    let totalStock = groupedStok[item.id_produk] || 0;
    return {
        "nama_produk": item.nama_produk,
        "total_stock": totalStock
    };
});

// Membuat objek response sesuai format
let response = {
    "hasil": hasil
};

// Output response
console.log(response);

