import React, {
    useEffect,
    useState
} from 'react'
import {
    Link,
    useNavigate
} from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import swal from 'sweetalert'
import {
    useFormik
} from 'formik'
import axios from '../../services/api'
import {
    cilLockLocked,
    cilUser
} from '@coreui/icons'

const Login = () => {
    const [message,
        setMessage] = useState("");
    const navigate = useNavigate();

    const validate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = "Required"
        } else if (
            !/^[A-Z0-9._%-]+@[A-Z0-9.-][A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Invalid email address"
        }
        if (!values.password) {
            errors.password = "Required"
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {
            user_login(values);
        },
    });

    async function user_login(values) {
        try {
            const response = await axios.post("/user/login", {
                email: values.email,
                password: values.password,
            });

            if (response.data.token) {
                try {
                    const user_info = await axios.get("/user/info", {
                        headers: {
                            Authorization: "Bearer " + response.data.token,
                        },
                    });

                    localStorage.setItem("user_info", JSON.stringify(user_info.data));
                    localStorage.setItem("token", JSON.stringify(response.data.token));
                    navigate("/dashboard");

                } catch (err) {
                    swal(err.response.data);
                }
            } else {
                swal("Failed to get dataogin");
            }
        } catch (err) {
            if (err.response.status === 400) {
                setMessage(err.response.data.message);
            } else {
                swal(err.response.data);
            }
        }
    }

    useEffect(() => {
        if (localStorage.getItem("user_info")) {
            navigate("/dashboard");
        }
    });

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={formik.handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">
Sign In to your account
        </p>
                    <p className="text-danger">
            {message}
        </p>
         <p className="text-warning field_validate_label">
            {formik.errors.email ? formik.errors.email: null}
        </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                type="email"
                name="email"
                placeholder="email" autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                />
                    </CInputGroup>
                             <p className="text-warning field_validate_label">
            {formik.errors.password ? formik.errors.password: null}
        </p>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                type="password"
                name="password"
                placeholder="password" autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary p-4">
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
        </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
        </div>
    )
}

export default Login