import React from 'react';

const Frm = () => {

  const submitForm = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get the form element
    const form = document.getElementById("email-form");
    
    // Get form data using FormData
    const formData = new FormData(form);

    // Send form data using Fetch API
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfneeYF-5AJ2TzokTSOzmctid34wM4jFUIvoyJIHVpK3axkiA/formResponse", {
      method: "POST",
      body: formData
    })
    .then(response => {
      // Handle the response if needed
      console.log("Form submitted successfully:", response);
      // You can handle success message or redirection here
    })
    .catch(error => {
      // Handle errors
      console.error("Error submitting form:", error);
      // You can display an error message to the user here
    });
  }

  return (
    <section className="section-3">
      <div className="w-layout-blockcontainer container-2 w-container">
        <div className="form-block w-form">
          <form id="email-form" name="email-form" data-name="Email Form" method="get">
            <h1 className="heading-2">Contact Us</h1>
            <input className="text-field w-input" maxLength="256" name="entry.1002056275" data-name="Name" placeholder="Name" type="text" id="name" />
            <input className="text-field-2 w-input" maxLength="256" name="entry.2125251975" data-name="Email" placeholder="Email" type="email" id="email" required="" />
            <input className="text-field-3 w-input" maxLength="256" name="entry.1532719503" data-name="ph-no" placeholder="Phone no " type="tel" id="ph-no" required="" />
            <textarea placeholder="Message" maxLength="5000" id="field" name="entry.2004706855" data-name="Field" className="textarea w-input"></textarea>
            <input type="submit" data-wait="Please wait..." className="submit-button w-button" value="Submit" onClick={submitForm} />
          </form>
          <div className="w-form-done">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
          <div className="w-form-fail">
            <div>Thank you! Your submission has been received!</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frm;
