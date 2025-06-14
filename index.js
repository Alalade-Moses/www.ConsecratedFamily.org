document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }



    // // Setup countdown timer for June 6 at 5:00 PM
    // function getEventDate() {
    //     const now = new Date();
    //     const year = now.getFullYear();
    //     let eventDate = new Date(year, 5, 6, 17, 0, 0); // June is month 5

    //     // If current time is already past June 6 at 5:00 PM, count down to next year
    //     if (now > eventDate) {
    //         eventDate = new Date(year + 1, 5, 6, 17, 0, 0);
    //     }

    //     return eventDate;
    // }

    // let countdownInterval;

    // function updateCountdown() {
    //     const targetDate = getEventDate();
    //     const now = new Date();
    //     const difference = targetDate - now;

    //     if (difference <= 0) {
    //         document.getElementById('days').textContent = 0;
    //         document.getElementById('hours').textContent = 0;
    //         document.getElementById('minutes').textContent = 0;
    //         document.getElementById('seconds').textContent = 0;

    //         // Stop the countdown when time is up
    //         clearInterval(countdownInterval);
    //         return;
    //     }

    //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    //     const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //     document.getElementById('days').textContent = days;
    //     document.getElementById('hours').textContent = hours;
    //     document.getElementById('minutes').textContent = minutes;
    //     document.getElementById('seconds').textContent = seconds;
    // }

    // // Start and store the interval
    // countdownInterval = setInterval(updateCountdown, 1000);
    // updateCountdown(); // Initial call






    // Populate events (sample data)
    const events = [{
            id: 1,
            title: "Night of Hymns",
            description: "Join us for a special evening of praise and classical music to uplift your spirit.",
            date: "October 23",
            time: "4:00 PM - 8:00 PM",
            location: " Lagos Ibadan express way,<br> Olopometa koloko Oju-odo, <br> behind Ilupeju hall,  Ibadan",
            image: "IMG/musical-instruments-background-wallpaper-abstract-music-hd-banner-292193248.jpg"
        },
        {
            id: 2,
            title: "Evangelical Invasion",
            description: "A One Week programme that is focused on village evangelical outreach .",
            date: "December 18-23",
            time: "Will be Communicated",
            location: "Village Community",
            image: "IMG/african-american-male-friends-standing-park-discussing-bible_181624-21220.jpg"
        },
        {
            id: 3,
            title: "Bible Study",
            description: "Weekly gathering to study the scripture and grow deeper in understanding.",
            date: "Every Wednessday",
            time: "5:00 PM - 7:30 PM",
            location: "Ifelajulo line 3, behind <br> Zumurat secondary School,<br>olorunsogo Ibadan",
            image: "IMG/download.jpg"
        },
        {
            id: 4,
            title: "Silent Labourers Team(SLT)",
            description: "A meeting that equip us to become secret laborers and intercessors",
            date: "Every Last sunday of the Month",
            time: "3:00 PM - 6:00 PM",
            location: "Lagos Ibadan express way,<br> Olopometa koloko Oju-odo, <br> behind Ilupeju hall,  Ibadan",
            image: "IMG/SLT.jpg"
        }
    ];

    // Render events
    const eventsContainer = document.getElementById('events-con-tainer');
    if (eventsContainer) {
        eventsContainer.innerHTML = ''; // Clear loading state

        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'bg-white rounded-lg shadow-md overflow-hidden';
            eventCard.innerHTML = `
          <img src="${event.image}" alt="${event.title}" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">${event.title}</h3>
            <div class="flex items-center text-gray-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                <line x1="16" x2="16" y1="2" y2="6"></line>
                <line x1="8" x2="8" y1="2" y2="6"></line>
                <line x1="3" x2="21" y1="10" y2="10"></line>
              </svg>
              ${event.date}
            </div>
            <div class="flex items-center text-gray-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              ${event.time}
            </div>
            <div class="flex items-center text-gray-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              ${event.location}
            </div>
            <p class="text-gray-600 mb-4">${event.description}</p>
           
          </div>
        `;
            eventsContainer.appendChild(eventCard);
        });
    }





    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});
