---
name: "membuat-image-preview-sederhana"
title: "Membuat image preview sederhana"
year: 17 Juni 2021
color: "#edece7"
isTextColorDark: true
id: "membuat-image-preview-sederhana"
category: "Programming"
time_read: "8 Minutes Read"
description: |
 Upload image adalah salah satu fitur yang ada di sebuah aplikasi, terkadang kita tidak tahu apakah image / gambar yang kita input-kan itu benar ada baiknya kita menyediakan fitur image preview sebelum user men-submit data tersebut, untuk selengkapnya mari kita kupas.
---

Assalamualaikum warahmatullahi wabarokatuh, Halo Semuanya 👋 bagaimana kabarnya nih, mudah-mudahan baik-baik aja ya, Nah pernah nggak sih jika teman-teman membuat website yang menyediakan form input file image, nah terkadang kita tidak tahu apakah file atau gambar yang kita masukkan itu benar,

Maka dari itu perlu __Image Preview__ untuk menampilkan gambar sebelum gambar tersebut disubmit oleh user. nah kali ini aku akan share bagaimana caranya dengan menggunakan Javascript dengan memanfaatkan fitur Javascript yaitu DOM (Document Object Model) Manipulation akan tetapi kita juga akan menggunakan bantuan libary JQuery dan Bootstrap. 

Bahan-bahan yang dibutuhkan antara lain

- JQuery
- Bootstrap


Nah berikut contoh penerapannya.

```html
<div class="form-group">
  <label>Cover</label>
  <div class="mb-2">
    <!-- Tempat gambar previewnya -->
    <img
      src=""
      class="img-fluid"
      alt=""
      id="upload-img-preview"
      style="display: none; width: 200px;"
    /><br>
    <!-- link yang akan digunakan untuk menghapus gambar sementara -->
    <a
      href="#"
      class="text-danger"
      id="upload-img-delete"
      style="display: none"
      >Delete Cover Image</a
    >
  </div>
  <!-- tag untuk form input file nya -->
  <div class="custom-file">
    <input
      type="file"
      accept="image/*"
      name="thumbnail"
      id="cover"
      class="custom-file-input js-upload-image form-control"
    />
    <label class="custom-file-label" for="cover"
      >Choose file</label
    >
  </div>
</div>
```

```javascript
// Beri fungsi jika isi dari image preview tadi berubah
$(".js-upload-image").change(function (event) {
  makePreview(this);
  $("#upload-img-preview").show();
  $("#upload-img-delete").show();
});

// Buat Fungsi untuk Menampilkan gambar sementaranya
function makePreview(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("#upload-img-preview").attr("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
// Fungsi untuk meng-Hapus gambar preview
$("#upload-img-delete").click(function (event) {
  event.preventDefault();
  $("#upload-img-preview").attr("src", "").hide();
  $(".custom-file-input").val(null);
  $(this).hide();
});
```
 

 Nah sekarang si-user pun akan bisa melihat gambar yang sebelum ia men-submitnya, jadi fitur ini juga akan menambah user experience untuk pengguna website kita. Mungkin itu dulu ya yang bisa aku share ke temen-temen semua, semoga bermanfaat dan sampai jumpa di postingan selanjutnya, Terima kasih ya🙌