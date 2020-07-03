import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Exchange } from './../src/exchange.js';



$(document).ready(function () {
  $('#submit-canada').click(function () {
    const usAmount = $('#usAmount').val();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    
    function getElements(response) {
      if (response) {
        $('#output').text(Math.round((usAmount*`${response.conversion_rates.CAD}`)*100)/100 + " Canadian Dollars");
      } else {
        $('#output').text(`The API doesn't work`);
      }
    }   
  });

  $('#submit-japan').click(function () {
    const usAmount = $('#usAmount').val();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    
    function getElements(response) {
      if (response) {
        $('#output').text(usAmount*`${response.conversion_rates.JPY}`+" Japanese Yen");
      } else {
        $('#output').text(`The API doesn't work`);
      }
    }   
  });

  $('#submit-europe').click(function () {
    const usAmount = $('#usAmount').val();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#output').text(usAmount*`${response.conversion_rates.EUR}`+" Euros");
      } else {
        $('#output').text(`The API doesn't work`);
      }
    }   
  });

  $('#submit-austrailia').click(function () {
    const usAmount = $('#usAmount').val();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#output').text(usAmount*`${response.conversion_rates.AUD}`+" Austrailian Dollars");
      } else {
        $('#output').text(`The API doesn't work`);
      }
    }   
  });

  $('#submit-mexico').click(function () {
    const usAmount = $('#usAmount').val();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#output').text(usAmount*`${response.conversion_rates.MXN}`+" Mexican Pesos");
      } else {
        $('#output').text(`The API doesn't work`);
      }
    }   
  });
});