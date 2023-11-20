function getPricePerDay(carValue) {
    const prices = {
      'audi-a4-50': 50,
      'audi-a6-60': 60,
      'audi-q5-70': 70,
      'vw-golf-45': 45,
      'vw-passat-55': 55,
      'vw-polo-35': 35,
      'vw-tiguan-65': 65,
      'vw-touareg-90': 90,
      'audi-a3-40': 40,
      'audi-tt-80': 80
    };
    return prices[carValue] || 0;
  }
  
  function updateTotal() {
    const carSelect = document.getElementById('car-select');
    const dayInput = document.getElementById('day');
    const totalPriceDisplay = document.getElementById('total-price');
    const pricePerDay = getPricePerDay(carSelect.value);
    const days = parseInt(dayInput.value, 10);
    const totalPrice = pricePerDay * days;
    totalPriceDisplay.textContent = totalPrice.toFixed(2) + ' EUR';
  }
  
  function changeDays(increment) {
    const dayInput = document.getElementById('day');
    let days = parseInt(dayInput.value, 10);
    days = increment ? days + 1 : days - 1;
    days = days < 1 ? 1 : days;
    dayInput.value = days;
    updateTotal();
  }
  
  function applyFilters() {
    const fuelType = document.getElementById('fuel-type').value;
    const sortPrice = document.getElementById('sort-price').value;
    const sortYear = document.getElementById('sort-year').value;
    let cars = Array.from(document.getElementsByClassName('car-card'));
    cars.forEach(car => car.style.display = '');
    if (fuelType !== 'all') {
      cars = cars.filter(car => car.dataset.fuel === fuelType);
    }
    if (sortPrice !== 'default') {
      cars.sort((a, b) => sortPrice === 'ascending' ? a.dataset.price - b.dataset.price : b.dataset.price - a.dataset.price);
    }
    if (sortYear !== 'default') {
      cars.sort((a, b) => sortYear === 'ascending' ? a.dataset.year - b.dataset.year : b.dataset.year - a.dataset.year);
    }
    const container = document.querySelector('.car-cards-container');
    container.innerHTML = '';
    cars.forEach(car => container.appendChild(car));
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('date').min = new Date().toISOString().split('T')[0];
    document.getElementById('car-select').addEventListener('change', updateTotal);
    document.getElementById('increment').addEventListener('click', function() { changeDays(true); });
    document.getElementById('decrement').addEventListener('click', function() { changeDays(false); });
    document.getElementById('day').addEventListener('change', updateTotal);
    updateTotal();
    applyFilters();
    
    document.querySelectorAll('button[type="submit"]').forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.form.reset();
        updateTotal();
        applyFilters();
      });
    });
  });
  