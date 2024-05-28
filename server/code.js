const fs = require('fs');
const vm = require('vm');

// Read and parse the JSON file
const jsonData = JSON.parse(fs.readFileSync('M3_QuestionBank_Medium.json', 'utf8'));

jsonData.forEach((problem, index) => {
    const problemStatement = problem.problemStatement;
    const code = problem.code;
    const testCases = problem.testCases;
    const validationScript = problem.validationScript;
  
    console.log(`Problem ${index + 1}:`);
    console.log(`Problem Statement:\n${problemStatement}`);
    
    console.log(`Test Cases:\n${JSON.stringify(testCases, null, 2)}`);
    
    console.log('-------------------------------------------');
  });

// Create a context for the VM to execute the code safely
// const context = {
//   console: console,
//   require: require,
//   testCases: testCases
// };

// // Create a script with the code and validation script
// const scriptContent = `
// ${code}

// ${validationScript}
// `;

// // Run the script in the VM context
// vm.createContext(context);
// const script = new vm.Script(scriptContent);

// try {
//   script.runInContext(context);
//   console.log('All test cases validated successfully.');
// } catch (error) {
//   console.error('Error validating test cases:', error);
// }
