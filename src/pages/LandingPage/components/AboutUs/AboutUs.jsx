import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className="text-gray-600 body-font md:px-12 lg:px-24">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
                        Bienvenido al lugar donde emprendedores y comerciantes encuentran la información clave para abrir su negocio en el lugar perfecto.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Nuestra plataforma te brinda acceso instantáneo a datos detallados sobre los tipos de locales más comunes en cada barrio, así como el precio medio de los locales disponibles. ¡Descubre oportunidades únicas y toma decisiones informadas para asegurar el éxito de tu nuevo comercio! Con nuestra app, el lugar ideal para tu negocio está a solo un clic de distancia. ¡Comienza a explorar hoy mismo y construye tu camino hacia el triunfo empresarial!
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <Link to="/map">Ir al mapa</Link>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                </div>

            </div>
        </section>
    )
}

export default AboutUs