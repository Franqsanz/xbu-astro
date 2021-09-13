<script>
  const books = [
    {
      img: '/assets/fondo3.jpg',
      title: 'Cross-Browser Compatibility',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error repudiandae quaerat tenetur. Magnam provident vel error officia laborum necessitatibus deserunt, blanditiis quis sint, voluptatibusquo? Nihil soluta facilis consequuntur!',
      autor: 'Franco',
      genero_literario: 'Terror',
      calificacion: 3,
      cantidad_de_paginas: 275,
      fecha_de_publicacion: '15/04/2015',
    },
    {
      img: '/assets/fondo3.jpg',
      title: 'Supported Styling Options',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error repudiandae quaerat tenetur. Magnam provident vel error officia laborum necessitatibus deserunt, blanditiis quis sint, voluptatibusquo? Nihil soluta facilis consequuntur!',
      autor: 'Franco',
      genero_literario: 'Terror',
      calificacion: 3,
      cantidad_de_paginas: 275,
      fecha_de_publicacion: '15/04/2015',
    },
    {
      img: '/assets/fondo3.jpg',
      title: 'Frameworks and Libraries',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error repudiandae quaerat tenetur. Magnam provident vel error officia laborum necessitatibus deserunt, blanditiis quis sint, voluptatibusquo? Nihil soluta facilis consequuntur!',
      autor: 'Franco',
      genero_literario: 'Terror',
      calificacion: 3,
      cantidad_de_paginas: 275,
      fecha_de_publicacion: '15/04/2015',
    },
    {
      img: '/assets/fondo3.jpg',
      title: 'Importing from npm',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error repudiandae quaerat tenetur. Magnam provident vel error officia laborum necessitatibus deserunt, blanditiis quis sint, voluptatibusquo? Nihil soluta facilis consequuntur!',
      autor: 'Franco',
      genero_literario: 'Ciencia Ficción',
      calificacion: 3,
      cantidad_de_paginas: 275,
      fecha_de_publicacion: '15/04/2015',
    },
  ];

  // books.find((g) => console.log(g.genero_literario == 'Ciencia Ficción'));

  // function filter(g) {
  //   books.find((g) => {
  //     console.log(g);
  //     g.genero_literario == 'Ciencia Ficción';
  //   });
  //   // console.log(ff);
  // }
</script>

<section class="flex my-5 justify-center flex-col items-center">
  <!-- <h2 class="w-full pl-8 py-9 text-3xl font-semibold text-left">
		Lista De Libros
	</h2> -->
  <div class="">
    <div class="flex flex-wrap justify-center pb-4 text-base md:text-xl">
      <span
        class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-1 md:mx-2"
        >Terror</span
      >
      <span
        class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-1 md:mx-2"
        >Romance</span
      >
      <span
        class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-1 md:mx-2"
        >Triller</span
      >
      <span
        class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-1 md:mx-2"
        >Ciencia Ficción</span
      >
      <span
        class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-1 md:mx-2"
        >Fantastica</span
      >
      <span
        class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-1 md:mx-2"
        >Policiales</span
      >
    </div>
  </div>
  <section class="container flex flex-wrap justify-center items-center">
    {#each books as { img, title, description, autor, genero_literario, calificacion, cantidad_de_paginas, fecha_de_publicacion }}
      <figure
        class="flex justify-center flex-col items-center m-3 shadow-lg rounded-lg overflow-hidden bg-white"
      >
        <picture>
          <img
            class="max-w-full w-96 h-96 object-cover rounded-none md:h-auto mx-auto"
            src={img}
            alt=""
          />
        </picture>
        <figcation>
          <div class="w-80 mx-0 py-5 md:mx-5">
            <span
              class="p-1 text-lg rounded-lg border border-lime-400 text-lime-700 bg-lime-50"
              >{genero_literario}</span
            >
            <h1 class="text-2xl text-lime-500 py-2 font-medium">{title}</h1>
            <p class="py-2">{description}</p>
            <h2 class="text-xl py-2 font-medium">Autor</h2>
            <span>{autor}</span>
            <h2 class="text-xl py-2 font-medium">Calificación</h2>
            <span>{calificacion}</span>
            <h2 class="text-xl py-2 font-medium">Cantidad de paginas</h2>
            <span>{cantidad_de_paginas} Paginas</span>
            <h2 class="text-xl py-2 font-medium">Fecha de publicación</h2>
            <span>{fecha_de_publicacion}</span>
          </div>
        </figcation>
      </figure>
    {/each}
  </section>
</section>
