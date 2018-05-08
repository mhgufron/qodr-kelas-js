## Bahasa pemrograman
- variabel 
- function perintah yang digunakan untuk menyelesaikan masalah
- kondisi operator perbandingan
- looping 

### 1. Variabel Dan Tipedata di Javascript
 terdiri dari angka angka
 tipedata di javascript:
  - integer
  - string
  - bolean
  - array
  - object

Pendeklarasian variabel jika di php diawali `$` misal $nama kalau di javascript ada 3:
var deklarasi variabel jaman dulu sudah mulai ditinggalkan, karena ada permasalahan di `scope` 
cons deklarasi variabel yang tidak bisa diubah
let Pengganti var yang sudah di sempurnakan

javascript sebernarnya namanya egmascript  ES
__Integer__
> cons angka = 1997;

di javascript jika akan mengeprint mengeluarkan output menggunakan `console.log();`

> let angka = 2009;

untuk merubah variabel 

> angka = 2017;

__String__
Pendeklarasian const dengan tipe data string

> const string = "" , '' atau ``

yang paling sering digunakan dalah '' petik satu.

Penyambungan string bisa dengan `+` atau

> cons pesan = `Hello World ${pesan}` 

Pengkonversian 

> console.log('2' + 1);

> console.log(parseInt('2') + 1);

__Bolean__
Bolean berisi `true` dan `false`

cons test = true;

cons test = false;

__Array__
Array bisa berisi integer, string, bolean, array

> cons array = [1,2,3,4,5];

Untuk menghitung array gunakan perintah length

> console.log(array.length);

Di javascript bisa menggunakan method chain

> const huruf = 'abcdefgh'

> const HurufBalik = hurug.toUpperCase().split('').revrese().join('')

split seperti explode
revrese membalik urutan array
join seperti implode

> console.log(HurufBalik)

di javascript tidak ada array asosiatif yang ada object asosiatif

misal di php
```php
    $array = [
        "nama": "Muhammad Gufron",
        "Age": 10
    ]
```
di javascript akan terjadi error
```javascript
    cons array = [
        "nama": "Muhammad Gufron",
        "Age": 10
    ]
```

__Object__

Jika menggunakan object maka bisa menggunakan assosiatif
```js
    cons object = {
        nama: 'Muhammad Gufron',
        age: 12
    }
```
untuk memanggil nama

> console.log(object.nama);

pendeklarasian Object dengan `const` bisa diubah isinya
untuk megakali masalah ini gunakan `...` 

```javascript
    cons object = {
        nama: 'Muhammad Gufron',
        age: 12
    }
    // mengkopi object 
    cons object1 = object
    // jika mengubah isi variabel object1 variabel object juga akan terrubah
    // utuk menangani masalah ini gunakan ...
    cons object1 = { ...object }
    // jika mengubah nama
    object1.nama = 'Gufron'
    // maka nilai dari object.nama juga akan berubah menjadi `Gufron`
    
```

`...` juga bisa digunakan di array 

```javascript
    cons arr = [1, 2, 3, 4, 5];
    cons arr1 = [6, 7, 8, 9, 10];
    cons newArr = [ ...arr, ...arr1 ];
    console.log(newArr);
```

es6-features.org

Object Destructring
Pendeklarasian variabel dari object

```javascript
    const person = {
        name: "Muhammad Gufron",
        age: 10
    }

    const{ name, age } = person;
```