// scroll

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("hidden", window.scrollY < 300);
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});











// formjs
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value.trim();
    const middleName = form.middleName.value.trim();
    const lastName = form.lastName.value.trim();
    const maritalStatus = form.maritalStatus.value;
    const churchDenomination = form.ChurchDenomination.value.trim();
    const bibleStudyClass = form.bibleStudyClass.value;
    const pictureInput = form.picture.files[0];
    const fullName = `${firstName} ${middleName} ${lastName}`.trim();
    const uniqueID = "CONS/25/" + Math.floor(100000 + Math.random() * 900000);

    if (!firstName || !lastName || !maritalStatus || !churchDenomination || !bibleStudyClass) {
        alert("Please fill all required fields.");
        return;
    }

    const formData = new FormData(form);

    fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                showSuccessBanner(); // show success first
                if (pictureInput) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        generateTag(fullName, uniqueID, maritalStatus, churchDenomination, bibleStudyClass, e.target.result);
                    };
                    reader.readAsDataURL(pictureInput);
                } else {
                    generateTag(fullName, uniqueID, maritalStatus, churchDenomination, bibleStudyClass, null);
                }
                form.reset();
            } else {
                alert("Form submission failed. Please try again.");
            }
        })
        .catch(error => {
            console.error("Submission error:", error);
            alert("An error occurred.");
        });
});

function showSuccessBanner() {
    const banner = document.createElement("div");
    banner.innerText = "You have successfully registered for this meeting";
    banner.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #28a745;
        color: white;
        padding: 12px 24px;
        margin-left:400px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        z-index: 1;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    document.body.appendChild(banner);
    setTimeout(() => {
        banner.remove();
    }, 5000);
}

function generateTag(name, id, maritalStatus, church, bibleClass, imageUrl) {
    const printWindow = window.open("", "", "width=800,height=600");

    const defaultImage = "https://www.w3schools.com/howto/img_avatar.png";

    const tagHTML = `
    <html>
    <head>
        <title>2025 Consecration Tag</title>
        <style>
            @media print {
                body {
                    margin: 0;
                    size: 75mm 105mm;
                }
                .print-btn {
                    display: none;
                }
            }
            body {
                font-family: 'Segoe UI', sans-serif;
                background: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                margin: 0;
            }
            .tag {
                width: 75mm;
                height: 105mm;
                border: 2px solid #000;
                border-radius: 8px;
                background: #f1f1f1;
                padding: 10px;
                box-sizing: border-box;
                text-align: center;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            }
            .tag h2 {
                background-color: #003366;
                color: white;
                padding: 6px 0;
                margin: 0 0 8px 0;
                border-radius: 4px;
                font-size: 14pt;
            }
            .tag img {
                width: 30mm;
                height: 30mm;
                border-radius: 50%;
                object-fit: cover;
                margin: 8px 0;
                border: 1.5px solid #333;
            }
            .tag p {
                font-size: 11pt;
                margin: 3px 0;
            }
            .print-btn {
                margin-top: 20px;
                padding: 10px 20px;
                background: #007bff;
                color: #fff;
                border: none;
                border-radius: 5px;
                font-size: 12pt;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div class="tag">
            <h2>2025 CONSECRATION</h2>
            <img src="${imageUrl || defaultImage}" alt="Attendee Photo" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Status:</strong> ${maritalStatus}</p>
            <p><strong>Church:</strong> ${church}</p>
            <p><strong>Class:</strong> ${bibleClass}</p>
        </div>
        <button class="print-btn" onclick="window.print()">Download Tag</button>
    </body>
    </html>
    `;

    printWindow.document.write(tagHTML);
    printWindow.document.close();
}