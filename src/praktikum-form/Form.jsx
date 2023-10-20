import { useState, Component } from 'react'

function App() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}))
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
        alert(`Nama : ${inputs.nama}\nNo. Pekerja : ${inputs.no_pekerja}\nHP : ${inputs.no_hp}\nRumah : ${inputs.no_rumah}\nKantor : ${inputs.no_kantor}\nUnit : ${inputs.unit}\nDepartement : ${inputs.departement}\nTTL : ${inputs.ttl}\nAlamat : ${inputs.alamat}`)
    }

    return (
        <div className="form-wrapper h-screen flex items-center justify-center">
            <form class="w-full max-w-lg shadow-2xl p-5" onSubmit={HandleSubmit}>
                <h2 className="mb-7 text-2xl text-center font-bolds">FORMULIR PENDAFTARAN KEANGGOTAAN SP-FKPPM</h2>

                <div class="flex flex-wrap -mx-3 mb-2">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Nama
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="etc: alfa" name="nama" onChange={handleChange}/>
                        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            No Pekerja
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="etc: 021831281" name="no_pekerja"  onChange={handleChange}/>
                    </div>
                </div>

                {/* container  */}

                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Hp
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="No HP" name="no_hp" onChange={handleChange}/>
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Rumah
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="No Rumah" name="no_rumah"  onChange={handleChange}/>
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Kantor
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="No Kantor" name="no_kantor"  onChange={handleChange}/>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Unit
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Unit" name="unit" onChange={handleChange}/>
                    </div>

                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Departement
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Departement" name="departement"  onChange={handleChange}/>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Tempat, tanggal lahir
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="TTL" name="ttl" onChange={handleChange}/>
                        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                    </div>
                    
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Alamat
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Alamat" name="alamat"  onChange={handleChange}/>
                    </div>
                </div>

                <div className="button-group">
                    <button type="submit" className="bg-purple-800 text-white px-4 rounded">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default App