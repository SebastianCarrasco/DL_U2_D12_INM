const propiedadesVenta = [
    { nombre: 'Casa en la playa', src: 'assets/img/casa1.jpg', descripcion: 'Hermosa casa frente al mar.', ubicacion: 'Viña del Mar', habitaciones: 3, costo: 1500000, smoke: true, pets: true },
    { nombre: 'Departamento en el centro', src: 'assets/img/depto1.jpg', descripcion: 'Moderno departamento en el corazón de la ciudad.', ubicacion: 'Santiago', habitaciones: 2, costo: 900000, smoke: false, pets: false },
    { nombre: 'Casa en las montañas', src: 'assets/img/casa2.jpg', descripcion: 'Acogedora casa en la cordillera.', ubicacion: 'La Parva', habitaciones: 4, costo: 2500000, smoke: true, pets: false },
    { nombre: 'Cabaña en el bosque', src: 'assets/img/cabana.jpg', descripcion: 'Cabaña aislada para desconectar.', ubicacion: 'Pucón', habitaciones: 2, costo: 1200000, smoke: false, pets: true }
];

const propiedadesAlquiler = [
    { nombre: 'Departamento amoblado', src: 'assets/img/depto2.jpg', descripcion: 'Completamente amoblado.', ubicacion: 'Providencia', habitaciones: 1, costo: 450000, smoke: false, pets: true },
    { nombre: 'Casa familiar', src: 'assets/img/casa3.jpg', descripcion: 'Amplia casa para toda la familia.', ubicacion: 'Ñuñoa', habitaciones: 5, costo: 1200000, smoke: true, pets: true },
    { nombre: 'Pieza en residencia', src: 'assets/img/pieza.jpg', descripcion: 'Pieza independiente en residencia.', ubicacion: 'La Florida', habitaciones: 1, costo: 200000, smoke: false, pets: false },
    { nombre: 'Cabaña en la playa', src: 'assets/img/cabana2.jpg', descripcion: 'Cabaña a pocos metros de la playa.', ubicacion: 'Zapallar', habitaciones: 2, costo: 800000, smoke: true, pets: true }
];

function renderizarPropiedades(propiedades, idContenedor, limite = null) {
    const contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = '';

    propiedades.slice(0, limite || propiedades.length).forEach(prop => {
        const propiedadHTML = `
            <div class="propiedad">
                <img src="${prop.src}" alt="${prop.nombre}">
                <h3>${prop.nombre}</h3>
                <p>${prop.descripcion}</p>
                <p>Ubicación: ${prop.ubicacion}</p>
                <p>Habitaciones: ${prop.habitaciones}</p>
                <p>Precio: $${prop.costo}</p>
                <p>${prop.smoke ? 'Fumar permitido' : 'No se permite fumar'}</p>
                <p>${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
            </div>
        `;
        contenedor.innerHTML += propiedadHTML;
    });
}

// Renderizar en la página principal solo 3 propiedades de cada categoría
if (document.getElementById('propiedades-venta')) {
    renderizarPropiedades(propiedadesVenta, 'propiedades-venta', 3);
}

if (document.getElementById('propiedades-alquiler')) {
    renderizarPropiedades(propiedadesAlquiler, 'propiedades-alquiler', 3);
}

// Renderizar todas las propiedades en las páginas correspondientes
if (document.location.pathname.includes('propiedades_venta.html')) {
    renderizarPropiedades(propiedadesVenta, 'propiedades-venta');
}

if (document.location.pathname.includes('propiedades_alquiler.html')) {
    renderizarPropiedades(propiedadesAlquiler, 'propiedades-alquiler');
}
