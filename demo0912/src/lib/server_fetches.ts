import path from "path";
import fs from "fs";

export function fetchForms() {
  const formsDataPath = path.join(process.cwd(), 'db', 'forms.json');
  const formsDataContent = fs.readFileSync(formsDataPath, 'utf-8');
  return JSON.parse(formsDataContent);
}

export function fetchForm(id: string) {
  return fetchForms().find(form => form.id.toString() === id)
}

export function saveForm(id: string, form) {
  const allForms = fetchForms().map(f => {
    if (f.id.toString() === id.toString()) {
      return form
    }
    return f
  })
  fs.writeFileSync(path.join(process.cwd(), 'db', 'forms.json'), JSON.stringify(allForms))
  return form
}
