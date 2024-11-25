# Lab 6: Building an Admin Web Page with CSS Layout Techniques

## Lab Instructions

- **Mobile Phones**: The use of mobile phones during the lab session is strictly prohibited.  
  Phones must be turned off and kept out of sight during the entire session.

- **AI Tools**: The use of AI tools (such as ChatGPT, GitHub Copilot, etc.) to complete any lab tasks  
  is not permitted and will be treated as plagiarism. Ensure all work is completed by yourself.

- **Collaboration**: Sharing your work with others or copying someone else’s work is not allowed.  
  If any form of sharing or copying is detected, it will result in severe penalties according to the university’s academic honesty policy.

- **Task Duration**: Each task is designed to be completed within **90 to 105 minutes**. Ensure you  
  manage your time efficiently to complete the task before the end of the lab.

---

## Objective

Create a **two-page admin web page** using advanced CSS layout techniques, focusing on properties like `float`, `position`, and `display: inline-block` to structure the page. This task will reinforce your understanding of CSS layouts without using flexbox.

---

## Task Requirements

### 1. General Layout
The layout must include:
- A **fixed header** at the top of the page.
- A **left vertical navigation panel**.
- A **main content area** that changes depending on the page.

### 2. Header
- Use `position: fixed` to ensure the header stays at the top of the page.
- Include:
  - A logo image aligned to the left.
  - A user image aligned to the right, styled as a round image.
- Style the header with padding, a background color, and a border-bottom to visually separate it from the rest of the page.

### 3. Navigation Panel
- Use `float: left` to position the navigation panel on the left side of the page.
- Ensure the panel spans the full height of the page (use `height: 100vh` and a background color).
- Include:
  - A vertical list of navigation items (e.g., "User Registration" and "User Table") styled as links.
  - Use `list-style: none` and apply hover effects for a visually appealing design.

### 4. Main Content Area
- Use `margin-left` to create space for the navigation panel and ensure the main content area starts beside it.
- Style the main content area with padding, a light background color, and a border for a clean layout.

### 5. Page 1: User Registration Form
- Include fields for:
  - Name  
  - Email  
  - Password  
  - Date of Birth  
  - Submit button  
- Style the form elements using CSS:
  - Add padding and borders to inputs.
  - Center the form within the main content area using margin and padding.

### 6. Page 2: User Information Table
- Create a table with columns for:
  - Name  
  - Email  
  - Date of Birth  
- Style the table using CSS:
  - Add borders to the table and its cells.
  - Use `nth-child` pseudo-classes to alternate row colors for better readability.
  - Center the table horizontally within the main content area.

### 7. Navigation Functionality
- Ensure the navigation links in the left panel route to the correct page:
  - "User Registration" navigates to Page 1.
  - "User Table" navigates to Page 2.
- Use the same layout for both pages.

---

## Styling Requirements

- **CSS Layout Techniques**:
  - Use `float` for positioning elements (e.g., navigation panel).
  - Use `position` properties (`fixed`, `absolute`) for the header.
  - Use `display: inline-block` where necessary to align elements.

- **Consistent Styling**:
  - Apply a cohesive color scheme across all sections.
  - Use typography settings (e.g., `font-family`, `font-size`) for better readability.

- **Responsive Design**:
  - Ensure the page layout adapts to smaller screens using media queries.

---

## Submission
Submit the **HTML and CSS files** in a zipped folder.  
Include placeholder data for the table in Page 2 for demonstration purposes.
