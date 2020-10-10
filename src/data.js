import React, { Component } from "react";

import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";
import img13 from "./images/room-13.jpeg";
import img14 from "./images/room-14.jpeg";
import img15 from "./images/room-15.jpeg";
import BG_LaMora from "./images/BG_lamora.jpeg";
import BG_Logo_LaMora from "./images/BG_logo_lamora.jpeg";
import delivery1 from "./images/details-delivery-1.jpeg";
import delivery2 from "./images/details-delivery-2.jpeg";
import delivery3 from "./images/details-delivery-3.jpeg";
import BG_ViejoMadero from "./images/BG_viejomadero.jpeg";
import BG_Logo_ViejoMadero from "./images/BG_logo_viejomadero.jpeg";
import furniture1 from "./images/details-furniture-1.jpeg";
import furniture2 from "./images/details-furniture-2.jpeg";
import furniture3 from "./images/details-furniture-3.jpeg";
import BG_ChifaCentro from "./images/BG_chifacentro.png";
import BG_Logo_ChifaCentro from "./images/BG_logo_chifacentro.jpeg";
import cam1 from "./images/details-cam-1.jpeg";
import cam2 from "./images/details-cam-2.jpeg";
import cam3 from "./images/details-cam-3.jpeg";

import BG_Carnivoro from "./images/BG_carnivoro.jpeg";
import BG_Logo_Carnivoro from "./images/BG_logo_carnivoro.jpeg";

// Business Logo
import Viejo_Madero from "./images/logo.png";
import Chifa_Centro from "./images/logo_chifa_centro.png";
import La_Mora from "./images/logo_la_mora.png";
import Carnivoro from "./images/logo_carnivoro.png";
// Image Card
import Broaster01 from "./images/broaster01.jpeg";
import Broaster02 from "./images/broaster02.jpeg";
import Broaster03 from "./images/broaster03.jpeg";

import { FaWhatsapp } from "react-icons/fa";

