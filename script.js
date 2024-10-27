// Strategy Interface (DiscountStrategy)
class DiscountStrategy {
    applyDiscount(amount) {
        throw new Error("This method must be overridden");
    }
}

// Concrete Strategy for PWD Customers
class PWDDiscount extends DiscountStrategy {
    applyDiscount(amount) {
        return amount * 0.60; // No discount for pwd customers
    }
}

// Concrete Strategy for Senior Citizan Customers
class SeniorDiscount extends DiscountStrategy {
    applyDiscount(amount) {
        return amount * 0.65; // 10% discount for Senior Citizen customers
    }
}

// Concrete Strategy for Students
class StudentDiscount extends DiscountStrategy {
    applyDiscount(amount) {
        return amount * 0.80; // 15% discount for students
    }
}

// Concrete Strategy for Students
class TwentyDiscount extends DiscountStrategy {
    applyDiscount(amount) {
        return amount * 0.2; // 20% discount for discount
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

        case "student":
                strategy = new StudentDiscount();
                break;
        case "20%":
                    strategy = new TwentyDiscount();
                    break;
    }

    const context = new DiscountContext(strategy);
    const discountedAmount = context.executeStrategy(amount);
    document.getElementById("result").innerText = `Final Amount: ₱${discountedAmount.toFixed(2)}`;
}

// Event listener for the calculate button
document.getElementById("calculateBtn").addEventListener("click", calculateDiscount);
