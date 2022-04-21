import React from 'react';

// ERROR: Interface declarations solo sirven en un archivo de Typescript
// interface ComboBox{
//     airlines? ;
//     comboBoxName: String;
//     cities? ;
// }

const ComboBox = ({name, selectedValue, airlines, cities, comboBoxName, onChangeDo}) => {
    // console.log("Desde combobox: ");
    // console.log(selectedValue);
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {name}
            </label>
            <select
                id={name}
                name={name}
                value={selectedValue}
                onChange={(event) => onChangeDo(event)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="SELECT" key='SELECT'>SELECT</option>
                {airlines !== undefined  && 
                    airlines.map(airline => (
                        <option value={airline.id} key={airline.id}>{airline.name}</option>
                    ))
                }
                {cities !== undefined && 
                    cities.map(city => (
                        <option value={city.id} key={`${comboBoxName}-${city.id}`}>{city.name}</option>
                    ))
                }
            </select>
        </div> 
    );
}

export default ComboBox;