import React from "react";

const BlogPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl font-bold text-center">Blog Page</h1>
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title">
            1.Tell us the differences between uncontrolled and controlled components.
          </h2>
          <p className="card-text">
            Uncontrolled components are the ones that store their own state internally, and you
            query the DOM using a ref to find its current value when you need it. This is a bit more
            like traditional HTML.
            <br />
            Controlled components are the ones that don’t store any internal state, but rather
            receive their value from their parent as props, and notify their parent when they need
            to change via a callback function like onChange. The parent then handles the state
            changes through this callback.
          </p>
        </div>
      </div>

      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title">2.How to validate React props using PropTypes</h2>
          <p className="card-text">
            React PropTypes are a good way to validate props coming into components. You can specify
            the type of prop you’re expecting, and if an invalid prop is passed, you’ll get a
            warning in the console.
          </p>
        </div>
      </div>

      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title">3.Tell us the difference between nodejs and express js.</h2>
          <p className="card-text">
            Node.js is a runtime environment for JavaScript that runs on the server. Express.js is a
            framework based on Node.js that helps you manage a server and routes easier.
            <br />
            Express.js is a framework based on Node.js that helps you manage a server and routes
            easier.
            <br />
            Node.js is a runtime environment for JavaScript that runs on the server.
          </p>
        </div>
      </div>

      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title">
            4. What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="card-text">
            A custom hook is a function that starts with use and that may call other hooks. A custom
            hook doesn’t need to have a specific signature. We can decide what it takes as
            arguments, and what, if anything, it should return.
            <br />
            We create custom hooks to extract component logic into reusable functions.
            <br />
            Custom hooks allow us to have cleaner functional components, remove logic from the UI
            layer, and prevent code duplication by bringing common use cases to reusable hooks.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
