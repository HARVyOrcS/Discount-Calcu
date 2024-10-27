// Strategy Interface (DiscountStrategy)
class DiscountStrategy {
    applyDiscount(amount) {
        throw new Error("This method must be overridden");
    }
}

// Concrete Strategy for PWD Customers
class PWDDiscount extends DiscountStrategy {
    applyDiscount(amount) {
        return amount * 0.80; // 20% discount for PWD customers
    }
}

// Concrete Strategy for Senior Citizens
class SeniorDiscount extends DiscountStrategy {
    applyDiscount(amount) {
        return amount * 0.80; // 20% discount for Senior Citizens
    }
}

// Concrete Strategy for Students
class StudentDiscount extends DiscountStrategy {
    applyDiscount(amount) {
        return amount * 0.90; // 10% discount for students
    }
}

// Concrete Strategy for 20% Discount
class TwentyDiscount extends DiscountStrategy {
    applyDiscount(amount) {
        return amount * 0.80; // 20% discount
    }
}

// Context Class (Discount Calculator)
class DiscountContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy(amount) {
        return this.strategy.applyDiscount(amount);
    }
}

// Function to calculate discount based on user type
function calculateDiscount() {
    const amount = parseFloat(document.getElementById("amount").value);
    
    // Validate if amount is provided
    if (isNaN(amount) || amount <= 0) {
        showModal("Please enter a valid amount first.");
        return; // Exit the function if the amount is invalid
    }

    const userType = document.getElementById("userType").value;
    let strategy;

    switch (userType) {
        case "PWD":
            strategy = new PWDDiscount();
            break;
        case "Senior":
            strategy = new SeniorDiscount();
            break;
        case "student":
            strategy = new StudentDiscount();
            break;
        case "20%":
            strategy = new TwentyDiscount();
            break;
        default:
            showModal("Invalid user type selected.");
            return; // Exit if the user type is invalid
    }

    const context = new DiscountContext(strategy);
    const discountedAmount = context.executeStrategy(amount);
    document.getElementById("result").innerText = `Final Amount: ₱${discountedAmount.toFixed(2)}`;
}

// Function to show modal
function showModal(message) {
    document.getElementById("modalMessage").innerText = message;
    document.getElementById("modal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Event listener for the calculate button
document.getElementById("calculateBtn").addEventListener("click", calculateDiscount);

// Event listener for closing the modal
document.getElementById("closeModal").addEventListener("click", closeModal);

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
