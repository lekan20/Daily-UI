import React from 'react';

class PaymentInformation extends React.Component {
    render() {
        return <form>
            <label>
                Name on Credit Card:
                <input type="text" name="name" />
                Credit Card Number
                <input type="text" name="number" />
                Expires on:
                <select>
                    <option value="Janurary">January </option>
                    <option value="February">February </option>
                    <option value="March">March </option>
                    <option value="April">April </option>
                    <option value="May">May </option>
                    <option value="June">June </option>
                    <option value="July">July </option>
                    <option value="August">August </option>
                    <option value="September">September </option>
                    <option value="Octorber">October </option>
                    <option value="November">November </option>
                    <option value="December">December </option>
                </select>
            </label>
        </form>
    }
}

export default PaymentInformation;