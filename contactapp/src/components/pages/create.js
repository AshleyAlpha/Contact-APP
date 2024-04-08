import React from 'react'


const Create = () => {
  return (
    <div>
        
        <div class="max-w-md mx-auto bg-white rounded-md p-6">
        <h1 class="text-2xl mb-4">Add Contact</h1>

        
        <form action="#" method="POST" enctype="multipart/form-data">
            
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
                <input type="text" id="name" name="name" class="form-input" placeholder="Enter Name" required/>
            </div>

            
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="Enter Email" required/>
            </div>

            
            <div class="mb-4">
                <label for="phone" class="block text-gray-700 font-bold mb-2">Phone Number:</label>
                <input type="tel" id="phone" name="phone" class="form-input" placeholder="Enter Phone Number" required/>
            </div>

            
            <div class="mb-4">
                <label for="picture" class="block text-gray-700 font-bold mb-2">Picture:</label>
                <input type="file" id="picture" name="picture" accept="image/*" class="form-input" required/>
            </div>

            
            <div class="mt-6">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create
                </button>
            </div>
        </form>
    </div>

    </div>
  )
}

export default Create