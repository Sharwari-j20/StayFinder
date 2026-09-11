/* =====================================================
   STAYFINDER - MAIN JAVASCRIPT
   ===================================================== */


/* =====================================================
   GOOGLE ANALYTICS EVENT TRACKING
   ===================================================== */

function trackEvent(eventName, parameters = {}) {

    if (typeof gtag === "function") {

        gtag("event", eventName, parameters);

    }

    console.log(
        "GA4 Event:",
        eventName,
        parameters
    );
}



/* =====================================================
   HOTEL DATA
   ===================================================== */

const hotels = [

    {
        id: 1,
        name: "The Grand Palace",
        location: "Mumbai, Maharashtra",
        rating: 4.8,
        price: 6500,
        type: "Luxury",

        image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",

        amenities: [
            "Swimming Pool",
            "Spa",
            "Breakfast"
        ],

        description:
        "A luxurious city hotel offering elegant rooms, excellent dining and premium facilities."
    },


    {
        id: 2,
        name: "Ocean Pearl Resort",
        location: "Goa, India",
        rating: 4.9,
        price: 7200,
        type: "Resort",

        image:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=85",

        amenities: [
            "Beach Access",
            "Swimming Pool",
            "Restaurant"
        ],

        description:
        "A beautiful beach resort perfect for relaxing holidays and unforgettable sunsets."
    },


    {
        id: 3,
        name: "Mountain View Retreat",
        location: "Manali, Himachal Pradesh",
        rating: 4.7,
        price: 4800,
        type: "Resort",

        image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85",

        amenities: [
            "Mountain View",
            "Restaurant",
            "Free Wi-Fi"
        ],

        description:
        "A peaceful mountain retreat surrounded by beautiful views and fresh mountain air."
    },


    {
        id: 4,
        name: "Urban Nest",
        location: "Pune, Maharashtra",
        rating: 4.6,
        price: 2800,
        type: "Boutique",

        image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85",

        amenities: [
            "Free Wi-Fi",
            "Breakfast",
            "Parking"
        ],

        description:
        "A modern boutique stay designed for comfortable and affordable city trips."
    },


    {
        id: 5,
        name: "Royal Heritage",
        location: "Jaipur, Rajasthan",
        rating: 4.8,
        price: 5600,
        type: "Luxury",

        image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=85",

        amenities: [
            "Restaurant",
            "Pool",
            "Spa"
        ],

        description:
        "Experience traditional Indian elegance with modern luxury in the heart of Jaipur."
    },


    {
        id: 6,
        name: "Lakeview Suites",
        location: "Udaipur, Rajasthan",
        rating: 4.9,
        price: 5900,
        type: "Luxury",

        image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85",

        amenities: [
            "Lake View",
            "Restaurant",
            "Swimming Pool"
        ],

        description:
        "Elegant suites offering peaceful lake views and a premium stay experience."
    },


    {
        id: 7,
        name: "Cityline Business Hotel",
        location: "Bengaluru, Karnataka",
        rating: 4.5,
        price: 3500,
        type: "Business",

        image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=85",

        amenities: [
            "Business Center",
            "Free Wi-Fi",
            "Breakfast"
        ],

        description:
        "A comfortable business hotel with modern facilities for work and travel."
    },


    {
        id: 8,
        name: "Palm Garden Resort",
        location: "Kerala, India",
        rating: 4.7,
        price: 5100,
        type: "Resort",

        image:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=85",

        amenities: [
            "Garden",
            "Pool",
            "Restaurant"
        ],

        description:
        "A relaxing tropical resort surrounded by greenery and peaceful surroundings."
    }

];



/* =====================================================
   RENDER HOTEL CARDS
   ===================================================== */

