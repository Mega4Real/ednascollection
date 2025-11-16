// Dress collection data
// You can add dresses manually by editing the array below (copy an object and paste),
// or use the helper function `addDress()` from the console to add programmatically.
let dresses = [
    {
        id: 1,
        name: "Floral Summer Dress",
        price: 79.99,
        sizes: ["8-10"],
        image: "pics/dress1.jpg"
    },
    {
        id: 2,
        name: "Evening Gown",
        price: 149.99,
        sizes: ["S"],
        image: "pics/dress2.jpg"
    },
    {
        id: 3,
        name: "Cocktail Party Dress",
        price: 129.99,
        sizes: ["XS"],
        image: "pics/dress3.jpg"
    },
    {
        id: 4,
        name: "Maxi Sundress",
        price: 89.99,
        sizes: ["S"],
        image: "pics/dress4.jpg"
    },
    {
        id: 5,
        name: "Little Black Dress",
        price: 99.99,
        sizes: ["XS"],
        image: "pics/dress5.jpg"
    },
    {
        id: 6,
        name: "Floral Print Midi Dress",
        price: 85.99,
        sizes: ["S"],
        image: "pics/dress6.jpg"
    },
    {
        id: 7,
        name: "Bohemian Maxi Dress",
        price: 95.99,
        sizes: ["S"],
        image: "pics/dress7.jpg"
    },
    {
        id: 8,
        name: "Wrap Dress",
        price: 75.99,
        sizes: ["XS"],
        image: "pics/dress8.jpg"
    },
    {
        id: 9,
        name: "A-Line Party Dress",
        price: 119.99,
        sizes: ["S"],
        image: "pics/dress9.jpg"
    },
    {
        id: 10,
        name: "Summer Beach Dress",
        price: 69.99,
        sizes: ["S"],
        image: "pics/dress10.jpg"
    },
    {
        id: 11,
        name: "Formal Ball Gown",
        price: 199.99,
        sizes: ["S"],
        image: "pics/dress11.jpg"
    },
    {
        id: 12,
        name: "Casual T-Shirt Dress",
        price: 49.99,
        sizes: ["XS"],
        image: "pics/dress12.jpg"
    },
    {
        id: 13,
        name: "Bodycon Dress",
        price: 89.99,
        sizes: ["XS", "S", "M", "L"],
        image: "pics/dress13.jpg"
    },
    {
        id: 14,
        name: "Wedding Guest Dress",
        price: 159.99,
        sizes: ["S"],
        image: "pics/dress14.jpg"
    },
    {
        id: 15,
        name: "Prom Dress",
        price: 179.99,
        sizes: ["XS"],
        image: "pics/dress15.jpg"
    },
    {
        id: 16,
        name: "Office Wear Dress",
        price: 109.99,
        sizes: ["S"],
        image: "pics/dress16.jpg"
    },
    {
        id: 17,
        name: "Summer Mini Dress",
        price: 59.99,
        sizes: ["XS"],
        image: "pics/dress17.jpg"
    },
    {
        id: 18,
        name: "Pleated Dress",
        price: 95.99,
        sizes: ["S"],
        image: "pics/dress18.jpg"
    },
    {
        id: 19,
        name: "Lace Evening Dress",
        price: 169.99,
        sizes: ["S"],
        image: "pics/dress19.jpg"
    },
    {
        id: 20,
        name: "Floral Maxi Dress",
        price: 129.99,
        sizes: ["S"],
        image: "pics/dress20.jpg"
    },
    {
        id: 21,
        name: "Printed Sundress",
        price: 79.99,
        sizes: ["XS"],
        image: "pics/dress21.jpg"
    },
    {
        id: 22,
        name: "Denim Dress",
        price: 89.99,
        sizes: ["S"],
        image: "pics/dress22.jpg"
    },
    {
        id: 23,
        name: "Silk Evening Gown",
        price: 199.99,
        sizes: ["S"],
        image: "pics/dress23.jpg"
    },
    {
        id: 24,
        name: "Vintage Style Dress",
        price: 119.99,
        sizes: ["XS"],
        image: "pics/dress24.jpg"
    },
    {
        id: 25,
        name: "Party Sequin Dress",
        price: 149.99,
        sizes: ["S"],
        image: "pics/dress25.jpg"
    },
    {
        id: 26,
        name: "Casual Stripe Dress",
        price: 69.99,
        sizes: ["XS"],
        image: "pics/dress26.jpg"
    },
    {
        id: 27,
        name: "Formal Business Dress",
        price: 139.99,
        sizes: ["S"],
        image: "pics/dress27.jpg"
    },
    {
        id: 28,
        name: "Bohemian Print Dress",
        price: 89.99,
        sizes: ["S"],
        image: "pics/dress28.jpg"
    },
    {
        id: 29,
        name: "Chiffon Dress",
        price: 99.99,
        sizes: ["XS", "S", "M", "L"],
        image: "pics/dress29.jpg"
    },
    {
        id: 30,
        name: "Wedding Reception Dress",
        price: 189.99,
        sizes: ["S", "M", "L"],
        image: "pics/dress30.jpg"
    },
    {
        id: 31,
        name: "Summer Party Dress",
        price: 79.99,
        sizes: ["S", "M", "L", "XL"],
        image: "pics/dress31.jpg"
    },
    {
        id: 32,
        name: "Velvet Evening Dress",
        price: 159.99,
        sizes: ["XS"],
        image: "pics/dress32.jpg"
    },
    {
        id: 33,
        name: "Casual Summer Dress",
        price: 59.99,
        sizes: ["S"],
        image: "pics/dress33.jpg"
    },
    {
        id: 34,
        name: "Floral Tea Dress",
        price: 85.99,
        sizes: ["XS"],
        image: "pics/dress34.jpg"
    },
    {
        id: 35,
        name: "Elegant Midi Dress",
        price: 129.99,
        sizes: ["S"],
        image: "pics/dress35.jpg"
    },
    {
        id: 36,
        name: "Beach Cover Up Dress",
        price: 49.99,
        sizes: ["S"],
        image: "pics/dress36.jpg"
    },
    {
        id: 37,
        name: "Polka Dot Dress",
        price: 75.99,
        sizes: ["XS"],
        image: "pics/dress37.jpg"
    },
    {
        id: 38,
        name: "Homecoming Dress",
        price: 169.99,
        sizes: ["S"],
        image: "pics/dress38.jpg"
    },
    {
        id: 39,
        name: "Knit Sweater Dress",
        price: 89.99,
        sizes: ["S"],
        image: "pics/dress39.jpg"
    },
    {
        id: 40,
        name: "Resort Wear Dress",
        price: 109.99,
        sizes: ["XS"],
        image: "pics/dress40.jpg"
    },
    {
        id: 41,
        name: "Holiday Party Dress",
        price: 149.99,
        sizes: ["S"],
        image: "pics/dress41.jpg"
    },
    {
        id: 42,
        name: "Cotton Day Dress",
        price: 65.99,
        sizes: ["XS"],
        image: "pics/dress42.jpg"
    },
    {
        id: 43,
        name: "Satin Evening Dress",
        price: 179.99,
        sizes: ["S"],
        image: "pics/dress43.jpg"
    },
    {
        id: 44,
        name: "Ruffle Detail Dress",
        price: 95.99,
        sizes: ["XS"],
        image: "pics/dress44.jpg"
    },
    {
        id: 45,
        name: "Embroidered Dress",
        price: 139.99,
        sizes: ["S"],
        image: "pics/dress45.jpg"
    },
    {
        id: 46,
        name: "Graduation Dress",
        price: 159.99,
        sizes: ["XS"],
        image: "pics/dress46.jpg"
    },
    {
        id: 47,
        name: "Spring Floral Dress",
        price: 79.99,
        sizes: ["S"],
        image: "pics/dress47.jpg"
    },
    {
        id: 48,
        name: "Date Night Dress",
        price: 119.99,
        sizes: ["XS"],
        image: "pics/dress48.jpg"
    },
    {
        id: 49,
        name: "Tiered Maxi Dress",
        price: 129.99,
        sizes: ["S"],
        image: "pics/dress49.jpg"
    },
    {
        id: 50,
        name: "Special Occasion Dress",
        price: 189.99,
        sizes: ["S"],
        image: "pics/dress50.jpg"
    },
    {
        id: 51,
        name: "Special Occasion Dress",
        price: 189.99,
        sizes: ["S"],
        image: "pics/dress1.jpg"
    },
   
];

