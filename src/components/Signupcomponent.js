import { useState, useEffect } from "react";
import { Button, Row, Col, Form, InputGroup, Alert } from "react-bootstrap";
import "./Sign.css";
import { useNavigate } from "react-router-dom";

const Signupcomponent = () => {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    password: "",
    email: "",
    confirmpassword: "",
  });
  const [error, setError] = useState({
    fullName: false,
    password: false,
    email: false,
    confirmpassword: false,
  });
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (submit && !Object.values(error).includes(true)) {
      setSuccess(true);
    }
  }, [submit, error]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmit(true);

    const { fullName, password, email, confirmpassword } = userDetails;

    if (fullName.length >= 3) {
      setError((previousError) => ({
        ...previousError,
        fullName: false,
      }));
    } else {
      setError((previousError) => ({
        ...previousError,
        fullName: true,
      }));
    }

    if (password.length >= 4) {
      setError((previousError) => ({
        ...previousError,
        password: false,
      }));
    } else {
      setError((previousError) => ({
        ...previousError,
        password: true,
      }));
    }

    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") !== 0 &&
      email.length - email.lastIndexOf(".") >= 3
    ) {
      setError((previousError) => ({
        ...previousError,
        email: false,
      }));
    } else {
      setError((previousError) => ({
        ...previousError,
        email: true,
      }));
    }

    if (confirmpassword === password) {
      setError((previousError) => ({
        ...previousError,
        confirmpassword: false,
      }));
    } else {
      setError((previousError) => ({
        ...previousError,
        confirmpassword: true,
      }));
    }
  };

  if (success) {
    setTimeout(() => {
      navigate("/profile");
    }, 1000);
    localStorage.setItem("Fullname", JSON.stringify(userDetails.fullName));
    localStorage.setItem("Email", JSON.stringify(userDetails.email));
    localStorage.setItem("Password", JSON.stringify(userDetails.password));
  }

  useEffect(() => {
    if (window.localStorage.getItem("Fullname")) {
      navigate("/profile");
    }
  }, []);

  return (
    <>
      <div className="body">
        <Form
          onSubmit={handleSubmit}
          className="registration-form"
          style={{ width: "800px", margin: "auto", background: "black" }}
        >
          <h1 className="display-6 mt-9">SignUp</h1>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Control
                autoComplete="off"
                style={{ color: "white" }}
                className="bg-transparent outline-none"
                type="text"
                placeholder="Full Name"
                value={userDetails.fullName}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    fullName: e.target.value,
                  })
                }
              />
              {submit &&
                !success &&
                (error.fullName ? (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    Please enter a valid full name
                  </Form.Control.Feedback>
                ) : (
                  <Form.Control.Feedback style={{ display: "block" }}>
                    Looks good!
                  </Form.Control.Feedback>
                ))}
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <Form.Control
                  style={{ color: "white" }}
                  autoComplete="off"
                  className="bg-transparent outline-none"
                  type="text"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      email: e.target.value,
                    })
                  }
                />
                {submit &&
                  !success &&
                  (error.email ? (
                    <Form.Control.Feedback
                      type="invalid"
                      style={{ display: "block" }}
                    >
                      Please enter a valid email.
                    </Form.Control.Feedback>
                  ) : (
                    <Form.Control.Feedback style={{ display: "block" }}>
                      Looks good!
                    </Form.Control.Feedback>
                  ))}
              </InputGroup>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="border-transparent border-b-white"
            >
              <Form.Control
                autoComplete="off"
                style={{ color: "white" }}
                className="bg-transparent outline-none"
                type="password"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  })
                }
              />
              {submit &&
                !success &&
                (error.password ? (
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ display: "block" }}
                  >
                    Please enter a valid password
                  </Form.Control.Feedback>
                ) : (
                  <Form.Control.Feedback style={{ display: "block" }}>
                    Looks good!
                  </Form.Control.Feedback>
                ))}
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom03"
              className="border-transparent border-b-white"
            >
              <Form.Control
                autoComplete="off"
                style={{ color: "white" }}
                className="bg-transparent outline-none"
                type="password"
                placeholder="Confirm Password"
                value={userDetails.confirmpassword}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmpassword: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Row>
          {success && (
            <p style={{ color: "green" }}>
              Your details were saved successfully!
            </p>
          )}
          <Button variant="dark" className="bg-white text-black" type="submit">
            SignUp
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signupcomponent;
