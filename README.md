# OOP (Object Oriented Programming)

Paradigma Programming yang menggunakan abstraksi untuk membuat model dari dunia nyata

> Fungsi menggunakan OOP:
> - Flexibility & mantainability
> - Simple to develop & easier to understand
> - Data yang dimunculkan hanya data yang kita mau (can be hidden)
> - new data and function can be easily added

## OOP vs Object literal

Object literal:
```js
const car = {
  brand: "Honda",
  engineCap: 1300,
  type: "Sedan",
};
```

Apabila kita mau membuat object yang sama dengan property yang sama dengan value yang berbeda, maka kita harus membuat object baru

```js
const car2 = {
  brand: "Toyota",
  engineCap: 1500,
  type: "Sedan",
};
```

Nah, dengan OOP, kita dapat membuat banyak object sekaligus tanpa harus mendefine property atau membuat object baru lagi

## Object Instance

Untuk membuat sebuah object instance, kita harus membuat cetakannya terlebih dahulu. Cetakannya ini disebut dengan `class`

### class dan object instance

Contoh cara membuat `class`:

```js
class Car {
  constructor() {
    this.brand = "Honda";
    this.engineCap = 1300;
    this.type = "Sedan";
  }
}
```

Mari kita breakdown isinya:
> - `Car` => nama dari class tersebut
> - `constructor()` => sebuah method/function yang berfungsi untuk mendefine atau menginisiasi property dari sebuah object instance
> - `this.property` => property yang nantinya akan dimiliki sebuah object instance

Untuk membuat object instance, kita menggunakan keyword `new`

```js
const carObj = new Car()
```

maka `carObj` ini menjadi sebuah object instance

```bash
Car {
  brand: 'Honda',
  engineCap: 1300,
  type: 'Sedan'
}
```

### Instantiate

> proses membuat sebuah object instance disebut dengan `instantiate` ditandai dengan keyword `new`
> ```js
> const carObj = new Car()
> ```

### Aturan penamaan sebuah class

> pada umumnya sebuah class dibuat dengan aturan penamaan
> - PascalCase (kapital disemua awal kata)
> - Singular (tidak plural)

contoh:
```js
class Car {
  ...
}
```
```js
class Fish {
  ...
}
```
```js
class OfTwentyTwenty {
  ...
}
```

## Object instance dengan property dinamis

sebuah class harus terdapat `constructor()` untuk mendefine property yang akan dimiliki object instance.

Karena `constructor()` adalah sebuah function (term dalam OOPnya method). Dan layaknya sebuah function, ia dapat menerima `parameter`. Artinya kita dapat mengirim `parameter` agar value dari property sebuah object instance nanti menjadi dinamis.

```js
class Car {
  constructor(brand, engineCap, type) {
    this.brand = brand;
    this.engineCap = engineCap;
    this.type = type;
  }
}
```

untuk melakukan instantiate dengan property yang dinamis:

```js
const honda = new Car("Honda", 1300, "Sedan")
const toyota = new Car("Toyota", 1500, "Sedan")
```

maka kita bisa mempunyai 2 object instance (`honda` & `toyota`) dengan hanya menggunakan 1 cetakan (`class Car()`). Dan `honda` maupun `toyota` akan memiliki property yang sama dengan value yang berbeda.

```bash
Car {
  brand: 'Honda',
  engineCap: 1300,
  type: 'Sedan'
}
```
```bash
Car {
  brand: 'Toyota',
  engineCap: 1500,
  type: 'Sedan'
}
```

### property dinamis dan default property

Jika sebuah object instance terdapat kondisi dimana ia tidak memerlukan property yang dinamis, kita bisa mengassign sebuah default value

```js
class Car {
  constructor(brand, engineCap = 1300, type) {
    this.brand = brand;
    this.engineCap = engineCap;
    this.type = type;
  }
}
```

## Method

Sebuah object instance juga dapat memiliki method/function yang dapat dijalankan. Method ini harus kita definisikan terlebih dahulu dalam `class`nya.

```js
class Car {
  constructor(brand, engine = 1500, type) {
    this.brand = brand;
    this.engine = engine;
    this.type = type;
  }

  startEngine() {
    console.log(`Engine ${this.engine} is starting`);
    console.log(`with type ${this.type}`);
  }
}

const honda = new Car("Honda", 1300, "Sedan")
```

cara melakukan pemanggilan methodnya adalah dengan cara seperti ini

```js
honda.startEngine()
```

### Method chaining

sebuah object instance juga dapat melakukan `method chaining` untuk memanggil beberapa method sekaligus dalam satu block, seperti:

```js
class Car {
  constructor(brand, engine = 1500, type) {
    this.brand = brand;
    this.engine = engine;
    this.type = type;
  }

  startEngine() {
    console.log(`Engine ${this.engine} is starting`);
    console.log(`with type ${this.type}`);
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }

  stopEngine() {
    console.log(`${this.brand} car is stopping`);
    console.log(`${this.engine} will go off`);
  }
}

const honda = new Car("Honda", 1300, "Sedan")
```

```js
honda.startEngine().drive().stopEngine()
```

namun, ketika kita menchaining sebuah method, kita tidak dapat langsung melakukannya, kita harus menambahkan `return this` karena kita membutuhkan hasil atau balikan data dari method pertama yang akan dipakai di method kedua dst

```js
class Car {
  constructor(brand, engine = 1500, type) {
    this.brand = brand;
    this.engine = engine;
    this.type = type;
  }

  startEngine() {
    console.log(`Engine ${this.engine} is starting`);
    console.log(`with type ${this.type}`);
    return this // ini harus ada
  }

  drive() {
    console.log(`${this.brand} is driving`);
    return this
  }

  stopEngine() {
    console.log(`${this.brand} car is stopping`);
    console.log(`${this.engine} will go off`);
    return this
  }
}

const honda = new Car("Honda", 1300, "Sedan")
```

barulah kita dapat menchaingin beberapa method sekaligus

```js
honda.startEngine().drive().stopEngine()
```

> contoh penerapan chaining method dalam kehidupan sehari hari adalah
> `array.join(" ").split(",")`

### Referensi

[Class in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
[OOP in Javascript](https://dev.to/nehal_mahida/oops-in-javascript-with-easy-to-understand-examples-2ppn)