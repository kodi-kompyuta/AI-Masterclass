// ============================================
// COURSE DATA - Beginner-Friendly AI Content
// ============================================

const courseData = {
    1: {
        title: "AI Basics: Your First Steps",
        icon: "🧠",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        intro: "Welcome to the exciting world of Artificial Intelligence! Let's start with the fundamentals.",
        sections: [
            {
                title: "🤔 What is AI?",
                content: `
                    <p>Imagine teaching a computer to think and learn like a human. That's AI in a nutshell!</p>
                    <p><strong>Artificial Intelligence (AI)</strong> is technology that enables computers to perform tasks that typically require human intelligence. This includes things like:</p>
                    <ul class="key-points">
                        <li>Recognizing your face in photos</li>
                        <li>Understanding what you say to voice assistants</li>
                        <li>Recommending videos you might like</li>
                        <li>Translating languages instantly</li>
                    </ul>
                `
            },
            {
                title: "🆚 AI vs Human Intelligence",
                content: `
                    <div class="example-box">
                        <strong>Here's a simple comparison:</strong>
                        <p><strong>Humans:</strong> We learn from experience, emotions, and creativity. We can understand context and adapt to new situations naturally.</p>
                        <p><strong>AI:</strong> Learns from data and patterns. Excels at specific tasks but needs to be taught everything explicitly.</p>
                    </div>
                    <p>Think of AI as a super-focused assistant: amazing at specific jobs, but not (yet!) a replacement for human creativity and emotional intelligence.</p>
                `
            },
            {
                title: "🎯 Types of AI",
                content: `
                    <p>There are three main types of AI you should know about:</p>
                    <div class="example-box">
                        <strong>1. Narrow AI (What we have today)</strong>
                        <p>AI that's really good at ONE specific task. Like Netflix recommendations or Spotify playlists.</p>
                    </div>
                    <div class="example-box">
                        <strong>2. General AI (The future)</strong>
                        <p>AI that can do any intellectual task a human can. We're not there yet!</p>
                    </div>
                    <div class="example-box">
                        <strong>3. Super AI (Science fiction... for now)</strong>
                        <p>AI that surpasses human intelligence in all aspects. Currently only in movies!</p>
                    </div>
                `
            }
        ],
        quiz: {
            title: "Test Your AI Basics Knowledge!",
            questions: [
                {
                    question: "What is the main goal of Artificial Intelligence?",
                    answers: [
                        "To replace all human jobs",
                        "To enable computers to perform tasks requiring human intelligence",
                        "To create robots that look like humans",
                        "To make computers faster"
                    ],
                    correct: 1
                },
                {
                    question: "Which type of AI do we currently have in everyday applications?",
                    answers: [
                        "Super AI",
                        "General AI",
                        "Narrow AI",
                        "No AI exists yet"
                    ],
                    correct: 2
                },
                {
                    question: "Which of these is an example of AI in action?",
                    answers: [
                        "A calculator doing math",
                        "A word processor spell-checking",
                        "Netflix recommending shows based on your watch history",
                        "A microwave heating food"
                    ],
                    correct: 2
                }
            ]
        }
    },
    2: {
        title: "Machine Learning 101",
        icon: "🎯",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        intro: "Discover how computers learn from experience, just like you do!",
        sections: [
            {
                title: "🎓 What is Machine Learning?",
                content: `
                    <p>Remember when you learned to ride a bike? You fell, adjusted, and got better with practice. That's exactly how Machine Learning works!</p>
                    <div class="example-box">
                        <strong>Machine Learning is:</strong>
                        <p>Teaching computers to learn from data and improve their performance over time, without being explicitly programmed for every scenario.</p>
                    </div>
                    <p>Instead of writing rules for everything, we show the computer examples and let it figure out the patterns!</p>
                `
            },
            {
                title: "📊 The Magic of Training Data",
                content: `
                    <p>Think of training data as a textbook for AI. The more examples it sees, the better it gets!</p>
                    <div class="example-box">
                        <strong>Real Example: Email Spam Filter</strong>
                        <p>1. Show AI thousands of spam emails labeled "spam"</p>
                        <p>2. Show AI thousands of good emails labeled "not spam"</p>
                        <p>3. AI learns patterns (like suspicious words, fake addresses)</p>
                        <p>4. Now it can identify new spam emails on its own!</p>
                    </div>
                `
            },
            {
                title: "🔮 Making Predictions",
                content: `
                    <p>After learning from data, AI can make predictions about new information it's never seen before.</p>
                    <ul class="key-points">
                        <li>Will this email be spam or not?</li>
                        <li>Will this customer buy this product?</li>
                        <li>Will it rain tomorrow?</li>
                        <li>Which route has less traffic?</li>
                    </ul>
                    <p>The more data it learns from, the more accurate its predictions become!</p>
                `
            }
        ],
        quiz: {
            title: "Machine Learning Quiz!",
            questions: [
                {
                    question: "What is Machine Learning?",
                    answers: [
                        "Teaching robots to walk",
                        "Computers learning from data without explicit programming",
                        "A new programming language",
                        "Teaching computers to replace teachers"
                    ],
                    correct: 1
                },
                {
                    question: "What role does training data play in Machine Learning?",
                    answers: [
                        "It slows down the computer",
                        "It provides examples for AI to learn patterns from",
                        "It's not important",
                        "It only stores information"
                    ],
                    correct: 1
                },
                {
                    question: "How does a spam filter use Machine Learning?",
                    answers: [
                        "It deletes all emails",
                        "Programmers write rules for every spam email",
                        "It learns patterns from examples of spam and non-spam emails",
                        "It asks users before filtering"
                    ],
                    correct: 2
                }
            ]
        }
    },
    3: {
        title: "Neural Networks: AI's Brain",
        icon: "🕸️",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        intro: "Explore how AI mimics the human brain to solve complex problems!",
        sections: [
            {
                title: "🧠 How Your Brain Works",
                content: `
                    <p>Your brain has about 86 billion neurons (brain cells) that work together. When you learn something new, neurons connect and form patterns.</p>
                    <div class="example-box">
                        <strong>Example:</strong>
                        <p>When you see a dog, your brain neurons fire together: "four legs" + "fur" + "wagging tail" = DOG! 🐕</p>
                    </div>
                    <p>Neural networks in AI work in a similar way, but with math instead of biology!</p>
                `
            },
            {
                title: "🔗 Artificial Neurons",
                content: `
                    <p>An artificial neural network is made of layers of "neurons" (really just math operations) that pass information forward.</p>
                    <div class="example-box">
                        <strong>How it works:</strong>
                        <p><strong>Input Layer:</strong> Receives information (like pixels in an image)</p>
                        <p><strong>Hidden Layers:</strong> Process and find patterns</p>
                        <p><strong>Output Layer:</strong> Gives the final answer</p>
                    </div>
                    <p>Each neuron learns to recognize different features, like edges, colors, or shapes!</p>
                `
            },
            {
                title: "🎯 Deep Learning",
                content: `
                    <p>Deep Learning uses neural networks with many layers (that's why it's "deep")!</p>
                    <ul class="key-points">
                        <li>More layers = can learn more complex patterns</li>
                        <li>Powers things like face recognition, voice assistants, and self-driving cars</li>
                        <li>Each layer learns increasingly sophisticated features</li>
                        <li>First layers might detect edges, deeper layers recognize faces</li>
                    </ul>
                    <p>It's called "deep" because of all those layers, not because it's mysterious!</p>
                `
            }
        ],
        quiz: {
            title: "Neural Networks Challenge!",
            questions: [
                {
                    question: "What inspired the creation of artificial neural networks?",
                    answers: [
                        "Computer circuits",
                        "The human brain",
                        "Spider webs",
                        "Phone networks"
                    ],
                    correct: 1
                },
                {
                    question: "What are the three main parts of a neural network?",
                    answers: [
                        "Input, Process, Delete",
                        "Start, Middle, End",
                        "Input, Hidden, Output layers",
                        "Brain, Body, Computer"
                    ],
                    correct: 2
                },
                {
                    question: "Why is it called 'Deep' Learning?",
                    answers: [
                        "Because it's very complicated",
                        "Because it studies deep topics",
                        "Because neural networks have many layers",
                        "Because it learns from deep data"
                    ],
                    correct: 2
                }
            ]
        }
    },
    4: {
        title: "AI in Real Life",
        icon: "🌍",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        intro: "See how AI impacts your daily life in amazing ways!",
        sections: [
            {
                title: "🗣️ Voice Assistants",
                content: `
                    <p>Siri, Alexa, Google Assistant - they all use AI!</p>
                    <div class="example-box">
                        <strong>What happens when you say "Hey Siri":</strong>
                        <p>1. <strong>Speech Recognition:</strong> Converts your voice to text</p>
                        <p>2. <strong>Natural Language Processing:</strong> Understands what you mean</p>
                        <p>3. <strong>AI Processing:</strong> Figures out the best response</p>
                        <p>4. <strong>Speech Synthesis:</strong> Speaks the answer back</p>
                    </div>
                    <p>All of this happens in seconds!</p>
                `
            },
            {
                title: "🎬 Recommendation Systems",
                content: `
                    <p>Ever wonder how Netflix knows what you'll like? That's AI at work!</p>
                    <ul class="key-points">
                        <li>Analyzes what you've watched and liked</li>
                        <li>Compares you to millions of other users</li>
                        <li>Finds patterns in viewing behavior</li>
                        <li>Suggests content you're likely to enjoy</li>
                    </ul>
                    <p>The same technology powers Spotify playlists, YouTube suggestions, and online shopping recommendations!</p>
                `
            },
            {
                title: "🚗 Self-Driving Cars",
                content: `
                    <p>Self-driving cars use multiple AI systems working together!</p>
                    <div class="example-box">
                        <strong>AI Systems in Action:</strong>
                        <p><strong>Computer Vision:</strong> "Sees" the road, other cars, pedestrians</p>
                        <p><strong>Sensor Fusion:</strong> Combines data from cameras, radar, lidar</p>
                        <p><strong>Decision Making:</strong> Decides when to brake, turn, accelerate</p>
                        <p><strong>Path Planning:</strong> Plans the best route</p>
                    </div>
                    <p>They process thousands of decisions per second to keep you safe!</p>
                `
            }
        ],
        quiz: {
            title: "Real-World AI Quiz!",
            questions: [
                {
                    question: "What AI technology helps voice assistants understand you?",
                    answers: [
                        "Video recognition",
                        "Speech recognition and natural language processing",
                        "Simple programming",
                        "Calculator algorithms"
                    ],
                    correct: 1
                },
                {
                    question: "How do recommendation systems like Netflix suggest content?",
                    answers: [
                        "Random selection",
                        "Human curators pick everything",
                        "By analyzing patterns in your viewing behavior",
                        "They guess based on your age"
                    ],
                    correct: 2
                },
                {
                    question: "What helps self-driving cars 'see' the road?",
                    answers: [
                        "GPS only",
                        "Computer vision with cameras and sensors",
                        "Radio signals",
                        "Internet connection"
                    ],
                    correct: 1
                }
            ]
        }
    },
    5: {
        title: "Your AI Future",
        icon: "🚀",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        intro: "Start your AI journey today and shape tomorrow!",
        sections: [
            {
                title: "🛠️ AI Tools You Can Use Today",
                content: `
                    <p>You don't need to be a programmer to use AI! Here are some beginner-friendly tools:</p>
                    <div class="example-box">
                        <strong>Creative AI Tools:</strong>
                        <p><strong>ChatGPT:</strong> AI assistant for writing, learning, brainstorming</p>
                        <p><strong>DALL-E / Midjourney:</strong> Create images from text descriptions</p>
                        <p><strong>Grammarly:</strong> AI-powered writing assistant</p>
                        <p><strong>Notion AI:</strong> Smart note-taking and organization</p>
                    </div>
                    <p>Start experimenting and see what AI can do for you!</p>
                `
            },
            {
                title: "⚖️ AI Ethics Matter",
                content: `
                    <p>With great power comes great responsibility! As AI becomes more powerful, we need to think about:</p>
                    <ul class="key-points">
                        <li><strong>Privacy:</strong> How is your data being used?</li>
                        <li><strong>Bias:</strong> Is the AI fair to everyone?</li>
                        <li><strong>Transparency:</strong> Do we understand how AI makes decisions?</li>
                        <li><strong>Safety:</strong> Could AI be misused?</li>
                    </ul>
                    <p>Being aware of these issues makes you a responsible AI user!</p>
                `
            },
            {
                title: "🎯 Your Next Steps",
                content: `
                    <p>Congratulations on completing the AI Masterclass! Here's how to continue your journey:</p>
                    <div class="example-box">
                        <strong>Beginner Level:</strong>
                        <p>✓ Experiment with AI tools (ChatGPT, Grammarly)</p>
                        <p>✓ Watch AI tutorials on YouTube</p>
                        <p>✓ Follow AI news and developments</p>
                    </div>
                    <div class="example-box">
                        <strong>Intermediate Level:</strong>
                        <p>✓ Learn Python programming basics</p>
                        <p>✓ Try online courses (Coursera, Udacity)</p>
                        <p>✓ Join AI communities online</p>
                    </div>
                    <div class="example-box">
                        <strong>Advanced Level:</strong>
                        <p>✓ Build your own AI projects</p>
                        <p>✓ Learn frameworks like TensorFlow</p>
                        <p>✓ Contribute to open-source AI projects</p>
                    </div>
                `
            }
        ],
        quiz: {
            title: "Final AI Masterclass Quiz!",
            questions: [
                {
                    question: "Which of these is an AI tool you can use today without programming?",
                    answers: [
                        "TensorFlow",
                        "ChatGPT",
                        "Python",
                        "JavaScript"
                    ],
                    correct: 1
                },
                {
                    question: "Why is AI ethics important?",
                    answers: [
                        "It's not important",
                        "To ensure AI is used responsibly and fairly",
                        "Only programmers need to worry about it",
                        "It slows down AI development"
                    ],
                    correct: 1
                },
                {
                    question: "What's a good first step to continue learning about AI?",
                    answers: [
                        "Build a self-driving car",
                        "Get a PhD in computer science",
                        "Experiment with beginner-friendly AI tools and watch tutorials",
                        "Wait for AI to teach itself"
                    ],
                    correct: 2
                }
            ]
        }
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================

let currentModule = null;
let quizState = {
    currentQuestion: 0,
    score: 0,
    answers: []
};

// Load progress from localStorage
let userProgress = JSON.parse(localStorage.getItem('aiMasterclassProgress')) || {
    completedModules: [],
    quizScores: {}
};

// ============================================
// NAVIGATION
// ============================================

function scrollToModules() {
    document.getElementById('modules').scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(section) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');

    // Scroll to section
    if (section === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'modules') {
        scrollToModules();
    } else if (section === 'progress') {
        showProgress();
    } else if (section === 'profile') {
        showProfile();
    }
}

// ============================================
// MODULE FUNCTIONALITY
// ============================================

function openModule(moduleId) {
    currentModule = moduleId;
    const module = courseData[moduleId];

    const lessonHTML = `
        <div class="lesson-header">
            <div class="lesson-badge" style="background: ${module.gradient}">
                ${module.icon} Module ${moduleId}
            </div>
            <h2 class="lesson-title">${module.title}</h2>
            <p class="lesson-intro">${module.intro}</p>
        </div>
        ${module.sections.map(section => `
            <div class="lesson-section">
                <h3>${section.title}</h3>
                ${section.content}
            </div>
        `).join('')}
        <div class="lesson-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            <button class="btn btn-primary" onclick="startQuiz(${moduleId})">Take Quiz 🎯</button>
        </div>
    `;

    document.getElementById('lessonContent').innerHTML = lessonHTML;
    document.getElementById('lessonModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('lessonModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// QUIZ FUNCTIONALITY
// ============================================

function startQuiz(moduleId) {
    closeModal();
    currentModule = moduleId;
    quizState = {
        currentQuestion: 0,
        score: 0,
        answers: []
    };

    const module = courseData[moduleId];
    const quizHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <div class="quiz-icon">🎯</div>
                <h2 class="quiz-title">${module.quiz.title}</h2>
                <p class="quiz-description">Test your knowledge and earn your badge!</p>
            </div>
            <div id="quizQuestions"></div>
        </div>
    `;

    document.getElementById('quizContent').innerHTML = quizHTML;
    document.getElementById('quizModal').classList.add('active');
    document.body.style.overflow = 'hidden';

    showQuestion();
}

function showQuestion() {
    const module = courseData[currentModule];
    const question = module.quiz.questions[quizState.currentQuestion];

    const questionHTML = `
        <div class="question-card">
            <div class="question-number">
                Question ${quizState.currentQuestion + 1} of ${module.quiz.questions.length}
            </div>
            <div class="question-text">${question.question}</div>
            <div class="answers">
                ${question.answers.map((answer, index) => `
                    <div class="answer-option" onclick="selectAnswer(${index})">
                        <div class="answer-letter">${String.fromCharCode(65 + index)}</div>
                        <div>${answer}</div>
                    </div>
                `).join('')}
            </div>
            <div class="lesson-actions" style="margin-top: 2rem;">
                <button class="btn btn-secondary" onclick="closeQuizModal()">Exit Quiz</button>
                <button class="btn btn-primary" id="nextQuestionBtn" disabled onclick="nextQuestion()">
                    Next Question →
                </button>
            </div>
        </div>
    `;

    document.getElementById('quizQuestions').innerHTML = questionHTML;
}

function selectAnswer(answerIndex) {
    const module = courseData[currentModule];
    const question = module.quiz.questions[quizState.currentQuestion];

    // Remove previous selections
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });

    // Mark selected answer
    const selectedOption = document.querySelectorAll('.answer-option')[answerIndex];
    selectedOption.classList.add('selected');

    // Check if correct
    if (answerIndex === question.correct) {
        selectedOption.classList.add('correct');
        quizState.score++;
    } else {
        selectedOption.classList.add('incorrect');
        // Show correct answer
        document.querySelectorAll('.answer-option')[question.correct].classList.add('correct');
    }

    // Store answer
    quizState.answers.push(answerIndex);

    // Enable next button
    document.getElementById('nextQuestionBtn').disabled = false;

    // Disable further clicks
    document.querySelectorAll('.answer-option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
}

function nextQuestion() {
    const module = courseData[currentModule];

    if (quizState.currentQuestion < module.quiz.questions.length - 1) {
        quizState.currentQuestion++;
        showQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const module = courseData[currentModule];
    const percentage = Math.round((quizState.score / module.quiz.questions.length) * 100);

    // Save progress
    if (percentage >= 70) {
        if (!userProgress.completedModules.includes(currentModule)) {
            userProgress.completedModules.push(currentModule);
        }
    }
    userProgress.quizScores[currentModule] = percentage;
    localStorage.setItem('aiMasterclassProgress', JSON.stringify(userProgress));

    // Update module progress UI
    updateModuleProgress(currentModule, percentage);

    let message = '';
    let icon = '';
    if (percentage === 100) {
        message = "Perfect score! You're an AI genius! 🌟";
        icon = "🏆";
    } else if (percentage >= 80) {
        message = "Excellent work! You've mastered this module! 🎉";
        icon = "🌟";
    } else if (percentage >= 70) {
        message = "Great job! You passed! Keep learning! 💪";
        icon = "✅";
    } else {
        message = "Good try! Review the lesson and try again! 📚";
        icon = "📖";
    }

    const resultsHTML = `
        <div class="quiz-result">
            <div class="result-icon">${icon}</div>
            <div class="result-score">${percentage}%</div>
            <div class="result-message">${message}</div>
            <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
                You got ${quizState.score} out of ${module.quiz.questions.length} questions correct!
            </p>
            <div class="lesson-actions">
                <button class="btn btn-secondary" onclick="reviewLesson(${currentModule})">Review Lesson</button>
                <button class="btn btn-primary" onclick="closeQuizModal()">Continue Learning →</button>
            </div>
        </div>
    `;

    document.getElementById('quizQuestions').innerHTML = resultsHTML;
}

function reviewLesson(moduleId) {
    closeQuizModal();
    openModule(moduleId);
}

function closeQuizModal() {
    document.getElementById('quizModal').classList.remove('active');
    document.body.style.overflow = '';
}

function updateModuleProgress(moduleId, percentage) {
    const moduleCard = document.querySelector(`.module-card[data-module="${moduleId}"]`);
    if (moduleCard) {
        const progressFill = moduleCard.querySelector('.progress-fill');
        const progressText = moduleCard.querySelector('.progress-text');

        progressFill.style.width = percentage + '%';

        if (percentage === 100) {
            progressText.textContent = 'Completed ✓';
            progressText.style.color = 'var(--color-accent-green)';
        } else if (percentage >= 70) {
            progressText.textContent = 'Passed ✓';
            progressText.style.color = 'var(--color-accent-green)';
        } else if (percentage > 0) {
            progressText.textContent = `${percentage}% - Try again`;
            progressText.style.color = 'var(--color-accent-orange)';
        }
    }
}

// ============================================
// PROGRESS & PROFILE
// ============================================

function showProgress() {
    const totalModules = Object.keys(courseData).length;
    const completedModules = userProgress.completedModules.length;
    const overallProgress = Math.round((completedModules / totalModules) * 100);

    const progressHTML = `
        <div class="lesson-header">
            <div class="lesson-badge" style="background: var(--gradient-success)">
                📊 Your Progress
            </div>
            <h2 class="lesson-title">Learning Journey</h2>
            <p class="lesson-intro">Track your AI mastery progress</p>
        </div>

        <div class="lesson-section">
            <h3>📈 Overall Progress</h3>
            <div class="module-progress" style="margin: 2rem 0;">
                <div class="progress-track" style="height: 12px;">
                    <div class="progress-fill" style="width: ${overallProgress}%;"></div>
                </div>
                <div style="text-align: center; margin-top: 1rem; font-size: 2rem; font-weight: 800; color: var(--color-primary-light);">
                    ${overallProgress}% Complete
                </div>
            </div>
            <p style="text-align: center; color: var(--color-text-muted);">
                ${completedModules} of ${totalModules} modules completed
            </p>
        </div>

        <div class="lesson-section">
            <h3>🎯 Module Scores</h3>
            ${Object.keys(courseData).map(moduleId => {
                const score = userProgress.quizScores[moduleId] || 0;
                const module = courseData[moduleId];
                return `
                    <div class="example-box" style="margin-bottom: 1rem;">
                        <strong>${module.icon} ${module.title}</strong>
                        <div class="module-progress" style="margin-top: 0.5rem;">
                            <div class="progress-track">
                                <div class="progress-fill" style="width: ${score}%;"></div>
                            </div>
                            <span class="progress-text">${score}%</span>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>

        <div class="lesson-actions">
            <button class="btn btn-primary" onclick="closeModal()" style="width: 100%;">Keep Learning! 🚀</button>
        </div>
    `;

    document.getElementById('lessonContent').innerHTML = progressHTML;
    document.getElementById('lessonModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function showProfile() {
    const totalModules = Object.keys(courseData).length;
    const completedModules = userProgress.completedModules.length;
    const averageScore = Object.values(userProgress.quizScores).length > 0
        ? Math.round(Object.values(userProgress.quizScores).reduce((a, b) => a + b, 0) / Object.values(userProgress.quizScores).length)
        : 0;

    let badge = "🌱 Beginner";
    let badgeMessage = "Just getting started!";

    if (completedModules === totalModules) {
        badge = "🏆 AI Master";
        badgeMessage = "You've completed all modules!";
    } else if (completedModules >= 3) {
        badge = "🌟 Advanced Learner";
        badgeMessage = "You're making great progress!";
    } else if (completedModules >= 1) {
        badge = "🚀 Active Learner";
        badgeMessage = "Keep up the momentum!";
    }

    const profileHTML = `
        <div class="lesson-header">
            <div class="lesson-badge" style="background: var(--gradient-fire)">
                👤 Your Profile
            </div>
            <h2 class="lesson-title">AI Learner Profile</h2>
            <p class="lesson-intro">Your achievements and stats</p>
        </div>

        <div class="lesson-section" style="text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${badge.split(' ')[0]}</div>
            <h3>${badge}</h3>
            <p style="color: var(--color-text-muted);">${badgeMessage}</p>
        </div>

        <div class="lesson-section">
            <h3>📊 Your Stats</h3>
            <div class="hero-stats">
                <div class="stat-card">
                    <div class="stat-number">${completedModules}</div>
                    <div class="stat-label">Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${averageScore}%</div>
                    <div class="stat-label">Avg Score</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${totalModules - completedModules}</div>
                    <div class="stat-label">To Go</div>
                </div>
            </div>
        </div>

        <div class="lesson-section">
            <h3>🎯 Quick Actions</h3>
            <button class="btn btn-secondary" onclick="resetProgress()" style="width: 100%; margin-bottom: 1rem;">
                Reset Progress
            </button>
        </div>

        <div class="lesson-actions">
            <button class="btn btn-primary" onclick="closeModal()" style="width: 100%;">Back to Learning 📚</button>
        </div>
    `;

    document.getElementById('lessonContent').innerHTML = profileHTML;
    document.getElementById('lessonModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
        userProgress = {
            completedModules: [],
            quizScores: {}
        };
        localStorage.setItem('aiMasterclassProgress', JSON.stringify(userProgress));

        // Reset UI
        document.querySelectorAll('.module-card').forEach((card, index) => {
            const progressFill = card.querySelector('.progress-fill');
            const progressText = card.querySelector('.progress-text');
            progressFill.style.width = '0%';
            progressText.textContent = 'Not started';
            progressText.style.color = 'var(--color-text-muted)';
        });

        closeModal();
        alert('Progress reset successfully! Start your journey again! 🚀');
    }
}

// ============================================
// SCROLL PROGRESS BAR
// ============================================

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;

    document.getElementById('progressBar').style.width = progress + '%';
});

// ============================================
// INITIALIZE ON LOAD
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    // Load saved progress
    Object.keys(userProgress.quizScores).forEach(moduleId => {
        updateModuleProgress(moduleId, userProgress.quizScores[moduleId]);
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeQuizModal();
        }
    });

    console.log('🚀 AI Masterclass loaded successfully!');
    console.log('📊 Your progress:', userProgress);
});
