import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  // FOR Username

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  //FOR EMAIL

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredEmailIsValid =
  //   enteredEmail.trim() !== "" && enteredEmail.trim().includes("@");
  // const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // USERNAME HANDLER

  // EMAIL HANDLER

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredEmailTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredEmail);

    //nameInputRef.current.value = ""; NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();

    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name must not be empty.</p>
      )}

      <div className={emailInputClasses}>
        <label htmlFor="name">Email</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailHasError && <p className="error-text">E-mail must not be empty.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
