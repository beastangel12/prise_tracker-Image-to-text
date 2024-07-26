export function extractPrice(...elements: any): string {
    for (const element of elements) {
        if (element.length) { // Check if the element exists and has content
            const priceText = element.text().trim();

            // Remove non-digit characters, allowing for optional decimal point
            const price = priceText.replace(/[^0-9.]/g, '');
            if (price) return price;
        }
    }

    return ''; // Return an empty string if no price is found
}
