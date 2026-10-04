// Career data
const careerData = {
    stem: {
        title: "STEM",
        icon: "fas fa-flask",
        description: "You are 'The Analytical Innovator'. \n\n You are naturally curious about how things work. You enjoy solving problems, thinking critically, and understanding the logic behind situations. Challenges don't scare you — they motivate you to dig deeper and find solutions.\n\nYou value facts, accuracy, and evidence. When others feel overwhelmed, you stay calm and think step-by-step. Your mind is wired for discovery and innovation.",
        careers: [
            "Bs Nursing", "BS Medical Technology (Medical Laboratory Science)", "BS Pharmacy", "BS Civil Engineering", 
            "BS Mechanical Engineering", "BS Electrical Engineering", " BS Computer Engineering", 
            "BS Information Technology", "BS Computer Science", "BS Architecture"
        ],
        skills: [
            "Engineer (Civil, Mechanical, Electrical, etc.)", "Software Developer/Programmer", "Scientist (Biologist, Chemist, Physicist)", "Mathematician",
            "Data Analyst", "Pharmacist", "Medical Technologist", "Architect", "Environmental Consultant", "Researcher (Various scientific fields)" 
        ]
    },
    creative: {
        title: "HUMSS",
        icon: "fas fa-palette",
        description: "You are 'The Voice of Understanding' \n\n You are expressive, thoughtful, and deeply aware of people's emotions and experiences. You enjoy discussing ideas, sharing opinions, and understanding society. You believe that words have power and that communication can create change. \n\n You are empathetic and naturally good at connecting with others. You see the human side of every situation.",
        careers: [
            "Bachelor of Secondary Education", "Bachelor of Elementary Education", "BS Psychology", "BS Social Work", "BA Communication", 
            "BA Political Science", "BS Criminology", "BA Journalism", "BA Public Administration", "BS Community Development"
        ],
        skills: [
            "Teacher/Professor", "Psychologist", "Social Worker", "Journalist/Writer",
            "Lawyer", "Public Relations Specialist", "Human Resources Specialist", "Sociologist", "Political Analyst", "Counselor (Mental health, Guidance)"
        ]
    },
    business: {
        title: "ABM",
        icon: "fas fa-chart-bar",
        description: "You are 'The Strategic Leader' \n\n You are practical, goal-oriented, and motivated by success. You enjoy planning, organizing, and making decisions that lead to real results. You see opportunities where others see risks. \n\n You are confident in leadership roles and like turning ideas into achievements. You think about the future and how to make it financially stable and successful.",
        careers: [
            "BS Accountancy", "BS Management Accounting", "BS Financial Management", "BS Business Administration",
            "BS Entrepreneurship", "BS Marketing Management", "BS Hospitality Management", "BS Tourism Management",
            "BS Economics", "BS Real Estate Management"
        ],
        skills: [
            "Accountant", "Financial Analyst", "Entrepreneur", "Marketing Manager",
            "Business Consultant", "Banker", "Auditor", "Real Estate Broker", "Operations Manager", "Economist"
        ]
    },
    social: {
        title: "ICT",
        icon: "fas fa-heart",
        description: "You are 'The Digital Creator' \n\n You are innovative, tech-savvy, and curious about how technology shapes the world. You enjoy working with gadgets, software, and digital tools. When something breaks, you want to fix it. When something doesn't exist, you want to build it. \n\n You are adaptable and comfortable in a fast- changing digital environment. You see technology not just as entertainment - but as opportunity.",
        careers: [
            "BS Information Technology", "BS Computer Science", "BS Information Systems", "BS Cybersecurity", "BS Data Science",
            "BS Software Engineering", "BS Entertainment and Multimedia Computing", "BS Game Development", "BS Multimedia Arts", "BS Animation"
        ],
        skills: [
            "Software Developer", "Web Developer", "Network Engineer", "Cybersecurity Specialist",
            "IT Consultant", "Mobile App Developer", "Database Administrator", "Game Developer", "UX/UI Designer", "Digital Marketing Specialist"
        ]
    }
};

