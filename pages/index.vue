<template>
  <h1>Clerk + Nuxt Example</h1>

  <div id="auth-links">
    <button onclick="Clerk.openSignUp()">Sign Up</button>
    <button onclick="Clerk.openSignIn()">Sign In</button>
  </div>

  <div id="user-button"></div>

  <div id="no-frontend-api-warning" hidden>
    <h3>No Frontend API found</h3>
    <h4>Add it to the top of <code>src/script.js</code>.</h4>
  </div>
</template>

<style>
#user-button {
  margin: auto;
}

#auth-links {
  display: none;
}

#no-frontend-api-warning h3 {
  color: #e61d1d;
  margin-bottom: 0;
}

#no-frontend-api-warning h4 {
  color: #333;
  font-weight: 400;
  margin-top: 10px;
}
</style>
