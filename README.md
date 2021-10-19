1. On the `index.js` we have a sum function. Let's import it on the `index.test.js`
2. The AAA pattern allows you to structure your tests. It splits it into 3 steps.
   - The Arrange step allows you to setup the necessary content for performing your test
   - The Act step is where you perform the action that needs to be tests
   - After acting you can assert that your test produced the expected output
3. In the test:

- on the arrange phase we define the value that will be provided to the sum function on the act phase and also the expected result that we can use to perform an assertion if the result was the expected one
- on the act phase we use invoke the sum function and pass the variables a and b as parameters. After we assing its return to a result variable.
- on the assert we leverage jest matchers to assert if the test performs the expected outcome.
  - jest includes a out of the box a collection of matchers we can use to validate our test.
