export const validateForm = (formValues) => {
    let errors = {};
  
    if (!formValues.firstName) errors.firstName = "First Name is required";
    if (!formValues.lastName) errors.lastName = "Last Name is required";
  
    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Please enter a valid email address";
    }
  
    const phonePattern = /^[0-9]{10,11}$/;
    if (!formValues.phone) {
      errors.phone = "Phone number is required";
    } else if (!phonePattern.test(formValues.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
  
    if (!formValues.message) errors.message = "Message is required";
  
    return errors;
  };