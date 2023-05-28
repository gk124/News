

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
require('dotenv').config();

let GOOGLE_CLIENT_ID="705848789332-7cq7rn4ak98oodkb7cafhsoebf2kop3m.apps.googleusercontent.com";
let GOOGLE_CLIENT_SECRET="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";

let GITHUB_CLIENT_ID="582a0dfb9ca3f78e2acc";
let GITHUB_CLIENT_SECRET="2ec074af7e43898831b7c7218daa697099101357";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

