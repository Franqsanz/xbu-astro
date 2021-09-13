<script>
</script>

<section class="flex justify-center my-10">
  <form class="font-sans w-auto flex flex-col m-0 bg-white p-3 rounded-lg">
    <div class="flex flex-col md:flex-row">
      <div class="w-80 flex flex-col p-2 mb-4">
        <!-- <label for="" class="pt-3 mx-3 text-xl"
          >Subir una imagen del libro</label
        >
        <input
          class="m-2 rounded-md p-3 border-2 border-gray-400 focus:border-green-500 focus:outline-none focus:right-1 focus:ring-green-500"
          type="file"
        /> -->
        <label for="" class="pt-3 mx-3 text-xl">Titulo del libro</label>
        <input
          class="m-2 rounded-md p-3 border-2 border-gray-400 focus:border-green-500 focus:outline-none focus:right-1 focus:ring-green-500"
          type="text"
          placeholder="Titulo del libro"
        />
        <label for="" class="pt-3 mx-3 text-xl">Descripción</label>
        <textarea
          class="m-2 rounded-md p-3 border-2 border-gray-400 focus:border-green-500 focus:outline-none focus:right-1 focus:ring-green-500"
          cols="30"
          rows="5"
          placeholder="Descripción"
        />
        <label for="" class="pt-3 mx-3 text-xl">Género literario</label>
        <select
          class="m-2 rounded-md p-3 border-2 border-gray-400 focus:border-green-500 focus:outline-none focus:right-1 focus:ring-green-500"
        >
          <option value="">Terror</option>
          <option value="">Romance</option>
          <option value="">Ciencia Ficcion</option>
          <option value="">Triller</option>
          <option value="">Fantastica</option>
          <option value="">Policiales</option>
        </select>
      </div>
      <div class="flex flex-col p-2 mb-4">
        <label for="" class="pt-3 mx-3 text-xl">Autor</label>
        <input
          class="m-2 rounded-md p-3 border-2 border-gray-400 focus:border-green-500 focus:outline-none focus:right-1 focus:ring-green-500"
          type="text"
          placeholder="Autor"
        />
        <label for="" class="pt-3 mx-3 text-xl">Tu calificación</label>
        <input
          class="m-2 rounded-md p-3 border-2 border-gray-400 focus:border-green-500 focus:outline-none focus:right-1 focus:ring-green-500"
          type="range"
        />
        <label for="" class="pt-3 mx-3 text-xl">Cantidad de paginas</label>
        <input
          class="m-2 rounded-md p-3 border-2 border-gray-400 focus:border-green-500 focus:outline-none focus:right-1 focus:ring-green-500"
          type="number"
          placeholder="Cantidad de paginas"
        />
        <label for="" class="pt-3 mx-3 text-xl">Fecha de publicación</label>
        <input
          class="m-2 rounded-md p-3 border-2 border-gray-400 focus:border-green-500 focus:outline-none focus:right-1 focus:ring-green-500"
          type="date"
        />
        <label for="" class="pt-3 mx-3 text-xl"
          >Subir una imagen del libro</label
        >
        <div
          class="mt-4 flex justify-center p-3 border-2 border-gray-300 border-dashed rounded-md"
        >
          <div class="space-y-1 text-center">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer bg-white rounded-md font-medium text-lime-500 hover:text-lime-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">PNG, JPG up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="flex justify-end mt-1 mx-4">
      <button
        class="w-28 my-2 rounded-md p-3 bg-lime-400 uppercase font-semibold hover:bg-lime-500"
        type="submit"
      >
        Agregar
      </button>
    </div>
  </form>
</section>