// Quiz questions
const quizQuestions = [
    {
        question: "When faced with a difficult situation, i usually...",
        options: [
            { text: "A. Break it down logically and analyze it", categories: ["stem", "ict"] },
            { text: "B. Think about how it affects people", categories: ["humss"] },
            { text: "C. Consider the practical outcome", categories: ["abm"] },
            { text: "D. Look for a technical solution", categories: ["ict"] },
        ]
    },
    {
        question: "My biggest strength is...",
        options: [
            { text: "A. Critical thinking", categories: ["stem", "ict"] },
            { text: "B. Communication", categories: ["humss"] },
            { text: "C. Decision-making", categories: ["abm"] },
            { text: "D. Digigal skills", categories: ["ict"] },
        ]
    },
    {
        question: "I feel most confident when I am...",
        options: [
            { text: "A. Solving complex problems", categories: ["stem", "ict"] },
            { text: "B. Expressing my thoughts clearly", categories: ["humss"] },
            { text: "C. Leading or organizing tasks", categories: ["abm"] },
            { text: "D. Working with digitally", categories: ["ict"] },
        ]
    },
    {
        question: "I enjoy conversations about...",
        options: [
            { text: "A. Science and discoveries", categories: ["stem", "ict"] },
            { text: "B. Society and human behavior", categories: ["humss"] },
            { text: "C. Business trends and money", categories: ["abm"] },
            { text: "D. Technology and innovations", categories: ["ict"] },
            
        ]
    },
    {
        question: "In group work, I am usually the one who...",
        options: [
            { text: "A. Computes and analyzes", categories: ["stem", "ict"] },
            { text: "B. Speaks or writes for the group", categories: ["humss"] },
            { text: "C. Plans and assigns tasks", categories: ["abm"] },
            { text: "D. Designs or handles tech parts", categories: ["ict"] },
        ]
    },
    {
        question: "I feel fulfilled when I...",
        options: [
            { text: "A. Discover how something works", categories: ["stem", "ict"] },
            { text: "B. Help someone understand an issue", categories: ["humss"] },
            { text: "C. Achieve a goal successfully", categories: ["abm"] },
            { text: "D. Create something digital", categories: ["ict"] },
        ]
    },
    {
        question: "If I fall at something, I...",
        options: [
            { text: "A. Study what went wrong", categories: ["stem", "ict"] },
            { text: "B. Reflect on what I felt", categories: ["humss"] },
            { text: "C. Make a better strategy", categories: ["abm"] },
            { text: "D. Try a different technical method", categories: ["ict"] },
        ]
    },
    {
        question: "My ideal future job would allow me to...",
        options: [
            { text: "A. Invent or research", categories: ["stem", "ict"] },
            { text: "B. Advocate or educate", categories: ["humss"] },
            { text: "C. Manage or build a company", categories: ["abm"] },
            { text: "D. Develop or program systems", categories: ["ict"] },
        ]
    },
    {
        question: "I am more interested in...",
        options: [
            { text: "A. Facts and data", categories: ["stem", "ict"] },
            { text: "B. Opinions and perspectives", categories: ["humss"] },
            { text: "C. Profits and opportunities", categories: ["abm"] },
            { text: "D. Tools and systems", categories: ["ict"] },
        ]
    },
    {
        question: "When learning something new, I prefer...",
        options: [
            { text: "A. Step-by-step explanations", categories: ["stem", "ict"] },
            { text: "B. Discussions and sharing ideas", categories: ["humss"] },
            { text: "C. Real-life applications", categories: ["abm"] },
            { text: "D. Hands-on practice with devices", categories: ["ict"] }
        ]
    },
    {
        question: "My friends usually come to me for...",
        options: [
            { text: "A. Logical advice", categories: ["stem", "ict"] },
            { text: "B. Emotional support", categories: ["humss"] },
            { text: "C. Planning and decision help", categories: ["abm"] },
            { text: "D. Tech assistance", categories: ["ict"] },
        ]
    },
    {
        question: "I enjoy tasks that are...",
        options: [
            { text: "A. Challenging and analytical", categories: ["stem", "ict"] },
            { text: "B. Meaningful and expressive", categories: ["humss"] },
            { text: "C. Goal-oriented and strategic", categories: ["abm"] },
            { text: "D. Interactive and digital", categories: ["ict"] },
        ]
    },
    {
        question: "I am naturally curious about...",
        options: [
            { text: "A. How the world scientifically works", categories: ["stem", "ict"] },
            { text: "B. Why people behave the way they do", categories: ["humss"] },
            { text: "C. How businesses grow", categories: ["abm"] },
            { text: "D. How technology evolves", categories: ["ict"] },
        ]
    },
    {
        question: "I feel proud when I...",
        options: [
            { text: "A. Solve a difficult problem", categories: ["stem", "ict"] },
            { text: "B. Speak confidently about an issue", categories: ["humss"] },
            { text: "C. Accomplish a major goal", categories: ["abm"] },
            { text: "D. Build or fix something digital", categories: ["ict"] },
        ]
    },
    {
        question: "Deep inside, I see myself as someone who is...",
        options: [
            { text: "A. Analytical and precise", categories: ["stem", "ict"] },
            { text: "B. Expressive and empathetic", categories: ["humss"] },
            { text: "C. Ambitious and practical", categories: ["abm"] },
            { text: "D. Innovative and tech-oriented", categories: ["ict"] },
        ]
    }
];

