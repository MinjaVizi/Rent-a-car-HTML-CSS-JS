// Funkcija koja vraća cenu po danu na osnovu izabranog automobila
function getPricePerDay(carValue) {
    const prices = {
      'audi-a4-50': 50,
      'audi-a6-60': 60,
      // ... ostali automobili ...
    };
    return prices[carValue] || 0;
  }
  
  // Funkcija koja ažurira ukupnu cenu
  function updateTotal() {
    const carSelect = document.getElementById('car-select');
    const dayInput = document.getElementById('day');
    const totalPriceDisplay = document.getElementById('total-price');
    const pricePerDay = getPricePerDay(carSelect.value);
    const days = parseInt(dayInput.value, 10);
    const totalPrice = pricePerDay * days;
    totalPriceDisplay.textContent = totalPrice.toFixed(2) + ' EUR';
  }
  
  // Funkcija koja se poziva kada se promeni broj dana
  function changeDays(increment) {
    const dayInput = document.getElementById('day');
    let days = parseInt(dayInput.value, 10);
    days = increment ? days + 1 : days - 1;
    days = days < 1 ? 1 : days;
    dayInput.value = days;
    updateTotal();
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Postavljanje minimalnog datuma na danas
    document.getElementById('date').min = new Date().toISOString().split('T')[0];
  
    // Event listeneri
    document.getElementById('car-select').addEventListener('change', updateTotal);
    document.getElementById('increment').addEventListener('click', function() { changeDays(true); });
    document.getElementById('decrement').addEventListener('click', function() { changeDays(false); });
    document.getElementById('day').addEventListener('change', updateTotal);
  
    // Inicijalno ažuriranje cene
    updateTotal();
  });
  