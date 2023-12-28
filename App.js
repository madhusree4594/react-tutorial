/**
 *  Create the below DOM using React
 *  <h1 id="heading">
 *      Hello World from React
 *  </h1>
 * 
 *  const heading = React.createElement("h1", { id: "heading" }, "Hello World from React"); // Returns Object
 *  const mainContainer = ReactDOM.createRoot(document.getElementById("main-container"));
 *  mainContainer.render(heading);
 */

/**
 *  Create the below DOM using React
 *  <div id="parent">
 *      <div id="child1">
 *          <h1 id="child1Heading1">Child 1 h1 tag</h1>
 *          <h2 id="child1Heading2">Child 1 h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1 id="child2Heading1">Child 2 h1 tag</h1>
 *          <h2 id="child2Heading2">Child 2 h2 tag</h2>
 *      </div>
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement(
                    "h1",
                    { id: "child1Heading1" },
                    "Child 1 h1 tag"
                ),
                React.createElement(
                    "h2",
                    { id: "child1Heading2" },
                    "Child 1 h2 tag"
                )
            ]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [
                React.createElement(
                    "h1",
                    { id: "child2Heading1" },
                    "Child 2 h1 tag"
                ),
                React.createElement(
                    "h2",
                    { id: "child2Heading2" },
                    "Child 2 h2 tag"
                )
            ]
        )
    ]
);

const mainContainer = ReactDOM.createRoot(document.getElementById("main-container"));
mainContainer.render(parent);
