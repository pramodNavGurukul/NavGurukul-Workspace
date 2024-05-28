const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const genAI = new GoogleGenerativeAI("AIzaSyBvRqK_mZkN2TNkeekrlItcemFHG5j9_x0");

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt_m3 =
    "Please provide valid JSON format. Please make sure JSON is valid and take care of quotes in generated code block. Do not add comments in JSON. You are tasked with generating 50 hard difficulty level javscript interview & placement related coding questions it's code with test cases and it's validation script covering the range of possible scenarios for the Problem Statement. Test should cover these topics Variables, Data types, Operators, Switch Case, Loops, Scope, Functions, Objects, Arrays, Strings, Date Object, Math Object";

  
    const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  // Save the JSON object to a file
  const filePath = "M3_QuestionBank_Hard.json";

  saveToFile(text, filePath)
    .then(() => {
      console.log(`Data has been saved to ${filePath}`);
    })
    .catch((error) => {
      console.error("An error occurred while saving the file:", error);
    });

  function saveToFile(data, filePath) {
    const trimmedString = text.replace(/^```json|```$/g, '');
    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, trimmedString, "utf8", (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
run();
