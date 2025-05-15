 const slideshow = document.getElementById('slideshow');
  const slideWidth = window.innerWidth;
  const imageContainer = document.getElementById('imageContainer');
  const totalSlides = imageContainer.children.length;
  let currentIndex = 0;

  function goToSlide(index, smooth = true) {
    slideshow.scrollTo({
      left: index * slideWidth,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }

  setInterval(() => {
    currentIndex++;
    goToSlide(currentIndex);

    // Jika mencapai duplikat slide pertama (slide ke-5)
    if (currentIndex === totalSlides - 1) {
      // Setelah animasi selesai, langsung lompat ke slide pertama (tanpa animasi)
      setTimeout(() => {
        goToSlide(0, false);
        currentIndex = 0;
      }, 1500); // Sesuaikan timeout dengan transition (1 detik)
    }
  }, 6000); // Ganti slide tiap 3 detik


  document.getElementById('phone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

// booking

let name=document.getElementById("name")
let email=document.getElementById("email")
let phone = document.getElementById("phone")

let destination = document.getElementById("destination")
let hotel = document.getElementById("hotel")

let departureDate = document.getElementById("departureDate")
let departureTime = document.getElementById("departureTime")
let returnDate = document.getElementById("returnDate")
let returnTime = document.getElementById("returnTime")

let inputIds = [
  "name", "email", "phone",
  "destination", "hotel",
  "departureDate", "departureTime",
  "returnDate", "returnTime"
];

let emptyFields = [];

document.getElementById("bookingButton").addEventListener("click", function(){
  let inputIds = [
    "name", "email", "phone",
    "destination", "hotel",
    "departureDate", "departureTime",
    "returnDate", "returnTime"
  ];

  let emptyFields = [];

  inputIds.forEach(id => {
    let el = document.getElementById(id);
    if (el && !el.value.trim()) {
      emptyFields.push(id);
      el.style.border = "2px solid red";
    } else if (el) {
      el.style.border = "";
    }
  });

  if (emptyFields.length > 0) {
    alert("Field berikut belum diisi: " + emptyFields.join(", "));
    return;
  }

  // Ambil semua nilai input
  let summary = inputIds.map(id => {
    let el = document.getElementById(id);
    return `${id}: ${el.value}`;
  }).join("\n");

  // Ambil note dari textarea
  let note = document.getElementById("note").value;
  if (note.trim()) {
    summary += `\nNote: ${note.trim()}`;
  }

  // Konfirmasi booking
  let confirmBooking = confirm("Mohon cek kembali data Anda:\n\n" + summary + "\n\nKlik OK untuk konfirmasi booking.");

  if (confirmBooking) {
    alert("Booking success!");
    // Bisa tambahkan reset form atau submit di sini
  } else {
    alert("Silakan periksa kembali data Anda.");
  }


})

