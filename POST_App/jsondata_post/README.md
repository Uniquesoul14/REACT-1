# React + Vite


<h2>📄 React Paginated Posts Viewer</h2>
A dynamic React application that fetches and displays paginated post data from an external API using useEffect and useState. It includes robust error handling via try-catch, loading indicators, and intuitive navigation with Previous and Next buttons. The posts are rendered dynamically based on the current page selected by the user.

<h2>Explanation video of PROJECT</h2>
👉 Click here to watch the demo video
https://drive.google.com/file/d/14i6dt6E-DdI_Qiy8_GnnGEHMMu-yK8ts/view?usp=sharing


<h2>🚀 Features</h2>
<ul>
<li>✅ Dynamic API Data Fetching using fetch()</li>
<li>✅ React Hooks: useEffect, useState</li>
<li>✅ Error handling with try-catch</li>
<li>✅ User feedback for Loading and Errors</li>
<li>✅ Page Navigation with Previous and Next Buttons</li>
<li>✅ Fully Responsive and Clean UI</li>
<li>✅ Easy to Extend and Customize</li>
</ul>

<h2>🧠 Tech Stack</h2>
<ul>
<li>React (Functional Components)</li>
<li>JavaScript (ES6+)</li>
<li>HTML5 & CSS3</li>
<li>API Integration</li>
</ul>

<h2>📁 Folder Structure</h2>
/src<br>
  ├── components/<br>
  │     ├── PostCard.jsx<br>
  │     └── Pagination.jsx<br>
  ├── App.jsx<br>
  └── index.js<br>
  
<h2>🔍 How It Works</h2>
<ul>
<li>On initial render, useEffect() triggers a data fetch from an external posts API.</li>
<li>The current page is tracked using useState().</li>
<li>Clicking "Next" or "Previous" changes the page number and triggers a new API request.</li>
<li>A loading message is displayed while fetching data.</li>
<li>Errors are caught and displayed using try-catch.</li>
</ul>

<h2>🧰 Customization</h2>
You can easily change the API endpoint or styling. Check the App.jsx or PostCard.jsx components for updates.

<h2>❗ Troubleshooting</h2>
Make sure the API endpoint supports pagination.<br>
If you encounter CORS issues, try using a proxy or mock API.<br>
Check your browser console for detailed error logs.<br>

<h2>📬 Contact</h2>
Have questions or suggestions?
Feel free to reach out:8391soumyanayak@gmail.com

🌟 Don't forget to ⭐ the repo if you like it!
<hr>
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
