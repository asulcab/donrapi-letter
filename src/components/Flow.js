import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import '../css/slider-animations.css';
import '../css/style.css';
import images from '../images/chambits-bg.jpg';
import logo from '../images/logotipo.svg';
const content = [
	{
		// title: 'Mantenimiento, Limpieza y Remodelación de Inmuebles',
		// description:
		// 'Especialistas en pintura, driwall, carpintería, plomería, instalaciones eléctricas, jardinería, limpieza domiciliaria o comercial. Soluciones a la medida, servicios las 24 horas los 7 días de la semana. ¡Llámanos! estamos seguros que cubriremos tus expectativas.',
		slogan: '- Somos chamba. -',
		button: 'Leer más',
		logo: logo,
		image: images,
		user: 'Américo Sulca',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Técnicos en Informática',
		description:
		'Instalación de cámaras de seguridad y redes de computadoras, reparación y mantenimiento de equipos informáticos. Soluciones en todos los niveles, personal técnico especializado. ¿Quieres un equipo de cómputo para un trabajo en especial? Te ayudamos con cualquier duda que tengas, ¡Llámanos!',
		button: 'Leer más',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Desarrollo de Aplicaciones Web',
		description:
		'Diseñamos y desarrollamos tu página web. ¿Quieres vender por internet o potenciar aún más tus ventas? Una página web e-commerce es lo que necesitas ¡Y te lo hacemos! También diseño gráfico en general. Y sobre los precios, no te preocupes, sabemos que te encantarán. ¡Llámanos!',
		button: 'Leer más',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];
for (let i = 0; i < content.length; i++) {
	const element = content[i];
	console.log(element.button);
}

const Flow = () => {
	// autoplay={5000}
	return (
	<Slider  className="slider-wrapper">
		{content.map((item, index) => (
			<div
				key={index}
				className="slider-content"
				style={{ background: `url('${item.image}') no-repeat center center` }}
			>
				
				<div className="inner">
					<img src={item.logo} />
					<span>{item.slogan}</span>		
					<h1>{item.title}</h1>
					<p>{item.description}</p>
					<button>{item.button}</button>
				</div>
				<section>
					<img src={item.userProfile} alt={item.user} />
					<span>
						Posted by <strong>{item.user}</strong>
					</span>
				</section>
			</div>
		))}
	</Slider>
	);
};

export default Flow;