/*
  Helper functions for managing the `dresses` array.
  - You can still add dresses manually by editing the array above.
  - Or, open the browser console and call `addDress({ name, price, sizes, image })`.
  - Example: addDress({ name: 'New Dress', price: 99.99, sizes: ['S','M'], image: 'pics/new.jpg' })
*/

function getNextDressId() {
    return dresses.reduce((max, d) => Math.max(max, d.id || 0), 0) + 1;
}

function addDress(d) {
    if (!d || !d.name || (typeof d.price === 'undefined' && isNaN(parseFloat(d.price)))) {
        console.error('Invalid dress object. Required: name, price, sizes, image');
        return null;
    }

    const dress = {
        id: d.id || getNextDressId(),
        name: d.name,
        price: typeof d.price === 'number' ? d.price : parseFloat(d.price),
        sizes: Array.isArray(d.sizes) ? d.sizes : [d.sizes],
        image: d.image || 'pics/default.jpg'
    };

    dresses.push(dress);
    // Re-render current view if function available
    if (typeof displayDresses === 'function') displayDresses(dresses);
    return dress;
}

function removeDress(id) {
    const idx = dresses.findIndex(d => d.id === id);
    if (idx === -1) return false;
    dresses.splice(idx, 1);
    if (typeof displayDresses === 'function') displayDresses(dresses);
    return true;
}

