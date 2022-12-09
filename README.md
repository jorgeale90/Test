npx playwright test // Running all tests

npx playwright test landing-page.spec.ts // Running a single test file

npx playwright test tests/todo-page/ tests/landing-page/ // Run a set of test files

npx playwright test landing login // Run files that have "landing" or "login" in the file name

npx playwright test -g "add a todo item" // Run the test with the title

npx playwright test landing-page.spec.ts --headed // Running tests in headed mode

npx playwright test landing-page.ts --project=chromium // Running tests on a specific project

npx playwright test --debug // Debugging all tests

npx playwright test example.spec.ts --debug // Debugging one test file

npx playwright test example.spec.ts:42 --debug // Debugging a test from the line number where the test(.. is defined

npx playwright show-report // Test Reports

npx playwright codegen demo.playwright.dev/todomvc // Running Codegen