function renderHotels(hotelList, containerId) {

    const container =
        document.getElementById(containerId);

    if (!container) return;


    container.innerHTML = "";


    if (hotelList.length === 0) {

        container.innerHTML = `

            <div class="col-12 text-center py-5">

                <h4>No hotels found</h4>

                <p class="text-secondary">
                    Try changing your filters.
                </p>

            </div>

        `;

        return;
    }


    hotelList.forEach(hotel => {

        const card = document.createElement("div");

        card.className =
            "col-md-6 col-lg-4 mb-4";


        card.innerHTML = `

            <div class="hotel-card h-100">

                <img
                    src="${hotel.image}"
                    class="hotel-card-image"
                    alt="${hotel.name}"
                >


                <div class="p-3">

                    <div class="d-flex
                                justify-content-between
                                align-items-center">

                        <span class="badge bg-light text-dark">
                            ${hotel.type}
                        </span>

                        <span class="rating">
                            ⭐ ${hotel.rating}
                        </span>

                    </div>


                    <h4 class="mt-3">
                        ${hotel.name}
                    </h4>


                    <p class="text-secondary">
                        📍 ${hotel.location}
                    </p>


                    <p class="small text-secondary">
                        ${hotel.description}
                    </p>


                    <div class="d-flex
                                justify-content-between
                                align-items-center
                                mt-3">

                        <div>

                            <strong class="fs-5">
                                ₹${hotel.price.toLocaleString("en-IN")}
                            </strong>

                            <small class="text-secondary">
                                / night
                            </small>

                        </div>


                        <button
                            class="btn btn-dark btn-sm"
                            onclick="startBooking(${hotel.id})">

                            Book Now

                        </button>

                    </div>


                    <button
                        class="btn btn-outline-dark btn-sm w-100 mt-3"
                        onclick="viewHotel(${hotel.id})">

                        View Details

                    </button>

                </div>

            </div>

        `;


        container.appendChild(card);

    });

}



/* =====================================================
   VIEW HOTEL
   ===================================================== */

function viewHotel(id) {

    const hotel =
        hotels.find(h => h.id === id);

    if (!hotel) return;


    localStorage.setItem(
        "selectedHotel",
        JSON.stringify(hotel)
    );


    trackEvent(
        "hotel_view",
        {
            hotel_id: hotel.id,
            hotel_name: hotel.name,
            hotel_type: hotel.type,
            price: hotel.price
        }
    );


    window.location.href =
        "booking.html";
}



/* =====================================================
   START BOOKING
   ===================================================== */

function startBooking(id) {

    const hotel =
        hotels.find(h => h.id === id);

    if (!hotel) return;


    localStorage.setItem(
        "selectedHotel",
        JSON.stringify(hotel)
    );


    trackEvent(
        "book_now_click",
        {
            hotel_id: hotel.id,
            hotel_name: hotel.name,
            price: hotel.price
        }
    );


    window.location.href =
        "booking.html";
}



/* =====================================================
   CALCULATE NUMBER OF NIGHTS
   ===================================================== */

function calculateNights(
    checkIn,
    checkOut
) {

    const start =
        new Date(checkIn);

    const end =
        new Date(checkOut);


    const difference =
        end - start;


    return Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
    );
}



/* =====================================================
   GET SEARCH INFORMATION
   ===================================================== */

function getStoredSearch() {

    const data =
        localStorage.getItem(
            "stayfinderSearch"
        );


    if (!data) return null;


    try {

        return JSON.parse(data);

    } catch {

        return null;

    }

}



/* =====================================================
   FAVORITE HOTEL
   ===================================================== */

function toggleFavorite(id, button) {

    let favorites =
        JSON.parse(
            localStorage.getItem(
                "favoriteHotels"
            )
        ) || [];


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                hotelId => hotelId !== id
            );


        if (button) {

            button.innerText =
                "♡ Favorite";

        }


        trackEvent(
            "remove_favorite",
            {
                hotel_id: id
            }
        );

    }

    else {

        favorites.push(id);


        if (button) {

            button.innerText =
                "♥ Favorited";

        }


        trackEvent(
            "add_favorite",
            {
                hotel_id: id
            }
        );

    }


    localStorage.setItem(
        "favoriteHotels",
        JSON.stringify(favorites)
    );

}



/* =====================================================
   PAGE VIEW TRACKING
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        trackEvent(
            "custom_page_view",
            {
                page_title:
                    document.title,

                page_path:
                    window.location.pathname
            }
        );

    }
);