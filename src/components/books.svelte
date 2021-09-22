<script>
  import books from '../data/data';
</script>

<section class="flex my-5 justify-center flex-col items-center">
  <!-- <h2 class="w-full pl-8 py-9 text-3xl font-semibold text-left">
		Lista De Libros
	</h2> -->
  <div>
    <div class="flex flex-wrap justify-center pb-4 text-base md:text-xl">
      <a href="/categories/terror">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Terror
        </span>
      </a>
      <a href="/categories/romance">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Romance
        </span>
      </a>
      <a href="/categories/triller">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Triller
        </span>
      </a>
      <a href="/categories/ciencia-ficcion">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Ciencia Ficción
        </span>
      </a>
      <a href="/categories/fantasia">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Fantasia
        </span>
      </a>
      <a href="/categories/policiales">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Policiales
        </span>
      </a>
      <a href="/categories/tecnologia">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Tecnologia
        </span>
      </a>
      <a href="/categories/ciencias">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Ciencias
        </span>
      </a>
      <a href="/categories/cocina">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Cocina
        </span>
      </a>
      <a href="/categories/arte">
        <span
          class="p-1 rounded-lg border border-lime-400 text-lime-700 bg-lime-50 m-0.5 md:mx-2"
        >
          Arte
        </span>
      </a>
    </div>
  </div>
  <section class="container flex flex-wrap justify-center items-center">
    {#each books as { img, title, description, autor, categoria, calificacion, cantidad_de_paginas, fecha_de_publicacion }}
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
          <div class="w-80 mx-5 py-5 px-3 sm:px-5 md:mx-0">
            <span
              class="p-1 text-lg rounded-lg border border-lime-400 text-lime-700 bg-lime-50"
            >
              {categoria}
            </span>
            <h1 class="text-3xl text-lime-600 mt-2 py-2 font-medium">
              {title}
            </h1>
            <p class="py-2">{description}</p>
            <h2 class="text-xl py-2 font-medium">Autor</h2>
            <span>{autor}</span>
            <h2 class="text-xl py-2 font-medium">Calificación</h2>
            <span>{calificacion}</span>
            <h2 class="text-xl py-2 font-medium">Cantidad de paginas</h2>
            <span>{cantidad_de_paginas}</span>
            <h2 class="text-xl py-2 font-medium">Fecha de publicación</h2>
            <span>{fecha_de_publicacion}</span>
          </div>
        </figcation>
      </figure>
    {/each}
  </section>
</section>
