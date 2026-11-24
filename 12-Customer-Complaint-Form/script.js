
const form = document.getElementById("form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");

const complaintsGroup = document.getElementById("complaints-group");
const complaintCheckboxes = complaintsGroup.querySelectorAll(
  'input[type="checkbox"]'
);
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById(
  "complaint-description"
);

const solutionsGroup = document.getElementById("solutions-group");
const solutionRadios = solutionsGroup.querySelectorAll(
  'input[type="radio"]'
);
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById(
  "solution-description"
);

const messageBox = document.getElementById("message-box");

// Validation patterns
const orderPattern = /^2024\d{6}$/;
const productPattern = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;

// Validate every form field
const validateForm = () => {
  const complaintsChecked = Array.from(complaintCheckboxes).some(
    checkbox => checkbox.checked
  );

  const solutionsChecked = Array.from(solutionRadios).some(
    radio => radio.checked
  );

  return {
    "full-name": fullName.value.trim() !== "",

    "email": email.value.trim() !== "" && email.validity.valid,

    "order-no": orderPattern.test(orderNo.value),

    "product-code": productPattern.test(productCode.value),

    "quantity":
      quantity.value !== "" &&
      Number.isInteger(Number(quantity.value)) &&
      Number(quantity.value) > 0,

    "complaints-group": complaintsChecked,

    "complaint-description":
      !otherComplaint.checked ||
      complaintDescription.value.trim().length >= 20,

    "solutions-group": solutionsChecked,

    "solution-description":
      !otherSolution.checked ||
      solutionDescription.value.trim().length >= 20
  };
};

// Check whether all fields are valid
const isValid = (validationResults) => {
  return Object.values(validationResults).every(
    value => value === true
  );
};

// Apply validation border colors
const setBorderColor = (element, valid) => {
  element.style.borderColor = valid ? "#16834a" : "#dc3545";
};

// Validate a single field
const validateField = (element, key) => {
  const results = validateForm();
  setBorderColor(element, results[key]);
};

// Personal information
fullName.addEventListener("change", () => {
  validateField(fullName, "full-name");
});

email.addEventListener("change", () => {
  validateField(email, "email");
});

// Order information
orderNo.addEventListener("change", () => {
  validateField(orderNo, "order-no");
});

productCode.addEventListener("change", () => {
  validateField(productCode, "product-code");
});

quantity.addEventListener("change", () => {
  validateField(quantity, "quantity");
});

// Complaint checkbox group
complaintCheckboxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    const results = validateForm();

    setBorderColor(
      complaintsGroup,
      results["complaints-group"]
    );
  });
});

// Complaint description
complaintDescription.addEventListener("change", () => {
  validateField(
    complaintDescription,
    "complaint-description"
  );
});

// Solution radio group
solutionRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    const results = validateForm();

    setBorderColor(
      solutionsGroup,
      results["solutions-group"]
    );
  });
});

// Solution description
solutionDescription.addEventListener("change", () => {
  validateField(
    solutionDescription,
    "solution-description"
  );
});

// Validate and submit the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const results = validateForm();
  const formIsValid = isValid(results);

  // Highlight every field according to its validation result
  setBorderColor(fullName, results["full-name"]);
  setBorderColor(email, results["email"]);
  setBorderColor(orderNo, results["order-no"]);
  setBorderColor(productCode, results["product-code"]);
  setBorderColor(quantity, results["quantity"]);

  setBorderColor(
    complaintsGroup,
    results["complaints-group"]
  );

  setBorderColor(
    complaintDescription,
    results["complaint-description"]
  );

  setBorderColor(
    solutionsGroup,
    results["solutions-group"]
  );

  setBorderColor(
    solutionDescription,
    results["solution-description"]
  );

  if (formIsValid) {
    messageBox.textContent =
      "Your complaint has been submitted successfully!";
    messageBox.style.color = "#16834a";
  } else {
    messageBox.textContent =
      "Please review the highlighted fields and try again.";
    messageBox.style.color = "#dc3545";
  }
});
