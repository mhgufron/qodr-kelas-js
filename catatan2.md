# Catatan Kelas Js 2

## Function Dalam js

Macam2 pendeklarasian function dalam javascript

### 1. Function Biasa
Penulisan function 1
```javascript
    function isEven(number) {
        return number%2 === 0
    }
```

### 2. Function di simpan dalam variabel
```javascript
    const isEven = function (number) {
        return number % 2 === 0
    }
```

### 3. Arrow Function

Jika parameter lebih dari 1
```javascript
    const isEven = (number, string) => {
        return number % 2 === 0
    }
```

Jika hanya meretrun isinya hapus return
```javascript
    const isEven = number => number % 2 === 0
```
