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
        $('#output').text((usAmount*`${response.conversion_rates.CAD}`));
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
        $('#output').text((usAmount*`${response.conversion_rates.JPY}`));
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
        $('#output').text((usAmount*`${response.conversion_rates.EUR}`));
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
        $('#output').text((usAmount*`${response.conversion_rates.AUD}`));
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
        $('#output').text((usAmount*`${response.conversion_rates.MXN}`));
      } else {
        $('#output').text(`The API doesn't work`);
      }
    }   
  });
});