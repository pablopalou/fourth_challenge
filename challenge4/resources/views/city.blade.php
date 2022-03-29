@include('links')
@include('navbar')

<div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Cities</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all the cities in Despegar!</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto" data-modal-toggle="defaultModal">Add city</button>
        <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <!-- Modal header -->
                  <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                      <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                          Add a new city
                      </h3>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                      </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-6 space-y-6">
                    
                      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <input type="name" name="name" id="name" class="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                      </div>
                      
                  </div>
                  <!-- Modal footer -->
                  <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                      <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Accept</button>
                      <button data-modal-toggle="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
  </div>
    <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">ID</th>
                <th scope="col" class=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Name</th>
                <th scope="col" class=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Incoming Flights</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Outgoing Flights</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    {{-- <span class="sr-only">Edit</span> --}}
                </th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
            <tr>
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Lindsay Walton</td>
                <td class=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell">Front-end Developer</td>
                <td class=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell">lindsay.walton@example.com</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
                <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only"></span></a>
                <a href="#" class="text-indigo-600 hover:text-indigo-900 ml-4">Remove<span class="sr-only"></span></a>
                </td>
            </tr>
    
            <!-- More people... -->
        </tbody>
      </table>
    </div>
</div>


{{-- INPUT PARA EL POP UP DE ADD CITY --}}
{{-- <div>
  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <input type="email" name="email" id="email" class="block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error">
    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <!-- Heroicon name: solid/exclamation-circle -->
      <svg class="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
  <p class="mt-2 text-sm text-red-600" id="email-error">Your password must be less than 4 characters.</p>
</div> --}}