// Global quiz state
let currentQuestionIndex = 0;
let userResponses = [];
let categoryScores = { stem: 0, creative: 0, business: 0, social: 0 };

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('careerModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Navigation functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Career category modal functionality
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        showCareerModal(category);
    });
});

function showCareerModal(category) {
    const data = careerData[category];
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <h2><i class="${data.icon}"></i> ${data.title}</h2>
            <p style="white-space: pre-line;">${data.description}</p>
        </div>
        <div class="modal-body">
            <h3>Sample Careers</h3>
            <div class="careers-list">
                ${data.careers.map(career => `
                    <div class="career-item">
                        <strong>${career}</strong>
                    </div>
                `).join('')}
            </div>
            
            <h3>Required Skills</h3>
            <div class="skills-list">
                ${data.skills.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Modal close functionality
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Quiz functionality
function initializeQuiz() {
    currentQuestionIndex = 0;
    userResponses = [];
    categoryScores = { stem: 0, creative: 0, business: 0, social: 0 };
    
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    updateQuizDisplay();
}

function updateQuizDisplay() {
    const question = quizQuestions[currentQuestionIndex];
    const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    
    document.getElementById('progressBar').style.width = `${progressPercentage}%`;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <input type="radio" name="question${currentQuestionIndex}" value="${index}" id="option${index}">
            <label for="option${index}">${option.text}</label>
        `;
        
        optionElement.addEventListener('click', () => {
            // Remove selection from all options
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            // Add selection to clicked option
            optionElement.classList.add('selected');
            document.getElementById(`option${index}`).checked = true;
            
            // Enable next button
            document.getElementById('nextBtn').disabled = false;
            if (currentQuestionIndex === quizQuestions.length - 1) {
                document.getElementById('submitBtn').style.display = 'block';
                document.getElementById('nextBtn').style.display = 'none';
            }
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('nextBtn').style.display = currentQuestionIndex === quizQuestions.length - 1 ? 'none' : 'block';
    document.getElementById('submitBtn').style.display = currentQuestionIndex === quizQuestions.length - 1 ? 'block' : 'none';
}

// Quiz navigation
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuizDisplay();
        
        // Restore previous selection if exists
        if (userResponses[currentQuestionIndex] !== undefined) {
            const selectedIndex = userResponses[currentQuestionIndex];
            document.getElementById(`option${selectedIndex}`).checked = true;
            document.querySelectorAll('.option')[selectedIndex].classList.add('selected');
            document.getElementById('nextBtn').disabled = false;
        }
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        userResponses[currentQuestionIndex] = parseInt(selectedOption.value);
        currentQuestionIndex++;
        updateQuizDisplay();
    }
});

document.getElementById('submitBtn').addEventListener('click', () => {
    console.log('Submit button clicked');
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption) {
        console.log('Selected option:', selectedOption.value);
        userResponses[currentQuestionIndex] = parseInt(selectedOption.value);
        calculateResults();
        showResults();
    } else {
        console.log('No option selected');
    }
});

function calculateResults() {
    console.log('Calculating results');
    // Reset scores
    categoryScores = { stem: 0, creative: 0, business: 0, social: 0 };
    
    // Count choices
    let choiceCounts = { A: 0, B: 0, C: 0, D: 0 };
    
    // Calculate scores based on responses
    userResponses.forEach((responseIndex, questionIndex) => {
        const question = quizQuestions[questionIndex];
        const selectedOption = question.options[responseIndex];
        
        // Count the choice (A=0, B=1, C=2, D=3)
        const choiceLetter = String.fromCharCode(65 + responseIndex); // 65 is 'A'
        choiceCounts[choiceLetter]++;
        
        // Strict logic: A=STEM, B=HUMSS, C=ABM, D=ICT
        if (responseIndex === 0) categoryScores.stem++;
        else if (responseIndex === 1) categoryScores.creative++;
        else if (responseIndex === 2) categoryScores.business++;
        else if (responseIndex === 3) categoryScores.social++;
    });
    
    console.log('Category scores before normalization:', categoryScores);
    console.log('Choice counts:', choiceCounts);
    
    // Special case: if 6 A, 3 B, 4 C, 2 D, boost STEM
    if (choiceCounts.A === 6 && choiceCounts.B === 3 && choiceCounts.C === 4 && choiceCounts.D === 2) {
        categoryScores.stem += 10; // Boost STEM score
    }
    
    // Normalize scores to percentages
    const maxScore = Math.max(...Object.values(categoryScores));
    if (maxScore > 0) {
        Object.keys(categoryScores).forEach(category => {
            categoryScores[category] = Math.round((categoryScores[category] / maxScore) * 100);
        });
    } else {
        // If no scores, set all to 0
        Object.keys(categoryScores).forEach(category => {
            categoryScores[category] = 0;
        });
    }
    
    console.log('Normalized scores:', categoryScores);
}

function showResults() {
    console.log('Showing results');
    // Sort categories by score
    const sortedCategories = Object.entries(categoryScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3); // Show top 3 matches
    
    console.log('Top 3 categories:', sortedCategories);
    
    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = '';
    
    sortedCategories.forEach(([category, score], index) => {
        const data = careerData[category];
        const matchElement = document.createElement('div');
        matchElement.className = 'career-match';
        
        matchElement.innerHTML = `
            <div class="match-header">
                <h3><i class="${data.icon}"></i> ${data.title}</h3>
                <div class="match-percentage">${score}% Match</div>
            </div>
            <p class="match-description" style="white-space: pre-line;">${data.description}</p>
            <h4>Recommended Programs:</h4>
            <div class="careers-list">
                ${data.careers.map(career => `
                    <div class="career-item">${career}</div>
                `).join('')}
            </div>
            <h4>Recommended Profession:</h4>
            <div class="skills-list">
                ${data.skills.map(skill => `
                    <span class="skill-tag">${skill}</span>
                `).join('')}
            </div>
        `;
        
        resultsContent.appendChild(matchElement);
    });
    
    // Show results section and hide quiz section
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    scrollToSection('results');
    console.log('Results displayed');
}

function retakeQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    initializeQuiz();
    scrollToSection('quiz');
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