function updateDress(id, updates) {
    const dress = dresses.find(d => d.id === id);
    if (!dress) return null;
    Object.assign(dress, updates);
    if (typeof displayDresses === 'function') displayDresses(dresses);
    return dress;
}

let selectedDresses = new Map(); // Stores selected dresses with their sizes

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayDresses();
    updateWhatsAppButton();
    setupFooterIntersection();
    setupFilters();
});

// Setup intersection observer for footer
function setupFooterIntersection() {
    const footer = document.querySelector('.site-footer');
    const floatingCart = document.querySelector('.floating-cart');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If footer is intersecting viewport, hide cart
            floatingCart.classList.toggle('hide-cart', entry.isIntersecting);
        });
    }, {
        threshold: 0,
        rootMargin: '50px' // Starts hiding 50px before reaching footer
    });
    
    if (footer && floatingCart) {
        observer.observe(footer);
    }
}

// Display dresses in the container
function displayDresses() {
    const container = document.getElementById('dress-container');
    container.innerHTML = '';

    dresses.forEach(dress => {
        const dressElement = createDressElement(dress);
        container.appendChild(dressElement);
    });
}

// Create individual dress card
function createDressElement(dress) {
    const dressCard = document.createElement('div');
    dressCard.className = 'dress-card';
    dressCard.setAttribute('data-id', dress.id);

    dressCard.innerHTML = `
        <img src="${dress.image}" alt="Dress ${dress.id}" class="dress-image">
        <div class="dress-info">
            <div class="dress-price">₵${dress.price.toFixed(2)}</div>
            <div class="size-options">
                ${dress.sizes.map(size => `
                    <span class="size-option" data-size="${size}">${size}</span>
                `).join('')}
            </div>
        </div>
    `;

    // Add click handlers
    const dressImage = dressCard.querySelector('.dress-image');
    dressImage.addEventListener('click', (e) => {
        e.stopPropagation();
        showPreview(dress);
    });
    
    dressCard.addEventListener('click', () => toggleDressSelection(dress, dressCard));
    
    const sizeOptions = dressCard.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            selectSize(option, dress, dressCard);
        });
    });

    return dressCard;
}

// Toggle dress selection
function toggleDressSelection(dress, dressCard) {
    if (selectedDresses.has(dress.id)) {
        selectedDresses.delete(dress.id);
        dressCard.classList.remove('selected');
    } else {
        // Only allow selection if a size is chosen
        const selectedSize = dressCard.querySelector('.size-option.selected');
        if (selectedSize) {
            selectedDresses.set(dress.id, {
                ...dress,
                selectedSize: selectedSize.dataset.size
            });
            dressCard.classList.add('selected');
        } else {
            alert('Please select a size first');
        }
    }
    updateSelectedCount();
    updateWhatsAppButton();
}

// Handle size selection
function selectSize(sizeElement, dress, dressCard) {
    // Remove selected class from all sizes in this card
    const allSizes = dressCard.querySelectorAll('.size-option');
    allSizes.forEach(size => size.classList.remove('selected'));
    
    // Add selected class to clicked size
    sizeElement.classList.add('selected');
    
    // Update selection if dress is already selected
    if (selectedDresses.has(dress.id)) {
        selectedDresses.set(dress.id, {
            ...dress,
            selectedSize: sizeElement.dataset.size
        });
    }
}

// Update the selected items count and display
function updateSelectedCount() {
    const count = selectedDresses.size;
    document.getElementById('selected-count').textContent = count;
    
    // Update total price
    const total = Array.from(selectedDresses.values())
        .reduce((sum, dress) => sum + dress.price, 0);
    document.getElementById('total-price').textContent = `₵${total.toFixed(2)}`;
    
    // Update selected items display
    const selectedItemsContainer = document.getElementById('selected-items');
    selectedItemsContainer.innerHTML = '';
    
    selectedDresses.forEach(dress => {
        const itemElement = document.createElement('div');
        itemElement.className = 'selected-item';
        itemElement.innerHTML = `
            <img src="${dress.image}" alt="Selected dress">
            <div class="item-details">
                <div class="item-size">Size: ${dress.selectedSize}</div>
                <div class="item-price">₵${dress.price.toFixed(2)}</div>
            </div>
        `;
        selectedItemsContainer.appendChild(itemElement);
    });
}

