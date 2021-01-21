import React from 'react';

export default function Resources() {
    return (
        <div className="Resources">
            <main>
                <h1>How It Works</h1>
                <p>
                    On the Currency Pairs page type in any symbol/pair you would like to see and watch it appear. 
                    The graph will display a Candlestick chart with the relevent information.
                </p>

                <h1>Top Traded Currencies Pairs</h1>
                <ul>
                    <li>AUD/USD</li>
                    <li>EUR/JPY</li>
                    <li>EUR/USD</li>
                    <li>GBP/JPY</li>
                    <li>GBP/USD</li>
                    <li>NZD/USD</li>
                    <li>USD/CAD</li>
                    <li>USD/CHF</li>
                    <li>USD/JPY</li>
                    <li>XAG/USD</li>
                    <li>XAU/USD</li>
                </ul>
            </main>
            
            <footer>

            <h1>Resources</h1>
            <h3>Learn more about forex <a href="https://www.forex.com/en-us/" className="here-link" >HERE</a> </h3>
            <h4>Link to the Google library that create the charts</h4>
            <a href="https://developers.google.com/chart/" className="Resources-Link" >https://developers.google.com/chart</a>
            <h4>Link to the API websit that powers this website</h4>
            <a href="https://fcsapi.com/document/forex-api#getstarted" className="Resources-Link" >https://fcsapi.com/document/forex-api#getstarted</a>
            
            </footer>
        </div>
    );
}
