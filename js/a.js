// Функция смены изображения
    function changeImage(newSrc) {
        var mainImage = document.getElementById("mainImage");
        mainImage.src = newSrc;  // Меняем изображение на выбранное
        localStorage.setItem("selectedImage", newSrc);  // Сохраняем выбранное изображение в localStorage
    }

    // При загрузке страницы проверяем, есть ли сохранённое изображение
    window.onload = function() {
        var savedImage = localStorage.getItem("selectedImage");
        if (savedImage) {
            document.getElementById("mainImage").src = savedImage;  // Загружаем сохранённое изображение
        }
    }

function displayValue() {
    starVal = document.forms["star-rating-form"]["star-radio"].value;
    if (starVal == -1) {
      document.getElementById("result").innerText = "Not Chosen";
    } else {
      document.getElementById("result").innerText =
        "You chose: " + starVal +
        " out of 5.";
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    displayValue();
    document.forms["star-rating-form"]["star-radio"].forEach((star) => {
      star.addEventListener("change", () => {
        displayValue();
      });
    });
  });
  
  
  
  
  
  