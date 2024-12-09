export function updateBookingsMonth() {
  const bookingsText = document.querySelector(".bookings-text");
  if (bookingsText) {
    const currentMonth = new Date().toLocaleString("default", {
      month: "long",
    });
    bookingsText.textContent = `Limited Bookings Open for ${currentMonth}`;
  }
}