// Update WhatsApp button state and href
function updateWhatsAppButton() {
    const button = document.getElementById('send-to-whatsapp');
    const selectedCount = selectedDresses.size;
    
    button.disabled = selectedCount === 0;
    
    if (selectedCount > 0) {
        button.addEventListener('click', sendToWhatsApp);
    }
}

// Preview functionality
function showPreview(dress) {
    const modal = document.getElementById('preview-modal');
    const previewVideo = document.getElementById('preview-video');
    const videoSource = previewVideo.querySelector('source');

    // Set expected video source (based on dress id)
    const expectedVideo = `videos/dress${dress.id}.mp4`;

    // Cleanup any previous fallback image
    const existingFallback = document.getElementById('preview-fallback-image');
    if (existingFallback) {
        existingFallback.remove();
    }

    // Ensure video element is visible
    previewVideo.style.display = '';

    // Update source and load
    videoSource.src = expectedVideo;
    previewVideo.load(); // Reload the video with new source

    // Try to play (may be blocked unless muted)
    previewVideo.play().catch(() => {
        // Autoplay may be blocked, that's okay — controls are available
    });

    modal.style.display = 'block';

    // If the video fails to load (404 or other), show the image fallback
    function showFallbackImage() {
        // hide the video element
        previewVideo.style.display = 'none';

        // create or show fallback image
        const img = document.createElement('img');
        img.id = 'preview-fallback-image';
        img.src = dress.image;
        img.alt = dress.name;
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '4px';

        const container = previewVideo.parentElement;
        container.appendChild(img);
    }

    // Attach an error listener that triggers fallback once
    const onError = () => {
        showFallbackImage();
        // remove the error listener after fallback
        previewVideo.removeEventListener('error', onError);
    };

    previewVideo.addEventListener('error', onError);

    // Close modal when clicking the close button or outside the modal
    const closeBtn = document.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Setup filters
function setupFilters() {
    const priceMinInput = document.getElementById('price-min');
    const priceMaxInput = document.getElementById('price-max');
    const sizeSelect = document.getElementById('size-filter');
    const clearFiltersButton = document.getElementById('clear-filters');

    // Function to apply filters
    function applyFilters() {
        const minPrice = parseFloat(priceMinInput.value) || 0;
        const maxPrice = parseFloat(priceMaxInput.value) || Infinity;
        const selectedSizes = Array.from(sizeSelect.selectedOptions).map(option => option.value);

        const filteredDresses = dresses.filter(dress => {
            const priceMatch = dress.price >= minPrice && dress.price <= maxPrice;
            const sizeMatch = selectedSizes.length === 0 || selectedSizes.some(size => dress.sizes.includes(size));
            return priceMatch && sizeMatch;
        });

        displayDresses(filteredDresses);
    }

    // Event listeners for filters
    priceMinInput.addEventListener('input', applyFilters);
    priceMaxInput.addEventListener('input', applyFilters);
    sizeSelect.addEventListener('change', applyFilters);

    // Clear filters
    clearFiltersButton.addEventListener('click', () => {
        priceMinInput.value = '';
        priceMaxInput.value = '';
        sizeSelect.selectedIndex = -1; // Deselect all options
        displayDresses(dresses); // Show all dresses
    });
}

// Modify displayDresses to accept filtered array
function displayDresses(dressArray = dresses) {
    const container = document.getElementById('dress-container');
    container.innerHTML = '';

    dressArray.forEach(dress => {
        const dressElement = createDressElement(dress);
        container.appendChild(dressElement);
    });
}

// Send selected dresses to WhatsApp
function sendToWhatsApp() {
    // Get the current website URL
    const baseUrl = window.location.href.split('/').slice(0, -1).join('/');
    let message = "Hello! I'm interested in the following dresses:\n\n";

    selectedDresses.forEach(dress => {
        // Create full URL for the image
        const imageUrl = `${baseUrl}/${dress.image}`;
        message += `🔍 View Dress: ${imageUrl}\n`;
        message += ` Size: ${dress.selectedSize}\n`;
        message += `💰 Price: ₵${dress.price.toFixed(2)}\n`;
        message += `-------------------------\n\n`;
    });

    // Calculate total
    const total = Array.from(selectedDresses.values())
        .reduce((sum, dress) => sum + dress.price, 0);
    message += `Total: ₵${total.toFixed(2)}`;

    // Encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Replace with your actual WhatsApp number
    const whatsappNumber = "+233543806051"; // Format: country code + number (e.g., "1234567890")
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}
