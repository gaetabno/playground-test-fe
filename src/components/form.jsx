import React, { useState, useEffect } from "react";

function Form() {
  const [fields, setFields] = useState({
    name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState([]);
  const [error_message, setErrorMessage] = useState(false);
  const [error_email, setErrorEmail] = useState(false);

  const { name, last_name, email, message } = fields;

  const cambioValore = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const validazioneCampi = () => {
    let formIsValid = true;

    //Message

    if (typeof fields["message"] !== "undefined") {
      if (!fields["message"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["message"] = "Inserire un messaggio valido!";
        setErrorMessage(true);
      } else {
        setErrorMessage(false);
      }
    }

    //Email

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Inserire un'email valida!";
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const invioDati = (e) => {
    e.preventDefault();

    if (validazioneCampi()) {
      alert("Form inviato!");
    } 
  };

  return (
    <form onSubmit={invioDati}>
      <div className="grid">
        <div className="col-1-2">
          <input
            placeholder="name"
            name="name"
            type="text"
            onChange={cambioValore}
            value={name}
          />
        </div>
        <div className="col-1-2">
          <input
            name="last_name"
            placeholder="last name"
            type="text"
            onChange={cambioValore}
            value={last_name}
          />
        </div>
        <div className="col-1-1">
          <input
            placeholder="email"
            name="email"
            type="email"
            onChange={cambioValore}
            value={email}
          />
          {error_email && <p className="error-input">{errors.email}</p>}
        </div>
        <div className="col-1-1">
          <textarea
            name="message"
            placeholder="message"
            rows={5}
            defaultValue={message}
            onChange={cambioValore}
          />
          {error_message && <p className="error-input">{errors.message}</p>}
        </div>
        <div className="col-1-3">
          <input className="submit" type="submit" value="SEND >" />
        </div>
      </div>
    </form>
  );
}

export default Form;
