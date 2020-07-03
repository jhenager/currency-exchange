import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Exchange } from './../src/exchange.js';



$(document).ready(function () {
  $('#submit-btn').click(function () {
    // const usAmount = $('#usAmount').val();
    // const foreignCurrency = $('#foreignCurrency').val();

    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#output').text(`${response.conversion_rates.CAD}`);
      } else {
        $('#output').text(`The API doesn't work`);
      }
    }
  });
});