const whatsappNumber = "27662246679";

const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        const icon = navToggle.querySelector("i");
        if (icon) {
            icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
        }
    });
}

function getValue(form, name) {
    const field = form.querySelector(`[name="${name}"]`);
    return field ? field.value.trim() : "";
}

function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank", "noopener");
}

document.querySelectorAll("[data-quote-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const message = [
            "*NEW QUOTE REQUEST - LN MABASO LOGISTICS & CAR MOVERS*",
            "",
            "*Client Details*",
            `Name: ${getValue(form, "name")}`,
            `Phone: ${getValue(form, "phone")}`,
            `Email: ${getValue(form, "email") || "Not provided"}`,
            "",
            "*Transport Route*",
            `Collection: ${getValue(form, "collection")}`,
            `Delivery: ${getValue(form, "delivery")}`,
            `Preferred date: ${getValue(form, "date") || "Flexible"}`,
            "",
            "*Vehicle / Service*",
            `Service: ${getValue(form, "service") || "Vehicle transport"}`,
            `Vehicle: ${getValue(form, "vehicle") || "Not provided"}`,
            `Condition: ${getValue(form, "condition") || "Not specified"}`,
            "",
            "*Additional Notes*",
            getValue(form, "notes") || "No additional notes"
        ].join("\n");

        openWhatsApp(message);
    });
});

document.querySelectorAll("[data-whatsapp-message]").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        openWhatsApp(link.getAttribute("data-whatsapp-message"));
    });
});
