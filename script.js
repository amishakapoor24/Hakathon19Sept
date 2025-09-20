 const tasks = [
            { id: 'grade-calculator', icon: '🔢', title: 'Grade Calculator', description: 'Calculate student grades.' },
            { id: 'employee-manager', icon: '👥', title: 'Employee Manager', description: 'Map, filter, and reduce data.' },
            { id: 'fetch-users', icon: '🌐', title: 'Fetch Users', description: 'Load data from a remote API.' },
            { id: 'change-text', icon: '🎨', title: 'Change Text & Style', description: 'Manipulate text content.' },
            { id: 'my-list', icon: '📝', title: 'Dynamic List', description: 'Add and remove items.' },
            { id: 'key-logger', icon: '⌨️', title: 'Key Logger', description: 'Capture keyboard events.' },
            { id: 'image-gallery', icon: '🖼️', title: 'Image Gallery', description: 'Interactive image hovers.' }
        ];

        const taskGrid = document.getElementById('task-grid');
        const pagesContainer = document.getElementById('pages-container');
        const mainView = document.getElementById('main-view');

        // --- DYNAMICALLY CREATE THE UI ---
        tasks.forEach(task => {
            // Create the card for the main grid            // Create the card for the main grid

            const cardLink = document.createElement('a');
            cardLink.href = `#${task.id}`;
            cardLink.className = 'task-card-link';
            cardLink.innerHTML = `
                <div class="p-6">
                    <h2 class="text-3xl font-bold text-white mb-2">${task.icon} ${task.title}</h2>
                    <p class="text-slate-400">${task.description}</p>
                </div>
            `;
            taskGrid.appendChild(cardLink);

            // Create the hidden page for the task
            const page = document.createElement('div');
            page.id = `${task.id}-page`;
            page.className = 'task-page';
            page.innerHTML = `
                <a href="#" class="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    Back to Home
                </a>
                <div class="bg-slate-800 bg-opacity-50 backdrop-blur-md border border-slate-700 rounded-xl p-8">
                    <h2 class="text-4xl font-bold text-white mb-6">${task.icon} ${task.title}</h2>
                    <div id="${task.id}-content"></div>
                </div>
            `;
            pagesContainer.appendChild(page);
        });

        // --- INJECT CONTENT FOR EACH TASK'S PAGE ---
        document.getElementById('grade-calculator-content').innerHTML = `...`; // Content is long, will fill below
        document.getElementById('employee-manager-content').innerHTML = `...`;
        document.getElementById('fetch-users-content').innerHTML = `...`;
        document.getElementById('change-text-content').innerHTML = `...`;
        document.getElementById('my-list-content').innerHTML = `...`;
        document.getElementById('key-logger-content').innerHTML = `...`;
        document.getElementById('image-gallery-content').innerHTML = `...`;
        // (Full content HTML is in the next block for clarity)`


        // --- ROUTING LOGIC ---
        const showPageFromHash = () => {
            const hash = window.location.hash.substring(1);
            const targetPage = document.getElementById(`${hash}-page`);

            if (targetPage) {
                mainView.style.display = 'none';
                document.querySelectorAll('.task-page').forEach(p => p.style.display = 'none');
                targetPage.style.display = 'block';
            } else {
                mainView.style.display = 'block';
                document.querySelectorAll('.task-page').forEach(p => p.style.display = 'none');
            }
        };

        window.addEventListener('hashchange', showPageFromHash);
        window.addEventListener('DOMContentLoaded', showPageFromHash); // Show correct page on initial load


        // --- INJECT TASK CONTENT HTML (Replaced '...' above) ---
        document.getElementById('grade-calculator-content').innerHTML = `<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4"><input type="number" p="Mark 1" class="custom-input grade-input" min="0" max="100"><input type="number" p="Mark 2" class="custom-input grade-input" min="0" max="100"><input type="number" p="Mark 3" class="custom-input grade-input" min="0" max="100"><input type="number" p="Mark 4" class="custom-input grade-input" min="0" max="100"><input type="number" p="Mark 5" class="custom-input grade-input" min="0" max="100"></div><button id="calculate-grade-btn" class="custom-btn w-full">Calculate</button><p id="grade-result" class="mt-4 text-2xl font-semibold text-center"></p>`;
        document.getElementById('employee-manager-content').innerHTML = `<div class="flex flex-col sm:flex-row gap-4 mb-4"><button id="show-names-btn" class="custom-btn flex-1">Names</button><button id="filter-salary-btn" class="custom-btn flex-1">Salary > 40k</button><button id="total-salary-btn" class="custom-btn flex-1">Total</button></div><div id="employee-output" class="bg-slate-900 p-4 rounded-lg min-h-[60px]"></div>`;
        document.getElementById('fetch-users-content').innerHTML = `<button id="load-users-btn" class="custom-btn w-full mb-4">Load Users</button><div id="user-container" class="grid grid-cols-1 sm:grid-cols-2 gap-4"></div>`;
        document.getElementById('change-text-content').innerHTML = `<p id="text-to-change" class="text-3xl mb-4 text-center transition-all duration-500">Hello, World!</p><button id="change-text-btn" class="custom-btn w-full">Change Me</button>`;
        document.getElementById('my-list-content').innerHTML = `<div class="flex gap-4 mb-4"><input type="text" id="list-input" placeholder="Enter new item..." class="custom-input flex-grow"><button id="add-item-btn" class="custom-btn">Add</button></div><ul id="dynamic-list" class="space-y-2"></ul>`;
        document.getElementById('key-logger-content').innerHTML = `<input type="text" id="key-logger-input" placeholder="Type here..." class="custom-input w-full"><p id="key-logger-output" class="mt-4 text-lg bg-slate-900 p-4 rounded-lg min-h-[52px] text-center"></p>`;
        document.getElementById('image-gallery-content').innerHTML = `<div class="grid grid-cols-1 lg:grid-cols-5 gap-4"><div class="lg:col-span-3 flex items-center justify-center bg-slate-900 rounded-lg p-2 h-64 lg:h-auto"><img id="large-image" src="https://placehold.co/600x400/111827/475569?text=SELECT+IMAGE" class="max-w-full max-h-full rounded-md transition-opacity duration-300"></div><div id="thumbnail-container" class="lg:col-span-2 grid grid-cols-4 gap-2"><img src="https://placehold.co/600x400/3b82f6/ffffff?text=Image+1" alt="Image 1" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/ef4444/ffffff?text=Image+2" alt="Image 2" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/22c55e/ffffff?text=Image+3" alt="Image 3" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/f59e0b/ffffff?text=Image+4" alt="Image 4" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/8b5cf6/ffffff?text=Image+5" alt="Image 5" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/ec4899/ffffff?text=Image+6" alt="Image 6" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/10b981/ffffff?text=Image+7" alt="Image 7" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/6366f1/ffffff?text=Image+8" alt="Image 8" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/d946ef/ffffff?text=Image+9" alt="Image 9" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/0ea5e9/ffffff?text=Image+10" alt="Image 10" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/f97316/ffffff?text=Image+11" alt="Image 11" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"><img src="https://placehold.co/600x400/6b7280/ffffff?text=Image+12" alt="Image 12" class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all aspect-video object-cover"></div></div>`;
        

        // --- ALL TASK LOGIC (SAME AS BEFORE, JUST RE-WIRED) ---
        // (The JavaScript logic for each task is identical to the previous version and is placed here)

        // Logic for Task 1: Grade Calculator
        const gradeInputs = document.querySelectorAll('.grade-input');
        const calculateGradeBtn = document.getElementById('calculate-grade-btn');
        const gradeResult = document.getElementById('grade-result');
        calculateGradeBtn.addEventListener('click', () => {
            let totalMarks = 0, count = 0;
            gradeInputs.forEach(input => {
                const mark = parseFloat(input.value);
                if (!isNaN(mark) && mark >= 0 && mark <= 100) { totalMarks += mark; count++; }
            });
            if (count === 0) { gradeResult.textContent = 'Please enter valid marks.'; return; }
            const average = totalMarks / count;
            let grade = 'F';
            if (average >= 90) grade = 'A'; else if (average >= 80) grade = 'B'; else if (average >= 70) grade = 'C';
            gradeResult.className = `mt-4 text-2xl font-semibold text-center grade-${grade}`;
            gradeResult.textContent = `Average: ${average.toFixed(2)} — Grade: ${grade}`;
        });

        // Logic for Task 2: Employee Manager
        const employees = [{ name: 'Alice', age: 30, salary: 50000 }, { name: 'Bob', age: 25, salary: 38000 }, { name: 'Charlie', age: 35, salary: 62000 }, { name: 'David', age: 28, salary: 41000 }];
        const employeeOutput = document.getElementById('employee-output');
        document.getElementById('show-names-btn').addEventListener('click', () => { employeeOutput.innerHTML = `<strong class="text-white">Names:</strong> ${employees.map(({ name }) => name).join(', ')}`; });
        document.getElementById('filter-salary-btn').addEventListener('click', () => { employeeOutput.innerHTML = employees.filter(e => e.salary > 40000).map(e => `<div><strong class="text-white">${e.name}</strong> - Salary: $${e.salary}</div>`).join(''); });
        document.getElementById('total-salary-btn').addEventListener('click', () => { const total = employees.reduce((sum, e) => sum + e.salary, 0); employeeOutput.innerHTML = `<strong class="text-white">Total Salary:</strong> $${total.toLocaleString()}`; });
        
        // Logic for Task 3: Fetch Users
        document.getElementById('load-users-btn').addEventListener('click', async () => {
            const userContainer = document.getElementById('user-container');
            userContainer.innerHTML = `<p class="col-span-full text-center text-slate-400">Fetching users...</p>`;
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) throw new Error('Network error');
                const users = await res.json();
                userContainer.innerHTML = users.map(user => `
                    <div class="bg-slate-700 p-5 rounded-lg border border-slate-600 text-center transition hover:border-blue-500 hover:scale-105 flex flex-col items-center">
                        <img src="https://i.pravatar.cc/80?u=${user.id}" alt="Avatar for ${user.name}" class="w-20 h-20 rounded-full mb-4 border-2 border-slate-500">
                        <h3 class="font-bold text-white">${user.name}</h3>
                        <p class="text-blue-400 text-sm">${user.email}</p>
                    </div>`).join('');
            } catch (error) { userContainer.innerHTML = `<p class="text-red-400 col-span-full text-center">${error.message}</p>`; }
        });

        // Logic for Task 4: Change Text
        document.getElementById('change-text-btn').addEventListener('click', () => {
            const textToChange = document.getElementById('text-to-change');
            textToChange.textContent = "Hello, JavaScript!";
            textToChange.style.color = '#60a5fa'; /* blue-400 */
            textToChange.style.transform = 'scale(1.1)';
        });

        // Logic for Task 5: Dynamic List
        const listInput = document.getElementById('list-input');
        const dynamicList = document.getElementById('dynamic-list');
        document.getElementById('add-item-btn').addEventListener('click', () => {
            const text = listInput.value.trim();
            if (text === '') return;
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center bg-slate-700 p-3 rounded-md animate-fadeIn';
            li.innerHTML = `<span>${text}</span><button class="remove-btn">Remove</button>`;
            dynamicList.appendChild(li);
            listInput.value = '';
        });
        dynamicList.addEventListener('click', (e) => { if (e.target.classList.contains('remove-btn')) { e.target.parentElement.remove(); } });
        
        // Logic for Task 6: Key Logger
        const keyLoggerInput = document.getElementById('key-logger-input');
        const keyLoggerOutput = document.getElementById('key-logger-output');
        keyLoggerInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { keyLoggerOutput.innerHTML = `You pressed <strong class="text-green-400">Enter!</strong>`; } 
            else { keyLoggerOutput.innerHTML = `Last key: <strong class="text-yellow-400">${e.key}</strong>`; }
        });

        // Logic for Task 7: Image Gallery
  // --- IMAGE GALLERY CONTENT ---
