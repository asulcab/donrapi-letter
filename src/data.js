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
import BG_ChifaCentro from "./images/BG_chifacentro.jpeg";
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

// Mamá Meche
import Mama_Meche from "./images/logo_mama_meche.png";
import BG_Logo_MamaMeche from "./images/BG_logo_mamameche.jpeg";
import BG_MamaMeche from "./images/BG_mamameche.jpeg";
// Mamá Meche - Image Card
import MM1 from "./images/mamameche/1-sanguche-de-pollo.jpeg";
import MM2 from "./images/mamameche/2-sanguche-de-asado.jpeg";
import MM3 from "./images/mamameche/3-sanguche-de-pavo.jpeg";
import MM4 from "./images/mamameche/4-chicarron-mamameche.jpeg";
import MM5 from "./images/mamameche/5-lomo-saltado.jpeg";
import MM6 from "./images/mamameche/6-beef-cheedar.jpeg";

// Chifa Palacio Chino
import Palacio_Chino from "./images/logo_palaciochino.png";
import BG_Logo_PalacioChino from "./images/BG_logo_palaciochino.jpeg";
import BG_PalacioChino from "./images/BG_palaciochino.jpeg";

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
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20del%20Viejo%20Madero."
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
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: "Broasteria El Viejo Madero",
      description: "Desde 1982, tradicionalmente Huancaino, con 32 años de experiencia, somos la primera broasteria con el mejor sabor y calidad. Disfruta con nosotros el mejor sabor Huancaíno.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
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
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
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
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
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
              href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
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
  // {
  //   sys: {
  //     id: "15"
  //   },
  //   fields: {
  //     active: false,
  //     slug: "comida_china",
  //     name: "",
  //     district: "Huancayo, Tambo, Chilca",
  //     type: "Comida China",
  //     speciality: "Comida China",
  //     logo: Chifa_Centro,
  //     image_header: BG_ChifaCentro,
  //     atention: "Lun-Dom de 12:30-19:30 horas",
  //     experience: 27,
  //     home: true,
  //     workshop: false,
  //     contact:
  //       <a
  //         className="btn-primary-slider"
  //         href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20del%20Chifa%20Centro."
  //         target="_blank"
  //         style={{ textAlign: "center", width: "100%" }}
  //       >
  //         <FaWhatsapp
  //           style={{
  //             fontSize: "1.4rem",
  //             verticalAlign: "text-bottom",
  //             marginRight: "5px"
  //           }}
  //         />
  //         Pedir Carta
  //       </a>
  //     ,
  //     featured: true,
  //     titleDescription: "Chifa Centro",
  //     description: "Elaboramos nuestros platos con mucha honestidad, cuidando en todo momento la salud, la calidad y el buen sabor propio de un buen restaurante chino. Tenemos a su disposición diversidad de platos para que pueda disfrutar de un festín cantonés cerca de casa. Lo invitamos a experimentar con nosotros una enorme variedad de sabores y sensaciones.",
  //     titleDescription02: "Servicio Express / Atención Inmediata",
  //     description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
  //     extras: [
  //       "Atención express",
  //       "Tu solución de transporte a un Click",
  //       "Nuestros precios son muy competitivos",
  //       "Te llevamos a domicilio lo que quieras",
  //       "Nos adaptamos a la necesidad de cada cliente"
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: BG_Logo_ChifaCentro //img15
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: cam1
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: cam2
  //           }
  //         }
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: cam3
  //           }
  //         }
  //       }
  //     ],

  //     // Card Content
  //     card: [
  //       {
  //         image: BG_Logo_ChifaCentro,
  //         title: 'Combo Personal',
  //         info: [
  //           '1/4 de Pollo Broaster',
  //           '+ Papas',
  //           '+ Ensalada',
  //           '+ 450ml Gaseosa (Inca/Coca)',
  //         ],
  //         price: 'S/ 19.00',
  //         button:
  //           <a
  //             className="btn-primary-slider"
  //             href="https://wa.me/51956406194?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20personal."
  //             target="_blank"
  //             style={{ textAlign: "center" }}
  //           >
  //             <FaWhatsapp
  //               style={{
  //                 fontSize: "1.4rem",
  //                 verticalAlign: "text-bottom",
  //                 marginRight: "5px"
  //               }}
  //             />
  //             Pedir ahora
  //           </a>
  //       },
  //       {
  //         image: BG_Logo_ChifaCentro,
  //         title: 'Combo Familiar',
  //         info: [
  //           '3/4 de Pollo Broaster',
  //           '+ Porción de Papas Familiar',
  //           '+ Ensalada Familiar',
  //           '+ 1L Gaseosa (Inca/Coca)',
  //         ],
  //         price: 'S/ 49.00',
  //         button:
  //           <a
  //             className="btn-primary-slider"
  //             href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola,%20quiero%20el%20combo%20familiar."
  //             target="_blank"
  //             style={{ textAlign: "center" }}
  //           >
  //             <FaWhatsapp
  //               style={{
  //                 fontSize: "1.4rem",
  //                 verticalAlign: "text-bottom",
  //                 marginRight: "5px"
  //               }}
  //             />
  //             Pedir ahora
  //           </a>
  //       },
  //       {
  //         image: BG_Logo_ChifaCentro,
  //         title: 'Combo Súper Familar',
  //         info: [
  //           '4/4 de Pollo Broaster',
  //           '+ Porción de Papas Súper Familiar',
  //           '+ Ensalada Familiar',
  //           '+ 1.5L Gaseosa (Inca/Coca)'
  //         ],
  //         price: 'S/ 64.00',
  //         button:
  //           <a
  //             className="btn-primary-slider"
  //             href="https://wa.me/51980895124?text=Pedido%20broaster:%20Hola.%20Quiero%20el%20combo%20súper%20familiar."
  //             target="_blank"
  //             style={{ textAlign: "center" }}
  //           >
  //             <FaWhatsapp
  //               style={{
  //                 fontSize: "1.4rem",
  //                 verticalAlign: "text-bottom",
  //                 marginRight: "5px"
  //               }}
  //             />
  //             Pedir ahora
  //           </a>
  //       }
  //     ]
  //     // End Card Content
  //   }
  // },
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
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20de%20La%20Mora."
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
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: '"La Mora" Restaurant-Cafe',
      description: "Bienvenidos a “La Mora”, Somos un espacio de sencillez y magia: Sencillo en el servicio y Mágico en las comidas y bebidas. Somos su mejor opción para quien desea una experiencia gastronómica única y conoce los sabores del verdadero Perú como en casa, donde siempre contarán con la atención personal, amable y cálida de estos sus servidores.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, esta es la carta y precios de los menús del día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
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
          image: BG_Logo_LaMora,
          title: 'Económico',
          type: 'Menú de Casa',
          info: [
            'Entrada:',
            '1 - Arestú de Pollo',
            '2 - Papa a la Huancaína',
            'Fondo:',
            '- Cau Cau Criollo',
            'Bebida:',
            '- Chicha Morada',
          ],
          price: 'S/ 8.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=La%20Mora:%20Hola,%20quiero%20el%20menú%20Económico.%20Entrada:[...]"
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
          image: BG_Logo_LaMora,
          title: 'Ejecutivo I',
          type: 'Menú de Casa',
          info: [
            'Entrada:',
            '1 - Arestú de Pollo',
            '2 - Papa a la Huancaína',
            'Fondo:',
            '1 - Chicharrón Colorado',
            '2 - Pollo al Maní',
            '3 - Arroz con Pollo',
            '4 - Pollo al Horno',
            'Bebida:',
            '- Chicha Morada',
          ],
          price: 'S/ 9.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=La%20Mora:%20Hola,%20quiero%20el%20menú%20Ejecutivo%20I.%20Entrada:[...]%20Fondo:[...]"
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
          image: BG_Logo_LaMora,
          title: 'Ejecutivo II',
          type: 'Menú de Casa',
          info: [
            'Entrada:',
            '1 - Arestú de Pollo',
            '2 - Papa a la Huancaína',
            'Fondo:',
            '1 - Asado de Ternera',
            '2 - Tallarines con Asado de Pollo',
            '3 - Pollo al Cilindro',
            '4 - Picante de Cuy - Cuy Chactado',
            'Bebida:',
            '- Chicha Morada',
          ],
          price: 'S/ 9.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=La%20Mora:%20Hola,%20quiero%20el%20menú%20Ejecutivo%20II.%20Entrada:[...]%20Fondo:[...]"
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
          image: BG_Logo_LaMora,
          title: 'Especial',
          type: 'Menú de Casa',
          info: [
            'Entrada:',
            '1 - Arestú de Pollo',
            '2 - Papa a la Huancaína',
            'Fondo:',
            '- Pollo al Cilindro',
            'Bebida:',
            '- Chicha Morada',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=La%20Mora:%20Hola,%20quiero%20el%20menú%20Ejecutivo%20I.%20Entrada:[...]"
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
      slug: "carnivoro",
      active: true,
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida Rapida",
      speciality: "Comida Rapida",
      logo: Carnivoro,
      image_header: BG_Carnivoro,
      atention: "Lun-Dom de 16:00 - 21:00 horas",
      experience: 10,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20de%20Carnivoro."
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
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: 'Carnivoro',
      description: "Especialistas en Hamburguesas 100% caseras, combinadas con los mejores insumos y sabores que la gastronomía peruana nos brinda.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20el%20Royal."
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20hamburguesa%20A%20lo%20Pobre."
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20Hawaiana."
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20el%20Cheese%20Burguer."
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20el%20Cheese%20Bacone."
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20BBQ."
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20las%20Picantes."
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20salchipapa%20Clásica."
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
          image: BG_Logo_Carnivoro,
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
              href="https://wa.me/51956406194?text=Carnivoro:%20Hola,%20quiero%20la%20salchipapa%20Malcriada."
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
          image: BG_Logo_Carnivoro,
          title: 'Clasicos',
          type: 'Alitas/Hamburguesas/Salchipapas',
          info: [
            '+ 150GR de papas fritas nativas huamantanga, puma maqui y amarilla',
            '1 - Alitas (Sazonadas y fritas)',
            '2 - Hamburguesas (Hamburguesa de Res de 130GR)',
            '3 - Salchipapas(A base de hot-dog de ternera)',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20Clasico:%20Hola,%20Quiero%20pedir%20el%20combo%20número:."
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
          image: BG_Logo_Carnivoro,
          title: 'Alitas Especiales',
          type: '',
          info: [
            '+ 150GR de papas fritas nativas huamantanga, puma maqui y amarilla',
            '1 - BBQ (Bañada en salsa dulce ahumada)',
            '2 - Orientales (Bañadas en salsa agridulce teriyaki)',
            '3 - Picantes (Bañadas en salsa de miel picante)',
          ],
          price: 'S/ 12.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Pedido%20de%20Alitas%20Especiales:%20Hola,%20Quiero%20pedir%20el%20combo%20número:."
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

  // Top Content: Mamá Meche
  {
    sys: {
      id: "18"
    },
    fields: {
      slug: "sanguche",
      active: true,
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Comida Rapida",
      speciality: "Comida Rapida",
      logo: Mama_Meche,
      image_header: BG_MamaMeche,
      atention: "Lun-Dom de 16:00-22:00 horas",
      experience: 10,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20de%20Mamá%20Meche."
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
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: 'Sanguchería "Mamá Meche"',
      description: "La sanguchería criolla de Huancayo. Disfruta los mejores desayunos espectaculares al estilo Mamá Meche!",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
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
              url: BG_Logo_MamaMeche //img14
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
          image: MM1,
          title: 'Pollo Deshilachado',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 10.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Pollo%20Deshilachado."
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
          image: MM2,
          title: 'Sanguche con Asado',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 12.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Sanguche%20con%20Asado."
              target="_blank"
              style={{ textAlign: "center" }}
            >
              <FaWhatsapp
                style={{
                  fontSize: "1.4rem",
                  verticalAlign: "text-bottom",
                  marginRight: "5px",
                }}
              />
              Pedir ahora
            </a>
        },
        {
          image: MM3,
          title: 'Sanguche de Pavo',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 13.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Sanguche%20de%20Pavo."
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
          image: MM4,
          title: 'Chicharrón Mamá Meche',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 13.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Chicharrón%20Mamá%20Meche."
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
          image: MM5,
          title: 'Ciabatta con Lomo Saltado',
          type: 'Sanguche',
          info: [
            'Sanguche al estilo Mamá Meche',
          ],
          price: 'S/ 15.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Ciabatta%20con%20Lomo%20Saltado."
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
          image: MM6,
          title: 'Beef Cheedar',
          type: 'Sanguche',
          info: [
            'Lomo Fino Beef Cheedar con papas',
          ],
          price: 'S/ 15.90',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Mamá%20Meche:%20Hola,%20quiero%20el%20Beef%20Cheedar."
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

  // Top Content: Palacio Chino
  {
    sys: {
      id: "19"
    },
    fields: {
      active: true,
      slug: "palacio_chino",
      name: "",
      district: "Huancayo, Tambo, Chilca",
      type: "Chifa",
      speciality: "Peruano-Oriental",
      logo: Palacio_Chino,
      image_header: BG_PalacioChino,
      atention: "Lun-Dom de 12:00-21:30 horas",
      experience: 32,
      home: true,
      workshop: false,
      contact:
        <a
          className="btn-primary-slider"
          href="https://wa.me/51956406194?text=Hola,%20DonRapi,%20por%20favor %20quisiera%20ver%20la%20carta%20y%20precios%20del%20Palacio%20Chino."
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
          Pedir Carta
        </a>
      ,
      featured: true,
      titleDescription: "Restaurante Palacio Chino IV",
      description: "La comida china,rica y colorida tiene como caracteristica principal su color diverso, olor aromatico y sabor excelente.",
      titleDescription02: "Servicio Express / Atención Inmediata",
      description02: "Hola, te presentamos la carta y precios de los productos más pedidos, por lo general contamos con la posibilidad de atender tus pedidos el mismo día, si deseas añadir algún pedido especial, o deseas que te enviemos la carta completa y precios, por favor, envíanos un mensaje directo haciendo clic en el botón: PEDIR CARTA (WhatsApp).",
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
              url: BG_Logo_PalacioChino //img13
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
          image: BG_Logo_PalacioChino,
          title: 'Económico',
          type: 'MENÚ CHIFA',
          info: [
            'Sopas:',
            '1 - Sopa de Pollo',
            '2 - Sopa Wanta',
            '3 - Caldo de Patita',
            'Segundos:',
            '1 - Areopuerto',
            '2 - Alitas con Arroz Chaufa',
            '3 - Chijaukay y Arroz Chaufa',
            '4 - Piernitas con Salsa Curry y Chaufa',
            '5 - Piernitas Rellenas y Chaufa',
            '6 - Mixto Chaufa con Tallarin Saltado',
            '7 - Mixto Chaufa con Lomo Saltado',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Palacio%20Chino:%20Hola,%20quiero%20el%20combo%20Económico."
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
          image: BG_Logo_PalacioChino,
          title: 'Ejecutivo',
          type: 'MENÚ CHIFA',
          info: [
            'Sopas:',
            '1 - Sopa de Pollo',
            '2 - Sopa Wanta',
            '3 - Caldo de Patita',
            'Segundos:',
            '1 - Pollo con Durazno con Arroz Chaufa',
            '2 - Pollo 5 Sabores y Arroz Chaufa',
            '3 - Pollo con Frutas y Arroz Chaufa',
            '4 - Pollo con Salsa de Tamarindo y Arroz Chaufa',
            '5 - Pollo con Piña y Arroz Chaufa',
            '6 - Pollo en Salsa Curry y Arroz Chaufa',
            '7 - Pollo con Verduras y Arroz Chaufa',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Palacio%20Chino:%20Hola,%20quiero%20el%20combo%20Ejecutivo."
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
          image: BG_Logo_PalacioChino,
          title: 'Especial',
          type: 'MENÚ CHIFA',
          info: [
            'Sopas:',
            '1 - Sopa de Pollo',
            '2 - Sopa Wanta',
            '3 - Caldo de Patita',
            'Segundos:',
            '1 - Chicharron de Pollo y Arroz Chaufa',
            '2 - Chancho con Piña y Arroz Chaufa',
            '3 - Chancho Kinton y Arroz Chaufa',
            '4 - Enrrollado de Pollo y Arroz Chaufa',
            '5 - Kamlu Wantan y Arroz Chaufa',
            '6 - Trucha Rellena y Arroz Chaufa',
            '7 - Taypa Especial y Arroz Chaufa',
          ],
          price: 'S/ 10.00',
          button:
            <a
              className="btn-primary-slider"
              href="https://wa.me/51956406194?text=Palacio%20Chino:%20Hola,%20quiero%20el%20combo%20Especial."
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
  // End Content: Palacio Chino

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
