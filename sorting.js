// const languages = [
    
//     { id: "2", label: "Mandarin", value: "Mandarin",isDefault: false },
//     { id: "3", label: "Hmong", value: "Hmong" ,isDefault: false},
//      { id: "4", label: "Spanish", value: "Spanish" ,isDefault: true},
//     { id: "5", label: "Somali", value: "Somali" ,isDefault: false},
//     { id: "1", label: "English", value: "English",isDefault: true },
//   ];
  
//   const fixedOrder = ["Spanish","English"];
  
//   const sortedLanguages = [
//     ...languages.filter((lang) => fixedOrder.includes(lang.label)),
//     ...languages.filter((lang) => !fixedOrder.includes(lang.label)).sort((a, b) => a.label.localeCompare(b.label)),
//   ];
  
//   console.log(sortedLanguages);

  console.log("===================================")
  const languages2 = [
    { id: "1", label: "English", value: "English",isDefault: true },
    { id: "2", label: "Mandarin", value: "Mandarin",isDefault: false },
    { id: "3", label: "Hmong", value: "Hmong" ,isDefault: false},
     { id: "4", label: "Spanish", value: "Spanish" ,isDefault: true},
    { id: "5", label: "Somali", value: "Somali" ,isDefault: false},
  ];
  const priority = { English: 2, Spanish: 1 };

const sortedLanguages2 = languages2.sort((a, b) => {
  const priorityA = priority[a.label] || 100; // Default priority 100 for other languages
  const priorityB = priority[b.label] || 100;

  return priorityA - priorityB || a.label.localeCompare(b.label); // Sort alphabetically if same priority
});

console.log(sortedLanguages2);