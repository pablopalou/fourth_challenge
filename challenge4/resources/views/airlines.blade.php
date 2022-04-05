<!-- provide the csrf token -->
{{-- <meta name="csrf-token" content="{{ csrf_token() }}" /> --}}
<x-index>
    @section('content')

      <!-- Modal  FOR ADDING airline-->
<div class="modal fade" id="addairlineModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add a new airline</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul id="saveform_errList"></ul> 
          
          <div class="form-group mb-3">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input type="name" name="name" id="name" class="name block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
            </div>
            <label for="description" class="block text-sm font-medium text-gray-700 mt-2">Description</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <textarea rows="4" cols="4" name="description" id="description" class="description block w-full pr-10 text-red-900 focus:outline-none sm:text-sm rounded-md"> </textarea>
            </div>
            <label for="cities" class="block text-sm font-medium text-gray-700 mt-2">Cities</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <select name="cities[]" id="cities" multiple>
                    @foreach ($cities as $city)
                        <option value="{{$city->id}}">{{$city->name}}</option>
                    @endforeach
                </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button name="boton" value="" onclick="addAirline()" id="addNewairline" data-db-dismiss="modal" type="submit" class="add_airline text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Accept</button>
          <button type="button" data-dismiss="modal" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button> 
                    
        </div>
      </div>
    </div>
  </div>
  
  {{-- EDIT airline MMODAL --}}
  <div class="modal fade" id="editairlineModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit an airline</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul id="updateform_errList"></ul> 
          <input type="hidden" id="edit_airline_id">
          <div class="form-group mb-3">
            <label for="name2" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input type="name2" name="name2" id="editName" class="name2 block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md">
            </div>
            <label for="editDescription" class="block text-sm font-medium text-gray-700 mt-2">Description</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <textarea rows="4" cols="4" name="editDescription" id="editDescription" class="editDescription block w-full pr-10 text-red-900 focus:outline-none sm:text-sm rounded-md"> </textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button name="boton" value="" onclick="updateAirline()" id="editairline" data-db-dismiss="modal" type="submit" class="update_airline text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
          <button type="button" data-dismiss="modal" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button> 
        </div>
      </div>
    </div>
  </div>
  
  
  {{-- DELETE airline MMODAL --}}
  <div class="modal fade" id="deleteairlineModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete airline</h5>
          <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          {{-- <ul id="updateform_errList"></ul>  --}}
          <input type="hidden" id="delete_airline_id">
          <h4>Are you sure you want to delete this airline?</h4>
        </div>
        <div class="modal-footer">
          <button name="boton" value="" onclick="deleteAirline()" id="deleteairline" data-db-dismiss="modal" type="submit" class="deletear_airline text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
          <button type="button" data-dismiss="modal" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button> 
        </div>
      </div>
    </div>
  </div>
  
  
      <div class="px-4 sm:px-6 lg:px-8 m-3">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900">Airlines</h1>
            <p class="mt-2 text-sm text-gray-700">A list of all the airlines in Despegar!</p>
          </div>
  
          <div id="success-message">
  
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#addairlineModal">
              Add airline
            </button>
          </div>
        </div>
      </div>
        
      <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opaairline-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300" id="myTable">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">ID</th>
                    <th scope="col" class=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Name</th>
                    <th scope="col" class=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">Description</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Number of Flights</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        {{-- <span class="sr-only">Edit</span> --}}
                    </th>
                </tr>
            </thead>
            <tbody id="airlinesTable" class="divide-y divide-gray-200 bg-white">
            </tbody>
          </table>
          <div class="m-auto">
            {{ $airlines->links() }}
          </div>
          
        </div>
    </div>
    @endsection
  
    @section('scripts')
      <script>
          async function addAirline(){
            let data = {
                'name' : $('.name').val(),
                'description' : $('.description').val(),
                'selectedCities' : $('#cities').val()
            };
            const response = await fetch('/airlines',{
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            var info = await response.json();
            name.value = "";
            document.getElementById('description').value = "";

            // console.log(info);
            if (info.status == 400){
                $('#saveform_errList').html("");
                $('#saveform_errList').addClass('alert alert-danger');

                $.each(info.errors, function(key, err_val){
                    $('#saveform_errList').append('<li>'+err_val+'</li>');
                });
            } else {
                $('#saveform_errList').html("");
                $('#success-message').addClass('alert alert-success');
                $('#success-message').text(info.message);
                $('#addairlineModal').modal('hide');
                $('#addairlineModal').find('input').val('');
            }

            addToTable(info.airline);
          }


          function addToTable(item){
              var row = '<tr>\
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.id + '</td>\
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.name + '</td>\
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.description + '</td>\
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' + 0 + '</td>\
                        <td> <button type="button" value="'+item.id+'" class="btn btn-outline-primary btn-sm edit_airline"> Edit </button> </td>\
                        <td> <button type="button" value="'+item.id+'" class="btn btn-outline-danger btn-sm delete_airline"> Remove </button> </td>\
                      </tr>'
            const table = document.getElementById('airlinesTable').innerHTML += row;
          }

          async function deleteAirline(){
            //llamar al controlador
            //eliminar de la tabla la fila seleccionada
            const response = await fetch("/deleteairline/"+airline_id,{
                method: 'DELETE',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Content-Type': 'application/json'
                }
            });
            var info = await response.json();
            $('#success-message').addClass('alert alert-success');
            $('#success-message').text(info.message);
            $('#deleteairlineModal').modal('hide');

            var table = document.getElementById("myTable");
            for (var i = 1, row; row = table.rows[i]; i++) {
                if (row.cells[0].innerText === airline_id) {
                    document.getElementsByTagName("tr")[i].remove();
                    break;
                }
            }
          }

          $(document).on('click', '.delete_airline', function(e){
            e.preventDefault();
            airline_id = $(this).val();
            $('#delete_airline_id').val(airline_id);
            $('#deleteairlineModal').modal('show');
          });
  

        $(document).ready(function(e) {
          var airline_id;
            fetchairlines();
          
          function fetchairlines(){
            $.ajax({
              type: "GET",
              url: "/fetch-airlines",
              dataType: "json",
              success: function (response){
                console.log(response);
                $('tbody').html("");
                $.each(response.airlines.data, function(key, item){
                    $('tbody').append('<tr>\
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.id + '</td>\
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.name + '</td>\
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.description + '</td>\
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">' +item.flights.length + '</td>\
                        <td> <button type="button" value="'+item.id+'" class="btn btn-outline-primary btn-sm edit_airline"> Edit </button> </td>\
                        <td> <button type="button" value="'+item.id+'" class="btn btn-outline-danger btn-sm delete_airline"> Remove </button> </td>\
                      </tr>');   
                });
              }
            });
          }
  
          
            
          });

          $(document).on('click', '.edit_airline', function(e){
            e.preventDefault();
            airline_id = $(this).val();
            $('#editairlineModal').modal('show');
            $.ajax({
              type: "GET",
              url: "/editairline/"+airline_id,
              success: function (response){
                $('#editName').val(response.airline.name);
                $('#editDescription').val(response.airline.description);
              } 
  
            });
          });
  
          async function updateAirline(){
            let data = {
                'id' : airline_id,
                'name' : $('.name2').val(),
                'description' : $('.editDescription').val()
            };

            const response = await fetch("/updateairline/"+airline_id,{
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            var info = await response.json();
            if (info.status === 400){
                $('#updateform_errList').html("");
                $('#updateform_errList').addClass('alert alert-danger');

                $.each(info.errors, function(key, err_val){
                $('#updateform_errList').append('<li>'+err_val+'</li>');
                });
                $('.update_student').text('Update');
            } else {
                $('#updateform_errList').html("");
                $('#success-message').addClass('alert alert-success');
                $('#success-message').text(info.message);
                $('#editairlineModal').find('input').val('');
                $('.update_student').text('Update');
                $('#editairlineModal').modal('hide');
                // aca tengo que editar esa aerolinea
                var table = document.getElementById("myTable");
                for (var i = 1, row; row = table.rows[i]; i++) {
                    if (row.cells[0].innerText === airline_id) {
                        // var tr = document.getElementsByTagName("tr")[i];
                        console.log($('#editName').val());
                        document.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].innerText = data.name;
                        document.getElementsByTagName("tr")[i].getElementsByTagName("td")[2].innerText = $('.editDescription').val();
                        break;
                    }
                }
            }
          }
  
          
  
       
        
      </script>
    @endsection
  
  </x-index>
  
  