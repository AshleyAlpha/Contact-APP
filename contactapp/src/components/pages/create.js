import React from 'react'


const Create = () => {
  return (
    <div>
        
        <div class="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md max-w-md">
  <h2 class="text-2xl font-bold mb-6">Add Contact</h2>
  <form action="#" method="post" enctype="multipart/form-data">
    <div class="mb-4">
      <label for="name" class="block font-semibold mb-1">Name:</label>
      <input type="text" id="name" name="name" class="w-full p-2 border rounded-md" required/>
    </div>
    <div class="mb-4">
      <label for="email" class="block font-semibold mb-1">Email:</label>
      <input type="email" id="email" name="email" class="w-full p-2 border rounded-md" required/>
    </div>
    <div class="mb-4">
      <label for="number" class="block font-semibold mb-1">Number:</label>
      <input type="number" id="number" name="number" class="w-full p-2 border rounded-md" required/>
    </div>
    <div class="mb-4">
      <label for="picture" class="block font-semibold mb-1">Upload Picture:</label>
      <input type="file" id="picture" name="picture" class="w-full p-2 border rounded-md" accept="image/*" required/>
    </div>
    {/* <input type="submit" value="Submit" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"/> */}
  </form>
  <button class="bg-sky-800 text-white font-semibold py-2 px-4 hover:bg-cyan-700 cursor-pointer mt-4 w-full p-2 border rounded-md">Create</button>
</div>

    </div>
  )
}

export default Create