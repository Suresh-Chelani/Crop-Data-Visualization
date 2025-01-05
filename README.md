# Crop Data Visualization Project

This project implements data visualization tasks using TypeScript, Vite, Apache ECharts, and Mantine v7. The goal is to process agricultural data, handle missing values, and render a table and a bar chart based on the dataset.

---

## **Technologies Used**
- **TypeScript**: For strictly typed JavaScript.
- **Vite**: Development environment with fast build times.
- **Apache ECharts**: For creating the bar chart visualizations.
- **Mantine v7**: For creating the table component.

---

## **Features**
1. **Missing Values Handling**: All missing or empty values in the dataset are replaced with `0` before calculations or rendering.
2. **Table Component**:
   - Displays the crop with maximum and minimum production for each year.
3. **Bar Chart Component**:
   - Displays the average yield of crops (1950–2020) using a bar chart.

---

## **Installation and Setup**
Follow the steps below to set up and run the project:

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/Suresh-Chelani/Crop-Data-Visualization.git
cd Crop-Data-Visualization
```

### **Step 2: Install Dependencies**
Ensure you have Yarn installed. Then, run:
    yarn install

### **Step 3: Run the Development Server**
Start the development server and open the application in your browser:
    yarn dev

### Usage
1. The application will automatically open in your default browser.
2. You will see:
    • A table showing the crop with the maximum and minimum production for each year.
    • A bar chart showing the average yield of crops across all years.


### Scripts
1. yarn dev: Starts the development server and opens the browser.
2. yarn build: Builds the project for production.
3. yarn preview: Previews the production build.

## Dependencies
• Vite: ^4.0.0
• Apache ECharts: ^5.4.0
• Mantine v7: ^7.0.0
• TypeScript: ^4.0.0

## License
This project is licensed under the MIT License.

## Acknowledgments
• Dataset provided for the project assignment.
• Frameworks and tools used: Vite, Mantine v7, Apache ECharts.
