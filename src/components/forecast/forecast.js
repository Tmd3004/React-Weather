import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import './forecast.css';

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayINAWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayINAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayINAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.forecastResponse.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)} °C /{" "}
                    {Math.round(item.main.temp_max)} °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-detail-grid-item">
                        <label>Fells like: {' '}</label>
                        <label>{Math.round(item.main.feels_like)} °C</label>
                    </div>

                    <div className="daily-detail-grid-item">
                        <label>Wind: {' '}</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>

                    <div className="daily-detail-grid-item">
                        <label>Humidity: {' '}</label>
                        <label>{item.main.humidity} %</label>
                    </div>

                    <div className="daily-detail-grid-item">
                        <label>Pressure: {' '}</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>

                    <div className="daily-detail-grid-item">
                        <label>Clouds: {' '}</label>
                        <label>{item.clouds.all} %</label>
                    </div>

                    <div className="daily-detail-grid-item">
                        <label>Sea level: {' '}</label>
                        <label>{item.main.sea_level} m</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
