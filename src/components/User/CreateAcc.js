import React from 'react';
import Link from '../Links';
const CreateAccount = () => {
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "The Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia ", "Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Democratic Republic of the Congo", "Republic of the Costa Rica", "Côte dIvoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "The Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Sudan, South", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
    const cities = ["Abidjan", "Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Adelaide", "Agadir", "Agra", "Ahmedabad", "Albuquerque", "Aleppo", "Alexandria", "Algiers", "Alicante", "Almaty", "Amman", "Amsterdam", "Anchorage", "Andorra la Vella", "Ankara", "Antananarivo", "Antigua", "Apia", "Ashgabat", "Asmara", "Astana", "Asunción", "Athens", "Atlanta", "Auckland", "Austin", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangalore", "Bangkok", "Bangui", "Banjul", "Barcelona", "Basseterre", "Bamako", "Beijing", "Beirut", "Belgrade", "Belize City", "Berlin", "Bern", "Bishkek", "Bissau", "Bogota", "Brasília", "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura", "Cairo", "Calgary", "Canberra", "Cape Town", "Caracas", "Cardiff", "Castries", "Chennai", "Chicago", "Chisinau", "Christchurch", "Cochabamba", "Colombo", "Conakry", "Copenhagen", "Córdoba", "Dakar", "Dallas", "Dar es Salaam", "Delhi", "Dhaka", "Dili", "Djibouti City", "Dodoma", "Doha", "Douala", "Dubai", "Dublin", "Dushanbe", "Edinburgh", "Edmonton", "El Aaiún", "Freetown", "Funafuti", "Gaborone", "George Town", "Georgetown", "Guatemala City", "Hague", "Hamburg", "Hamilton", "Hanoi", "Harare", "Havana", "Helsinki", "Hobart", "Ho Chi Minh City", "Hong Kong", "Honolulu", "Islamabad", "Istanbul", "Jakarta", "Jamestown", "Jerusalem", "Johannesburg", "Kabul", "Kampala", "Karachi", "Kathmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur", "Kuwait City", "La Paz", "Lagos", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lomé", "London", "Los Angeles", "Luanda", "Lusaka", "Luxembourg City", "Macau", "Madrid", "Majuro", "Malabo", "Male", "Managua", "Manama", "Manila", "Maputo", "Maseru", "Mbabane", "Melbourne", "Mexico City", "Miami", "Milan", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Montréal", "Moscow", "Mumbai", "Munich", "Muscat", "Nairobi", "Nassau", "New Delhi", "New Orleans", "New York City", "Niamey", "Nicosia", "Nouakchott", "Nukuʻalofa", "Osaka", "Oslo", "Ottawa", "Ouagadougou", "Pago Pago", "Palikir", "Panama City", "Paramaribo", "Paris", "Perth", "Phnom Penh", "Podgorica", "Port Louis", "Port Moresby", "Port of Spain", "Port-au-Prince", "Porto-Novo", "Prague", "Praia", "Pretoria", "Pristina", "Pyongyang", "Quito", "Rabat", "Reykjavik", "Riga", "Riyadh", "Road Town", "Rome", "Roseau", "Saint George's", "Saint John's", "Saint-Denis", "Saint-Pierre", "Salvador", "Sana'a", "Santiago", "Santo Domingo", "São Tomé", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "St. George's", "St. John's", "Stockholm", "Suva", "Sydney", "Taipei", "Tallinn", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Tel Aviv", "Thimphu", "Tirana", "Tokyo", "Tripoli", "Tunis", "Ulaanbaatar", "Vaduz", "Valletta", "Vatican City", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw", "Washington", "DC", "Wellington", "Windhoek", "Yaoundé", "Yerevan", "Zagreb", "Zürich"]; // Replace with your own city options

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Create Account</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        E-mail Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
                        Country
                    </label>
                    <select
                        id="country"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    >
                        <option value="">Please select your country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                        City
                    </label>
                    <select
                        id="city"
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    >
                        <option value="">Please select your city</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        minLength={6}
                        className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-purple-500"
                    />
                </div>
                <Link
                    key="CREATE-ACC"
                    to="/"
                    className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600"
                >
                    CREATE ACCOUNT
                </Link>
                <p className="text-blue-500 mt-4">
                    Already have an account?{' '}
                    <Link
                        key="LOGIN"
                        to="/Login"
                        className="font-bold"
                    >
                        LOGIN
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CreateAccount;