const imageGalleryContent = document.getElementById('image-gallery-content');

// Array of images
const images = [
  'image1.avif',
  'image2.jpg',
  'image3.webp',
  'image4.jpeg',
  'image5.jpg',
  'image6.jpeg',
  'image7.webp',
  'image8.jpeg',
  'image9.jpg',
  'image10.webp' // Last image will be clickable
];

// Generate the gallery dynamically
imageGalleryContent.innerHTML = `
<div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
  <!-- Large image display -->
  <div class="lg:col-span-3 flex items-center justify-center bg-slate-900 rounded-lg p-2 h-64 lg:h-auto">
      <img id="large-image" src="${images[0]}" alt="Large Image" class="w-full h-auto max-h-[500px] rounded-md transition-opacity duration-300 object-contain">
  </div>

  <!-- Thumbnails -->
  <div id="thumbnail-container" class="lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-2 gap-2">
      ${images.map((src, i) => `
        <img 
          src="${src}" 
          alt="Image ${i + 1}" 
          class="cursor-pointer rounded-md border-2 border-transparent hover:border-blue-500 transition-all object-cover w-full h-24 sm:h-28 md:h-32 lg:h-28"
          data-index="${i}"
        >
      `).join('')}
  </div>
</div>`;

// --- IMAGE GALLERY LOGIC ---
const thumbnailContainer = document.getElementById('thumbnail-container');
const largeImage = document.getElementById('large-image');
let currentThumbnail = null;

// Hover effect: show large image when hovering a thumbnail
thumbnailContainer.addEventListener('mouseover', (e) => {
  if (e.target.tagName !== 'IMG') return;
  largeImage.style.opacity = '0.5';
  setTimeout(() => {
    largeImage.src = e.target.src;
    largeImage.style.opacity = '1';
  }, 200);

  if (currentThumbnail) currentThumbnail.classList.remove('border-blue-500');
  e.target.classList.add('border-blue-500');
  currentThumbnail = e.target;
});


