import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
} from "@mui/material";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { AUTH } from "../../constants/actionTypes";
import Icon from "./Icon";
import useStyle from "./styles";
import {jwtDecode} from 'jwt-decode';
import {signin, signup} from '../../actions/auth'

const initialState = {firstName : '', lastName: '',email: '', Password : '', confirmPassword: ''}

const Auth = () => {
    const classes = useStyle();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const nav = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        if(isSignup) {
            dispatch(signup(formData, nav))

        } else {
            dispatch(signin(formData, nav))

        }
        
    };

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]: e.target.value})

     };

    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        try {
            const token = res?.credential; // 获取返回的 token
            if (!token) {
                alert("Google Sign In was unsuccessful. No token received.");
                return;
            }

            const decoded = jwtDecode(token);
            
 
            dispatch({ type: AUTH, data: { result: decoded, token } });

            nav('/'); // 登录成功后导航到主页
        } catch (error) {
            console.error("Error during Google Sign In dispatch:", error);
        }



    };

    const googleError = () =>
        alert("Google Sign In was unsuccessful. Try again later");

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                            </>
                        )}
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />

                        {isSignup && (
                            <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={handleChange}
                                type="password"
                            />
                        )}
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>

                    <GoogleOAuthProvider clientId="103240155878-jjv609b0ctu5mlegfh7at4a2rdulbuhf.apps.googleusercontent.com">
                        <GoogleLogin
                            render={(renderProps) => (
                                <Button
                                    className={classes.googleButton}
                                    color="primary"
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />}
                                    variant="contained"
                                >
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onError={googleError}
                            cookiePolicy="single_host_origin"
                        />
                    </GoogleOAuthProvider>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup
                                    ? "Already have an account? Sign in"
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
