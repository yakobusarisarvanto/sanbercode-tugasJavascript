let productBin = {
    "requestId": null,
    "data": [
        {
            "id": 100000057465,
            "storageId": 10000008207,
            "code": "A01-01-01-A",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 76,
            "createdTime": "2021-12-21T13:54:48Z",
        },
        {
            "id": 100000057466,
            "storageId": 10000002181,
            "code": "A01-01-01-B",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 71,
            "createdTime": "2021-12-21T13:54:48Z",
        },
        {
            "id": 100000065224,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 10,
            "createdTime": "2022-02-08T10:35:19Z",
        }
    ],
    "message": "success"
};

// Fungsi untuk menghitung total quantity
function hitungTotalQuantity(productBin, productCodeSearch) {
    let totalQuantity = 0;

    for (let i = 0; i < productBin.data.length; i++) { //looping untuk sebanyak length array
        let key = productBin.data[i];

        if (key.productCode===productCodeSearch) { //pengecekan jika productCode sama dengan product code yg ingin dijumlahkan nilainya
            totalQuantity += key.quantity; //menjumlahkan nilai quantity untuk data array mulai dari ke-0 sampai length array
        }
        
    }

    return totalQuantity;
}

const totalQuantity = hitungTotalQuantity(productBin, "FBR00040101");
console.log("Total Quantity untuk productCode FBR00040101 adalah : " + totalQuantity);