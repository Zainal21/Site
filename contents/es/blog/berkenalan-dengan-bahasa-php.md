---
name: 'berkenalan-dengan-bahasa-php'
title: 'Yukk..Berkekenalan dengan bahasa PHP'
year: 18 Mei 2021
color: '#edece7'
isTextColorDark: true
id: 'berkenalan-dengan-bahasa-php'
category: 'Programming'
time_read: '7 Minutes Read'
description: |
  PHP adalah bahasa pemrograman script server-side yang didesain untuk pengembangan web, cocok untuk pemula dan juga masih banyak perusahaan yang menggunakan PHP, tertarik untuk mempelajarinya ?
---

### Alasan kenapa kita belajar PHP
- Mudah Dipahami
- Memiliki Sumber Belajar Berbahasa Indonesia yang Melimpah
- Hosting yang Murah Meriah
- Lapangan Pekerjaan yang Luas, walaupun diluar negeri kelihatannya jarang, akan tetapi untuk di Indonesia masih banyak lapangan kerja yang menggunakan bahasa pemrograman PHP
- Memiliki Komunitas yang Besar
- Dan masih banyak lagi


## Framework PHP yang paling Populer

- [Laravel](https://laravel.com/)
- [Codeigniter](https://codeigniter.com/)
- [Yii](https://www.yiiframework.com)
- [Zend Framework](https://framework.zend.com/)
- [02Framework](https://o2system.id/), Yang satu ini buatan Indonesia loh.

- dan masih banyak lagi

## Kenalan dengan Bahasa PHP (Hypertext Preprocessor)

__PHP__ adalah bahasa pemrograman script server-side yang didesain untuk pengembangan web. Selain itu, PHP juga bisa digunakan sebagai bahasa pemrograman umum (wikipedia). PHP di kembangkan pada tahun 1995 oleh Rasmus Lerdorf, dan sekarang dikelola oleh The PHP Group. Situs resmi PHP bisa dilihat di [php.net](http://www.php.net).

PHP disebut bahasa pemrograman server side karena PHP diproses pada komputer server. jadi PHP bukan __Pemberi Haparan Palsu__ ya hahaha
### Apa saja yang harus dipersiapkan

- `Code Editor`, disini teman - teman bebas untuk memilih Code Editor apapun, tetapi kami sarankan untuk memakai [Visual Studio Code](https://code.visualstudio.com/) karena kemudahan menambahkan ekstensi dan juga sudah tertanamnya fitur _emmet_ yang membuat kita menulis kode dengan lebih cepat
- `Web Server`  yang digunakan untuk membuat layanan server yang berdiri sendiri atau localhost, disini kami rekomendasikan untuk menggunakan [__XAMPP__](https://www.apachefriends.org/index.html), karena Cross Platform, artinya dapat dijalankan berjalan di banyak sistem operasi. XAMPP adalah perangkat lunak bebas, yang mendukung banyak sistem operasi, merupakan kompilasi dari beberapa program. Fungsinya adalah sebagai server yang berdiri sendiri, yang terdiri atas program __Apache HTTP Server, MySQL database__, dan penerjemah bahasa yang ditulis dengan bahasa pemrograman PHP dan Perl
- `Web Browser` Web browser merupakan aplikasi yang bisa menjelajahi, menyajikan, maupun mengambil konten yang ada di berbagai sumber informasi pada jaringan internet atau WWW. singkatnya Web Browser digunakan untuk menjalankan skrip ``php`` yang akan kita buat. Teman-teman dapat menggunakan berbagai macam web browser, akan tetapi yang kami sarankan adalah menggunakan web browser yang terbaru / yang sudah diupdate,Teman-teman bisa Web browser yang cukup populer seperti Google Chrome, Mozilla Firefox, Opera, dll


### Membuat Program Pertama Dengan PHP

- Jika Teman-teman sudah menginstall XAMPP, Web Browser & Code Editor
- Silahkan teman-taman buka XAMPP dan manyalan Web Server-nya (Apache)
- Buat folder baru di folder Htdocs yang berada di komputer teman-teman, biasanya untuk Windows Terletak pada Drive C:XAMPP/Htdocs, untuk Linux ada di /opt/lampp/htdocs. dan buat file di dalam folder tersebut
- Jika sudah, Buka Folder tersebut ke Code Editor favorit teman-teman. dan ketik program dibawah ini.

  ```php
  <?php
    echo "Hello World";
  ?>
  ```
- jika sudah buka web browser lalu ketik di url ```localhost``` dan arahkan ke folder yang telah kita buat tadi, lihat apa yang terjadi.


## Variable Pada PHP

Dalam pemrograman, variabel adalah suatu lokasi penyimpanan (di dalam memori komputer) yang berisikan nilai atau informasi yang nilainya tidak diketahui maupun telah diketahui (wikipedia). Dalam definisi bebasnya, variabel adalah kode program yang digunakan untuk menampung nilai tertentu. 


## Cara Penulisan Variable pada PHP

Berikut hal-hal yang perlu diperhatikan jika kita akan menuliskan _variable_ pada PHP

- Penulisan _Variable_ pada PHP diawali dengan tanda ```$``` 
- Bersifat CaseSensitive artinya sensitif terhadap huruf kecil dan huruf besar
- untuk mengisi nilai _variable_ secara langsung dapat menggunakan tanda ```=```

## Penggunaan _Variable_ pada PHP

Sebelum ke Penggunaan _Variable_ pada PHP kita kenalan dahulu tentang tipe data. Tipe data adalah klasifikasi data yang mengenalkan kompilator atau penerjemah bagaimana programmer bermaksud untuk menggunakan data. (wikipedia). berikut jenis tipe data pada bahasa pemrograman PHP

- Integer
Integer adalah type data pada php yang berupa angka bulat seperti 1, 22, 100, 1000, type data ini sangat umum digunakan di bahasa pemrograman khusunya berkaitan dengan angka bulat
- String
String adalah type data pada php yang berisi text dan karakter dimana bentuknya bisa kata atau kalimat. Dan dalam PHP untuk penulisan jenis type data ini biasanya dengan Single Quoted (' '), Double Quoted (" "). 
- Boolean
type boolean adalah tipe data yang hanya memiliki dua nilai yaitu true dan false
- Array
array berbeda dengan type data pada php seperti integer atau boolean, karena array adalah sebuah tipe data yang didalamnya terdiri dari kumpulan tipe data
- Float
Float atau nama lainya adalah floating point atau real number adalah type data pada php yang memiliki bagian desimal di akhir angka contohnya adalah 3,21 atau 4,5dalam penulisan type data float didalam php bukan menggunakan koma ( ,) tetapi menggunakan titik (.)
- Char 
Tipe data Char adalah tipe data yang hanya bisa diisi dengan 1 karakter saja. 

Berikut contoh penggunaan tipe data dan variable pada bahasa pemrograman PHP

1. _String_


```php
<?php 

  $nama = 'Muhamad Zain';
  echo $nama; // mencetak nilai variable ke layar
?>

```
2. _Integer_

```php
<?php
  
  $umur = 20;
  echo $umur  // mencetak nilai variable ke layar
?>
```
3. _Float_

```php
<?php
    $nilaimatematika = 4.5;
    $nilaibahasaindo = 9.6;
?>
```
4. _Boolean_

```php
<?php
    $benar = true;

    $salah = false
?>
```
5. _Array_ 

```php
<?php

    $buah = ['mangga', 'anggur','pisang', 'jeruk', 'semangka']; // penulisan array baru

    $hewan = array('sapi', 'gajah', 'semut', 'kuda', 'kadal'); // penulisan array lama

    $siswa = [
      1 => 'Tomy',
      2 => 'Zain',
      3 => 'Hilman', // Penulisan array assosiative, dengan key & value
      4 => 'Bagus'
    ];

    // cara mengakses nilai array. jangan lupa index array dimulai dari 0 

    echo $buah[0]; // hasilnya mangga
    echo "<br />";
    echo $hewan[2]; // hasilnya semut
    echo "<br />";
    echo $siswa[1]; // hasilnya tomy karena secara langsung kita memberi key pada elemen array

?>

```
6. _Char_


```php
<?php

    $nilaiMtk = A;
    $nilaiKalkulus = B; // hanya terdiri dari 1 karakter saja

?>

```
Bagaimana Mudah bukan?


Okey..itu mungkin itu dulu ya.. tunggu di postingan selanjutnya ya..Semoga bermanfaat.. Tetap Semangat Belajar 


```
Everyone should learn code, it teach how to think
 - Steve Jobs (1955-2011)
```


