import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Exchange } from './../src/exchange.js';


$(document).ready(function () {
  $('#submit-canada').click(function () {
    const usAmount = $('#usAmount').val();
    $("#output").show();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    
    function getElements(response) {
      if (response) {
        $('#output').text(Math.round((usAmount*`${response.conversion_rates.CAD}`)*100)/100 + " Canadian Dollars");
      } else {
        $('#output').text(`There was an error handling your request.`);
      }
    }   
  });

  $('#submit-japan').click(function () {
    const usAmount = $('#usAmount').val();
    $("#output").show();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    
    function getElements(response) {
      if (response) {
        $('#output').text(Math.round((usAmount*`${response.conversion_rates.JPY}`)*100)/100 + " Japanese Yen");
      } else {
        $('#output').text(`There was an error handling your request.`);
      }
    }   
  });

  $('#submit-europe').click(function () {
    const usAmount = $('#usAmount').val();
    $("#output").show();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#output').text(Math.round((usAmount*`${response.conversion_rates.EUR}`)*100)/100 + " Euros");
      } else {
        $('#output').text(`There was an error handling your request.`);
      }
    }   
  });

  $('#submit-austrailia').click(function () {
    const usAmount = $('#usAmount').val();
    $("#output").show();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#output').text(Math.round((usAmount*`${response.conversion_rates.AUD}`)*100)/100 + " Austrailian Dollars");
      } else {
        $('#output').text(`There was an error handling your request.`);
      }
    }   
  });

  $('#submit-mexico').click(function () {
    const usAmount = $('#usAmount').val();
    $("#output").show();
    
    (async () => {
      let exchange = new Exchange();
      const response = await exchange.getMoney();
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('#output').text(Math.round((usAmount*`${response.conversion_rates.MXN}`)*100)/100 + " Mexican Pesos");
      } else {
        $('#output').text(`There was an error handling your request.`);
      }
    }   
  });
});