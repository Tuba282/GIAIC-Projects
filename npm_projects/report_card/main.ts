#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`PROJECT_04`);

const per = await inquirer.prompt([
  {
    message:
      "Enter your report card number (soch samjh k enter karna warna bapo sy bhut pary gi):",
    name: "report_card_number",
    type: "number",
  },
]);

if (per.report_card_number >= 90 && per.report_card_number <= 100) {
  console.log(`Wah kiya bat hai A++ liye hai.\nGood Job Buddy`);
} else if (per.report_card_number >= 80 && per.report_card_number <= 89) {
  console.log(`Wah bai A+ Grade liya hai.\nGood baby.`);
} else if (per.report_card_number >= 70 && per.report_card_number <= 79) {
  console.log(`Wah bai A Grade liya hai.\nGood baby.`);
} else if (per.report_card_number >= 60 && per.report_card_number <= 69) {
  console.log(
    `kuch ni acha kam kiya hai B mila \n keep this grade high \ndarna kisi mai k lal sy nai.`
  );
} else if (per.report_card_number >= 50 && per.report_card_number <= 59) {
  console.log(`sharm ni ati C liye hai.\n You nikammi aulad.`);
} else if (per.report_card_number >= 40 && per.report_card_number <= 49) {
  console.log(
    `Teri na Qismat achi hai D agya \n tumhai bheens doob chuki hai.`
  );
} else if (per.report_card_number >= 30 && per.report_card_number <= 35) {
  console.log(`haye haye E liya hai \n dor fitty moo`);
} else {
  console.log(
    `Bhai tu FAIL hai apny bary me search na kar\ntera report card me ala maqam hai.`
  );
}
