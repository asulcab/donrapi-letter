import React, { Component } from "react";
import { FaMagic, FaHardHat, FaTruckLoading, FaWaveSquare } from "react-icons/fa";
import Title from "./Title";
const t1 = "hola <br>";
export default class Services extends Component {
  // FaHandshake
  
  state = {
    services: [
      {
        icon: <FaMagic color='#29B8E8' />,
        title: "Limpieza Mantenimiento",
        info:
          "Mantenimiento, Limpieza y Remodelación de Inmuebles domésticos y comerciales."
      },      
      {
        icon: <FaHardHat color='#FA7800' />,
        title: "Reparación Contrucción",        
        info:
          "Especialistas en pintura, driwall, carpintería, plomería, jardineria, instalaciones eléctricas."
      },
      {
        icon: <FaTruckLoading color='#33B13A' />,
        title: "Mudanza Transporte",
        // title2: "Transporte",
        info:
          "Mudanzas de Casas, cuartos, departamentos u Oficinas, transporte a nivel nacional."
      },
      {
        icon: <FaWaveSquare color='#6B407E' />,
        title: "Cableado Estructurado",
        info:
          "Cámaras de seguridad, redes de computadoras, reparación de equipos informáticos."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="servicios" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <div>
                  <h6>{item.title}{<br />}{item.title2}</h6>
                  <p>{item.info}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
