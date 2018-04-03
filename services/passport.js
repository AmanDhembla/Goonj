const passport=require("passport");
const googleStrategy=require('passport-google-oauth20').Strategy;
const keys=require("../config/keys");

passport.use(new googleStrategy(
    {
        clientID:keys.googleClientID,
        clientSecret: keys.googleSecretKey,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, (accessToken,refreshToken,profile,done)=>{
        console.log(accessToken);
    }
));