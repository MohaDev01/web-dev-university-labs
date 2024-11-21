# Lab 4: Designing an Event Registration Form with Validation

## Lab Instructions
- **Mobile Phones**: The use of mobile phones during the lab session is strictly prohibited. Phones must be turned off and kept out of sight during the entire session.
- **AI Tools**: The use of AI tools (e.g., ChatGPT, GitHub Copilot) to complete any lab tasks is not permitted and will be treated as plagiarism. Ensure all work is completed by yourself.
- **Collaboration**: Sharing your work with others or copying someone else’s work is not allowed. Violations will result in severe penalties according to the university's academic honesty policy.
- **Task Duration**: Each task is designed to be completed within 90 to 105 minutes. Manage your time efficiently to complete the task within the allotted time.

---

## Objective
The goal of this task is to apply advanced HTML5 concepts and form-handling techniques to design and implement an **Event Registration Form**. The task emphasizes the use of various input types, semantic structure, and built-in HTML5 validation.

---

## Task Description
You are required to create a fully functional **Event Registration Form** that collects information from users who wish to register for a fictional event. The form must include multiple types of input elements, validation rules, and an organized semantic structure.

---

## Form Requirements

### 1. **Page Structure**
- The form must be part of a complete HTML5 document.
- Use `<header>`, `<section>`, and `<footer>` tags to organize the content.

### 2. **Form Design**
The form should include the following fields:
1. **Full Name** (required):
   - Use an `<input type="text">` field.
   - Include a `placeholder` attribute for user guidance.
   - Set a `maxlength` of 50 characters.

2. **Email Address** (required):
   - Use `<input type="email">` for email validation.
   - Add a `pattern` attribute to allow only valid email formats.

3. **Phone Number**:
   - Use `<input type="tel">` with a pattern for validation (e.g., `pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"` for format `123-456-7890`).

4. **Event Date**:
   - Use `<input type="date">` to allow users to select a date.
   - Ensure the date cannot be in the past using the `min` attribute.

5. **Event Type**:
   - Provide a `<select>` dropdown with at least three options (e.g., Workshop, Seminar, Networking).

6. **Meal Preference**:
   - Use radio buttons (`<input type="radio">`) to select one option (e.g., Vegetarian, Vegan, Non-Vegetarian).

7. **Additional Comments**:
   - Include a `<textarea>` for users to add extra notes or requirements.

### 3. **Validation Rules**
- All required fields must include the `required` attribute.
- Specific validation rules:
  - Ensure the phone number matches the required pattern.
  - Limit the length of text in the `<textarea>` using the `maxlength` attribute.

### 4. **Accessibility Features**
- Ensure each input field has an associated `<label>` for accessibility.
- Use `aria-required` where applicable to enhance compatibility with assistive technologies.

### 5. **Form Submission**
- Add a Submit button:
  - Use `<button type="submit">` or `<input type="submit">`.
- Add a Reset button to clear the form:
  - Use `<button type="reset">` or `<input type="reset">`.

### 6. **Enhancements**
- Style the form using inline CSS to improve its visual appearance (optional at this stage).
- Ensure the form is properly aligned and visually accessible.

---

## Submission
- Save the file as `event_registration_form.html`.
- Submit the file via the course platform before the end of the lab session.
