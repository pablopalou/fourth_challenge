<!-- provide the csrf token -->
{{-- <meta name="csrf-token" content="{{ csrf_token() }}" /> --}}
<x-index>
  @section('content')

  <!-- Modal  FOR ADDING CITY-->
<div class="modal fade" id="addCityModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add a new city</h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul id="saveform_errList"></ul> 
        
        <div class="form-group mb-3">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input type="name" name="name" id="name" class="name block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button name="boton" value="" id="addNewCity" data-db-dismiss="modal" type="submit" class="add_city text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Accept</button>
        <button type="button" data-dismiss="modal" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> 
                  
      </div>
    </div>
  </div>
</div>

{{-- EDIT CITY MMODAL --}}
<div class="modal fade" id="editCityModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit a city</h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul id="updateform_errList"></ul> 
        <input type="hidden" id="edit_city_id">
        <div class="form-group mb-3">
          <label for="name2" class="block text-sm font-medium text-gray-700">Name</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input type="name2" name="name2" id="editName" class="name2 block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button name="boton" value="" id="editCity" data-db-dismiss="modal" type="submit" class="update_city text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        <button type="button" data-dismiss="modal" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button> 
      </div>
    </div>
  </div>
</div>


{{-- DELETE CITY MMODAL --}}
<div class="modal fade" id="deleteCityModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete city</h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {{-- <ul id="updateform_errList"></ul>  --}}
        <input type="hidden" id="delete_city_id">
        <h4>Are you sure you want to delete this city?</h4>
      </div>
      <div class="modal-footer">
        <button name="boton" value="" id="deleteCity" data-db-dismiss="modal" type="submit" class="deletear_city text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
        <button type="button" data-dismiss="modal" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button> 
      </div>
    </div>
  </div>
</div>


<!-- Button trigger modal -->
{{-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> --}}
    <div class="px-4 sm:px-6 lg:px-8 m-3">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-xl font-semibold text-gray-900">Cities</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all the cities in Despegar!</p>
        </div>

        <div id="success-message">

        </div>


        <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#addCityModal">
            Add city
          </button>
          {{-- <a href="#" data-bs-toggle="modal" data-bs-target="#addCityModal" class="btn btn-primary"> Add city</a> --}}
          {{-- <button type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto" >Add city</button> --}}
          {{-- <div id="addCityModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="modal-header flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Add a new city
                        </h3>
                        <button type="button" class="btn btn-close text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-db-dismiss="modal" aria-label="Close">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                    </div>
                    <div class="modal-body flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                      <ul id="saveform_errList">

                      </ul> 
                      
                      <div class="form-group mb-3">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <input type="name" name="name" id="name" class="name block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button name="boton" value="" id="addNewCity" data-db-dismiss="modal" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 add_city">Accept</button>
                      <button type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> 
                    {{-- data-modal-toggle="addCityModal"  --}}
                    {{-- </div>   
                </div>
            </div> 
          </div>  --}}
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
            {{-- tmb puedo acceder con flechitas --}}
              {{-- @foreach ($cities as $city)
                <tr data-id="{{ $city->id }}">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"> {{ $city['id'] }} </td>                  
                  <td class=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"> {{ $city['name'] }} </td>
                  <td class=" whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"> {{ $city['flights_outgoing_count']}}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ $city['flights_incoming_count'] }}</td>
                  <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button type="button" value="" class="btn btn-outline-primary btn-sm edit_city">Edit</button>
                  </td>
                  <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button type="button" value="" class="btn btn-outline-danger btn-sm delete_city">Remove</button>
                  </td>
                </tr>
              @endforeach --}}
              <!-- More people... -->
          </tbody>
        </table>
        <div class="m-auto">
          {{ $cities->links() }}
        </div>
        
      </div>
  </div>
  @endsection

  @section('scripts')
    <script>
      $(document).ready(function(e) {
        var city_id;
        fetchCities();

        // <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.flights_outgoing_count + '</td>\
        //           <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.flights_outgoing_count + '</td>\
        
        function fetchCities(){
          $.ajax({
            type: "GET",
            url: "/fetch-cities",
            dataType: "json",
            success: function (response){
              $('tbody').html("");
              $.each(response.cities.data, function(key, item){
                  $('tbody').append('<tr>\
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.id + '</td>\
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.name + '</td>\
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.flights_incoming.length + '</td>\
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.flights_outgoing.length + '</td>\
                      <td> <button type="button" value="'+item.id+'" class="btn btn-outline-primary btn-sm edit_city"> Edit </button> </td>\
                      <td> <button type="button" value="'+item.id+'" class="btn btn-outline-danger btn-sm delete_city"> Remove </button> </td>\
                    </tr>');   
              });
            }
          });
        }

        $(document).on('click', '.delete_city', function(e){
          e.preventDefault();
          city_id = $(this).val();
          $('#delete_city_id').val(city_id);
          $('#deleteCityModal').modal('show');
        });

        $(document).on('click', '.deletear_city', function(e){
          e.preventDefault();
          city_id = $('#delete_city_id').val();
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });

          $.ajax({
            type: "DELETE",
            url: "/deleteCity/"+city_id,
            success: function (response){
              console.log(response);
              $('#success-message').addClass('alert alert-success');
              $('#success-message').text(response.message);
              $('#deleteCityModal').modal('hide');
              fetchCities();
            }
          });
          
        });

        $(document).on('click', '.add_city', function(e){
          e.preventDefault();
          var data = {
            'name' : $('.name').val()
          }

          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });

          $.ajax({
            type: "POST",
            url: "/ciudades",
            data: data,
            dataType: "json",
            success: function (response){
              if (response.status == 400){
                $('#saveform_errList').html("");
                $('#saveform_errList').addClass('alert alert-danger');

                $.each(response.errors, function(key, err_val){
                  $('#saveform_errList').append('<li>'+err_val+'</li>');
                });
              } else {
                $('#saveform_errList').html("");
                $('#success-message').addClass('alert alert-success');
                $('#success-message').text(response.message);
                $('#addCityModal').modal('hide');
                $('#addCityModal').find('input').val('');
                fetchCities();
              }
            } 

          });
        });
        
        $(document).on('click', '.edit_city', function(e){
          e.preventDefault();
          city_id = $(this).val();
          $('#editCityModal').modal('show');
          $.ajax({
            type: "GET",
            url: "/editCity/"+city_id,
            success: function (response){
              $('#editName').val(response.city.name);
            } 

          });
        });

        

        $(document).on('click', '.update_city', function(e){
          e.preventDefault();
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              }
          });

          var data = JSON.stringify({
            'id' : city_id,
            'name' : $('.name2').val()
          });

          $.ajax({
            type: "POST",
            url: "/updateCity/"+city_id,
            contentType: "application/json; charset=utf-8",
            data: data,
            dataType: "json",
            success: function (response){
              if (response.status === 400){
                $('#updateform_errList').html("");
                $('#updateform_errList').addClass('alert alert-danger');

                $.each(response.errors, function(key, err_val){
                  $('#updateform_errList').append('<li>'+err_val+'</li>');
                });
                $('.update_student').text('Update');
              } else {
                $('#updateform_errList').html("");
                $('#success-message').addClass('alert alert-success');
                $('#success-message').text(response.message);
                $('#editCityModal').find('input').val('');
                $('.update_student').text('Update');
                $('#editCityModal').modal('hide');
                fetchCities();
              }
            } 

          });
        });

      });
      
    </script>
  @endsection

</x-index>

