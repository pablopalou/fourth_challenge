import React from 'react';

// ERROR: Interface declarations solo sirven en un archivo de Typescript
// interface ComboBoxProps {
//     airlines? ;
//     comboBoxName: String;
//     cities? ;
// }

const ComboBox = (props) => {
    const airlines = props.airlines;
    const cities = props.cities;
    const comboBoxName = props.name;
    // console.log(comboBoxName);
    return (
        <div>
            <label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
                {props.name}
            </label>
            <select
                id={props.name}
                name={props.name}
                value={props.selectedValue}
                onChange={(event) => props.onChangeDo(event)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="SELECT" key='SELECT'>SELECT</option>
                {airlines !== undefined  && 
                    airlines.map(airline => (
                        <option value={airline.id} key={airline.id}>{airline.name}</option>
                    ))
                }
                {cities !== undefined && 
                    props.cities.map(city => (
                        <option value={city.id} key={`${comboBoxName}-${city.id}`}>{city.name}</option>
                    ))
                }
                {/* {comboBoxName == "origin" && 
                    props.origins.map(city => (
                        <option value={city.id} key={`origin-${city.id}`}>{city.name}</option>
                    ))
                }
                {comboBoxName == "destination" && 
                    props.destinations.map(city => (
                        <option value={city.id} key={`destination-${city.id}`}>{city.name}</option>
                    ))
                } */}
            </select>
        </div> 
    );
}

export default ComboBox;