export default [
  
  /*
  * Featured Restaurant (featured: true)
  */

  // Top Content: El Viejo Madero
  {
    sys: {
      id: "14"
    },
    fields: {
      active: true,
      slug: "pollos",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Pollos",
      speciality: "Pollo Broaster",
      logo: Viejo_Madero,
      image_header: BG_ViejoMadero,
      atention: "Lun-Dom de 12:00-19:30 horas",
      experience: 32,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51980895124?text=Armado%20de%20Muebles:%20Hola,%20quiero%20información."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      featured: true,
      titleDescription: "Broasteria El Viejo Madero",
      description: 
        "Desde 1982, tradicionalmente Huancaino, con 32 años de experiencia, somos la primera broasteria con el mejor sabor y calidad. Disfruta con nosotros el mejor sabor Huancaíno.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, por favor, envíanos un mensaje directo haciendo clic en el botón: CONTACTAR (WhatsApp).",
      extras: [
        "Técnicos especializados y confiables",
        "Buenos armados, grandes experiencias",
        "Dejamos el producto, como te lo imaginaste",
        "Suministro de piezas de melamina y vidrio",
        "Suministro de accesorios en general"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_ViejoMadero //img13
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture1
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture2
            }
          }
        },
        {
          fields: {
            file: {
              url: furniture3
            }
          }
        }
      ],   

      // Card Content
      card: [
        {
          image: Broaster01,
          title: 'Personal',
          info: [
            '1/4 de Pollo Broaster',
            '+ Papas',
            '+ Ensalada',
            '+ Cremas',
          ],
          price: 'S/ 15.50',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster02,
          title: 'Combo Personal',
          info: [
            '1/4 de Pollo Broaster',
            '+ Papas',
            '+ Ensalada y Cremas',
            '+ 450ml Gaseosa (Inca/Coca)',
          ],
          price: 'S/ 17.50',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Combo Familar',
          info: [
            '4/4 de Pollo Broaster',
            '+ Porción de Papas Familiar',
            '+ Ensalada Familiar y Cremas',
            '+ 1.5L Gaseosa (Inca/Coca)'
          ],
          price: 'S/ 68.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: El Viejo Madero

  // Top Content: Chifa Centro
  {
    sys: {
      id: "15"
    },
    fields: {
      active: true,
      slug: "comida_china",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida China",
      speciality: "Comida China",
      logo: Chifa_Centro,
      image_header: BG_ChifaCentro,
      atention: "Lun-Dom de 12:30-19:30 horas",
      experience: 27,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51980895124?text=Instalación%20de%20Cámaras:%20Hola,%20quiero%20información."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      featured: true,
      titleDescription: "Chifa Centro",
      description:
        "Elaboramos nuestros platos con mucha honestidad, cuidando en todo momento la salud, la calidad y el buen sabor propio de un buen restaurante chino. Tenemos a su disposición diversidad de platos para que pueda disfrutar de un festín cantonés cerca de casa. Lo invitamos a experimentar con nosotros una enorme variedad de sabores y sensaciones.",
      titleDescription02: "",
      description02: "",
      extras: [
        "Acceso remoto desde internet",
        "Bajo costo de mantenimiento",
        "Asesoría y soporte técnico integral",
        "Soluciones de acuerdo a sus necesidades",
        "Capacitación en el sistema de vigilancia"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_ChifaCentro //img15
            }
          }
        },
        {
          fields: {
            file: {
              url: cam1
            }
          }
        },
        {
          fields: {
            file: {
              url: cam2
            }
          }
        },
        {
          fields: {
            file: {
              url: cam3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: Broaster01,
          title: 'Combo Personal',
          info: [
            '1/4 de Pollo Broaster',
            '+ Papas',
            '+ Ensalada',
            '+ 450ml Gaseosa (Inca/Coca)',
          ],
          price: 'S/ 19.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster02,
          title: 'Combo Familiar',
          info: [
            '3/4 de Pollo Broaster',
            '+ Porción de Papas Familiar',
            '+ Ensalada Familiar',
            '+ 1L Gaseosa (Inca/Coca)',
          ],
          price: 'S/ 49.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Combo Súper Familar',
          info: [
            '4/4 de Pollo Broaster',
            '+ Porción de Papas Súper Familiar',
            '+ Ensalada Familiar',
            '+ 1.5L Gaseosa (Inca/Coca)'
          ],
          price: 'S/ 64.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: Chifa Centro

  // Top Content: La Mora
  {
    sys: {
      id: "16"
    },
    fields: {
      slug: "comida_criolla",
      active: true,
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida Criolla",
      speciality: "Comida Criolla",
      logo: La_Mora,
      image_header: BG_LaMora,
      atention: "Lun-Dom de 16:00-22:00 horas",
      experience: 10,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51980895124?text=Mensajería%20y%20paquetería:%20Hola,%20quiero%20información."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      featured: true,
      titleDescription: '"La Mora" Restaurant-Cafe',
      description:
        "Bienvenidos a “La Mora”, Somos un espacio de sencillez y magia: Sencillo en el servicio y Mágico en las comidas y bebidas. Somos su mejor opción para quien desea una experiencia gastronómica única y conoce los sabores del verdadero Perú como en casa, donde siempre contarán con la atención personal, amable y cálida de estos sus servidores.",
      titleDescription02: "",
      description02: "",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_LaMora //img14
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery1
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery2
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: Broaster01,
          title: 'Combo Personal',
          info: [
            '1/4 de Pollo Broaster',
            '+ Papas',
            '+ Ensalada',
            '+ 450ml Gaseosa (Inca/Coca)',
          ],
          price: 'S/ 19.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster02,
          title: 'Combo Familiar',
          info: [
            '3/4 de Pollo Broaster',
            '+ Porción de Papas Familiar',
            '+ Ensalada Familiar',
            '+ 1L Gaseosa (Inca/Coca)',
          ],
          price: 'S/ 49.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Combo Súper Familar',
          info: [
            '4/4 de Pollo Broaster',
            '+ Porción de Papas Súper Familiar',
            '+ Ensalada Familiar',
            '+ 1.5L Gaseosa (Inca/Coca)'
          ],
          price: 'S/ 64.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: La Mora

  // Top Content: Carnivoro
  {
    sys: {
      id: "17"
    },
    fields: {
      slug: "comida_rapida",
      active: true,
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida Rapida",
      speciality: "Comida Rapida",
      logo: Carnivoro,
      image_header: BG_Carnivoro,
      atention: "Lun-Dom de 16:00-22:00 horas",
      experience: 10,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51980895124?text=Mensajería%20y%20paquetería:%20Hola,%20quiero%20información."
          target="_blank"
          style={{ textAlign: "center", width: "100%" }}
        >
          <FaWhatsapp
            style={{
              fontSize: "1.4rem",
              verticalAlign: "text-bottom",
              marginRight: "5px"
            }}
          />
          Contactar
        </a>
      ,
      featured: true,
      titleDescription: 'Carnivoro',
      description:
        "Especialistas en Hamburguesas 100% caseras, combinadas con los mejores insumos y sabores que la gastronomía peruana nos brinda.",
      titleDescription02: "",
      description02: "",
      extras: [
        "Atención express",
        "Tu solución de transporte a un Click",
        "Nuestros precios son muy competitivos",
        "Te llevamos a domicilio lo que quieras",
        "Nos adaptamos a la necesidad de cada cliente"
      ],
      images: [
        {
          fields: {
            file: {
              url: BG_Logo_Carnivoro //img14
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery1
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery2
            }
          }
        },
        {
          fields: {
            file: {
              url: delivery3
            }
          }
        }
      ],

      // Card Content
      card: [
        {
          image: Broaster01,
          title: 'Royal',
          type: 'Hamburguesa', 
          info: [
            'Montado con queso y huevo',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster02,
          title: 'A lo Pobre',
          type: 'Hamburguesa', 
          info: [
            'Montado con platano y huevo',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Hawaiana',
          type: 'Hamburguesa', 
          info: [
            'Montado con piña golden y queso',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Cheese Burguer',
          type: 'Hamburguesa', 
          info: [
            'Montado con queso holandes',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Cheese Bacone',
          type: 'Hamburguesa', 
          info: [
            'Montado con queso holandes y tocino',
            '+ 100GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'BBQ',
          type: 'Alitas o Wings',
          info: [
            'Bañadas en salsa dulce ahumada',
            '+ 150GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Picantes',
          type: 'Alitas o Wings',
          info: [
            'Bañadas en salsa de miel picante',
            '+ 150GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Clásica',
          type: 'Salchipapa',
          info: [
            'A base de hot-dog de ternera',
            '+ 200GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: Broaster03,
          title: 'Malcriada',
          type: 'Salchipapa',
          info: [
            'A base de chorizo precodico, finas hierbas y picante',
            '+ 200GR de papas fritas nativas huamantanga, puma maqui y amarilla',
          ],
          price: 'S/ 13.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px"
                }}
              />
              Pedir ahora
            </a>
        }
      ]
      // End Card Content
    }
  },
  // End Content: Carnivoro

  // Top Content: La Mora
  // End Content: La Mora

  // Top Content: La Mora
  // End Content: La Mora

  // Top Content: La Mora
  // End Content: La Mora

  // Top Content: La Mora
  // End Content: La Mora

  // Top Content: La Mora
  // End Content: La Mora

  // Rooms
  /*
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "single economy",
      slug: "single-economy",
      type: "single",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "single basic",
      slug: "single-basic",
      type: "single",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "single standard",
      slug: "single-standard",
      type: "single",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "single deluxe",
      slug: "single-deluxe",
      type: "single",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "double economy",
      slug: "double-economy",
      type: "double",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "double basic",
      slug: "double-basic",
      type: "double",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "double standard",
      slug: "double-standard",
      type: "double",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "double deluxe",
      slug: "double-deluxe",
      type: "double",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "family economy",
      slug: "family-economy",
      type: "family",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "family basic",
      slug: "family-basic",
      type: "family",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "family standard",
      slug: "family-standard",
      type: "family",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "family deluxe",
      slug: "family-deluxe",
      type: "family",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "presidential",
      slug: "presidential-room",
      type: "presidential",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
    
  }
  */
];
