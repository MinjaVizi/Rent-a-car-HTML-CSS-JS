function showAlert() {
    alert('Poruka je uspešno poslata');
    // Ovdje možete dodati logiku za slanje poruke na server ili email
  }
  

  $( function() {
    var dateFormat = "mm/dd/yy",
        from = $( "#date-range" )
          .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2,
            minDate: '+5d', // Minimum date is 5 days from now
          })
          .on( "change", function() {
            calculateTotal();
          });
  
    function calculateTotal() {
      var dateRange = $('#date-range').val();
      var dates = dateRange.split(' - ');
      if(dates.length === 2) {
        var start = new Date(dates[0]);
        var end = new Date(dates[1]);
        var diffTime = Math.abs(end - start);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        var pricePerDay = 50; // Pretpostavimo da je cena po danu 50€
        var totalPrice = diffDays * pricePerDay;
        $('#total-price').val(totalPrice + '€');
      }
    }
  
    function reserve() {
      var dateRange = $('#date-range').val();
      var delivery = $('#delivery').is(':checked');
      if(dateRange) {
        alert('Vozilo uspešno rezervisano' + (delivery ? ' sa dostavom.' : '.'));
      } else {
        alert('Molimo vas da odaberete datum.');
      }
    }
  
    window.reserve = reserve; // Učini funkciju dostupnom globalno
  });
  
  // Dodajte funkcionalnosti za filtriranje i sortiranje prema potrebi
// Primer JavaScript koda koji reaguje na promenu filtera i sortiranja
document.addEventListener('DOMContentLoaded', function () {
    const filterFuel = document.getElementById('fuel-type');
    const filterDelivery = document.getElementById('delivery-option');
    const sortPrice = document.getElementById('sort-price');
    const sortYear = document.getElementById('sort-year');
  
    filterFuel.addEventListener('change', function () {
      // Logika za filtriranje po tipu goriva
    });
  
    filterDelivery.addEventListener('change', function () {
      // Logika za filtriranje po dostavi
    });
  
    sortPrice.addEventListener('change', function () {
      // Logika za sortiranje po ceni
    });
  
    sortYear.addEventListener('change', function () {
      // Logika za sortiranje po godištu
    });
  });

  $(function () {
    $("#date-range").datepicker({
      minDate: +5, // Reservation at least 5 days in advance
      dateFormat: "dd-mm-yy"
    });
  
    $('#reserve-button').click(function() {
      var car = $('#car-select').find('option:selected').text();
      var date = $('#date-range').val();
      var delivery = $('#delivery').is(':checked') ? 'with delivery' : 'without delivery';
      if(date) {
        alert('Car ' + car + ' successfully reserved for ' + date + ' ' + delivery + '.');
      } else {
        alert('Please select a date.');
      }
    });
  });
  