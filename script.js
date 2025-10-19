// ===== SECTION MANAGEMENT =====

/**
 * Show/hide sections based on navigation
 */
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Handle special case for the dedicated project page ID
    const sectionId = sectionName === 'pet-project' ? 'pet-project-section' : `${sectionName}-section`;
    const selectedSection = document.getElementById(sectionId);
    
    // Show selected section
    if (selectedSection) {
        selectedSection.classList.add('active');
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Set home as default on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});


// ===== PROJECT DATA =====

const projectData = {
    1: {
        title: '📊 Real Estate Mortgage Analysis',
        date: 'Dec 2024 – Jan 2025',
        overview: 'Built a comprehensive mortgage analysis model processing 27K+ location records with 80+ features. Implemented data cleaning, feature engineering, and predictive modeling to identify regional lending opportunities.',
        features: [
            'Processed 27K+ records with <3% missing values',
            'Created 3 new metrics: bad debt ratio, population density, median age',
            'Linear Regression Model: R² = 0.735 (±$300 accuracy)',
            'Identified 2-3x regional debt variations',
            'Identified regional lending opportunities with differentiated strategies'
        ],
        code: `import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# Load & clean data
df = pd.read_csv('mortgage_data.csv')
df = df.dropna(subset=['loan_amount', 'monthly_payment'])

# Feature engineering
df['bad_debt_ratio'] = df['defaulted'] / df['total_loans']
df['population_density'] = df['population'] / df['area']

# Prepare features
X = df[['population_density', 'median_age', 'income_level']]
y = df['monthly_mortgage']

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

// ... (rest of the code snippet) ...`,
        technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Tableau', 'Matplotlib']
    },
    2: {
        title: '💼 Science-Qtech Employee Performance Mapping',
        date: 'Feb 2024 – Mar 2024',
        overview: 'Designed and optimized a comprehensive relational database schema for HR analytics with advanced SQL reports using complex queries for employee performance, compensation analysis, and departmental efficiency.',
        features: [
            'Relational Database Schema design with data integrity',
            'Advanced SQL: JOINs, subqueries, window functions (RANK, MAX OVER)',
            'Performance optimization through indexing & stored procedures',
            'Real-time budget planning & HR analytics',
            'Experience-based ranking system implementation'
        ],
        code: `-- Performance ranking by department
SELECT 
    e.employee_id,
    e.name,
    d.department_name,
    e.salary,
    e.performance_score,
    RANK() OVER (PARTITION BY d.department_id 
                 ORDER BY e.performance_score DESC) as dept_rank,
    MAX(e.salary) OVER (PARTITION BY d.department_id) as max_dept_salary,
    AVG(e.salary) OVER (PARTITION BY d.department_id) as avg_dept_salary
FROM employees e
JOIN departments d ON e.dept_id = d.department_id
WHERE e.active = 1
ORDER BY d.department_name, dept_rank;`,
        technologies: ['SQL', 'Database Design', 'Indexing', 'Stored Procedures']
    },
    3: {
        title: '📈 DigiComp Sales Dashboard',
        date: 'Aug 2023 – Sep 2023',
        overview: 'Designed and deployed an interactive Tableau dashboard centralizing key Sales KPIs with advanced analytics through geospatial maps, scatter plots, and highlight tables for data-driven decision-making.',
        features: [
            'Interactive Tableau dashboard with multiple visualizations',
            'KPI tracking: Sales, Profit, Discount metrics',
            'Geospatial maps for regional analysis',
            'Scatter plots & highlight tables for profitability tracking',
            'Data blending between Orders and Returns datasets',
            'Product return rate analysis by category'
        ],
        code: `-- Sales Performance Analysis
SELECT 
    p.product_name,
    c.category_name,
    SUM(o.quantity) as total_sales,
    SUM(o.quantity * o.unit_price) as revenue,
    SUM(CASE WHEN r.return_id IS NOT NULL THEN 1 ELSE 0 END) as returns,
    ROUND(SUM(CASE WHEN r.return_id IS NOT NULL THEN 1 ELSE 0 END) * 100.0 
          / SUM(o.quantity), 2) as return_rate
FROM orders o
LEFT JOIN returns r ON o.order_id = r.order_id
JOIN products p ON o.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
GROUP BY p.product_name, c.category_name
ORDER BY revenue DESC;`,
        technologies: ['Tableau', 'Data Visualization', 'Analytics', 'KPI Tracking']
    },
    4: {
        title: 'Movie Recommendation System',
        date: 'July 2024 - Sep 2024',
        overview: 'Developed an intelligent movie recommendation system using Python and Scikit-learn with a Streamlit UI, enabling personalized content discovery',
        features: [
            'Interactive movie discovery interface with dynamic filters for genre, director, and rating',
            'Personalized recommendations powered by Scikit-learn models based on user behavior',
            'Intelligent fallback search suggesting similar titles for unmatched queries',
            'Real-time content relevance scoring and user engagement tracking',
            'Streamlit-based web interface for seamless, interactive deployment',
        ],
        code: `import streamlit as st
import pandas...`,
        technologies: ['Python','Scikit-Learn', 'Pandas', 'Cosine Similarity', 'Streamlit']
    },
    // ===== NEW PROJECT DATA (ID 5) FOR INTERNAL PAGE VIEW =====
    5: {
        title: '🐶 PET BREED AND HEALTH IDENTIFIER',
        date: 'Academic Project',
        // !! IMPORTANT: Replace this placeholder with your actual image URL !!
        image: '2.jpeg', // Example: 'https://yourdomain.com/images/pet_breed_health_identifier.png'
        overview: 'AI-powered application using deep learning and computer vision to identify pet breeds and detect health issues from images. Implemented transfer learning with VGG16 achieving 93% accuracy.',
        // Structured sections for the full page view
        sections: [
            {
                heading: 'Model Development',
                icon: 'fas fa-brain',
                details: [
                    'Built and compared multiple CNN architectures (ResNet, Inception, VGG16) with accuracies ranging from 75% to 93%',
                    'Implemented transfer learning to reduce training time by 60% while maintaining high performance',
                    'Achieved **95%+ precision** for common breeds and **80% recall** for health condition detection'
                ]
            },
            {
                heading: 'Data Engineering',
                icon: 'fas fa-database',
                details: [
                    'Preprocessed diverse datasets from Oxford/Stanford with standardized image resizing, normalization, and feature extraction',
                    'Applied data augmentation and dimensionality reduction (PCA, t-SNE) to improve model robustness',
                    'Engineered breed-specific and health-specific feature fusion for enhanced classification accuracy'
                ]
            },
            {
                heading: 'Full-Stack Development & Deployment',
                icon: 'fas fa-server',
                details: [
                    'Developed **RESTful API** using Node.js/Express for image upload and real-time inference',
                    'Integrated **TensorFlow.js** models into responsive web application with optimized inference pipeline',
                    'Deployed scalable cloud solution with monitoring and security protocols'
                ]
            },
            {
                heading: 'Evaluation',
                icon: 'fas fa-chart-bar',
                details: [
                    'Conducted rigorous validation using accuracy, precision, recall, F1-score, and confusion matrices',
                    'Optimized hyperparameters and model selection based on inference speed vs. accuracy trade-offs'
                ]
            }
        ],
        code: `// Example Inference Code Snippet (TensorFlow.js)
async function predictPet(imageElement) {
    const model = await tf.loadLayersModel('file://path/to/vgg16_model.json');
    let tensor = tf.browser.fromPixels(imageElement)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(tf.scalar(255))
        .expandDims();
    
    const predictions = model.predict(tensor);
    
    // Logic to interpret results for breed and health
    // ...
    return predictions;
}`,
        technologies: ['Deep Learning', 'CNNs', 'Transfer Learning', 'Node.js', 'TensorFlow.js', 'Data Augmentation', 'Cloud Deployment']
    },
};

// ===== MODAL FUNCTIONS (Used for projects 1-4) =====

/**
 * Open project modal with details (for projects 1-4)
 */
function openProjectModal(projectNum) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const project = projectData[projectNum];

    if (!project) return;

    let techStackHtml = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    let featuresHtml = project.features.map(feature => `<li><i class="fas fa-check-circle success-icon"></i> ${feature}</li>`).join('');

    // Determine the image source. Use a default image for modals.
    const imageSrc = project.image || 'placeholder-image-url.jpg'; 

    modalContent.innerHTML = `
        <button class="close-button" onclick="closeProjectModal()">&times;</button>
        <div class="modal-header">
            <h3>${project.title}</h3>
            <p class="project-date">${project.date}</p>
        </div>

        <div class="project-image-container">
            <img src="${imageSrc}" alt="${project.title} screenshot" class="project-modal-image">
        </div>
        
        <div class="modal-body">
            
            <div class="modal-section">
                <h4><i class="fas fa-code-branch"></i> Tech Stack</h4>
                <div class="tech-stack">${techStackHtml}</div>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-eye"></i> Overview</h4>
                <p>${project.overview}</p>
            </div>

            <div class="modal-section">
                <h4><i class="fas fa-trophy"></i> Key Achievements</h4>
                <ul class="features-list">${featuresHtml}</ul>
            </div>
            
            <div class="modal-section">
                <h4><i class="fas fa-terminal"></i> Code Snippet</h4>
                <pre><code class="code-section">${project.code.trim()}</code></pre>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

/**
 * Close project modal
 */
function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}


// ===== NEW FUNCTION TO SHOW INTERNAL PROJECT PAGE (FOR PROJECT 5) =====

/**
 * Renders project details (Project 5) into the dedicated section and displays it.
 */
function showProjectPage(projectNum) {
    const project = projectData[projectNum];
    const projectSection = document.getElementById('pet-project-section');
    const contentContainer = document.getElementById('pet-project-content');

    if (!project || projectNum !== 5) {
        // Fallback for unexpected case
        if (project) openProjectModal(projectNum);
        return;
    }

    // 1. Build the dynamic HTML content
    let techStackHtml = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

    let sectionsHtml = project.sections.map(section => {
        const detailsHtml = section.details.map(detail => `
            <li><i class="fas fa-check-circle success-icon"></i> ${detail}</li>
        `).join('');
        return `
            <div class="detail-block">
                <h4><i class="${section.icon}"></i> ${section.heading}</h4>
                <ul class="features-list">${detailsHtml}</ul>
            </div>
        `;
    }).join('');


    contentContainer.innerHTML = `
        <div class="project-header-page">
            <h2>${project.title}</h2>
            <p class="project-date">${project.date}</p>
        </div>

        <div class="project-page-grid">
            <div class="grid-item">
                <img src="${project.image}" alt="${project.title} screenshot" class="project-main-image">
            </div>
            <div class="grid-item">
                <div class="detail-block">
                    <h4><i class="fas fa-info-circle"></i> Overview</h4>
                    <p>${project.overview}</p>
                </div>
                <div class="detail-block">
                    <h4><i class="fas fa-code-branch"></i> Tech Stack</h4>
                    <div class="tech-stack">${techStackHtml}</div>
                </div>
            </div>
        </div>
        
        <hr class="project-divider">

        <div class="project-achievements">
            <h3><i class="fas fa-trophy"></i> Key Achievements and Technical Details</h3>
            <div class="technical-details-grid">
                ${sectionsHtml}
            </div>
        </div>

        <hr class="project-divider">

        <div class="code-snippet-page">
            <h3><i class="fas fa-terminal"></i> Core Code Snippet</h3>
            <pre><code class="code-section">${project.code.trim()}</code></pre>
        </div>
    `;

    // 2. Show the dedicated project section
    showSection('pet-project'); // This will map to 'pet-project-section'
}


// Helper to add icons to the feature list for better visuals (requires updated CSS)
document.addEventListener('DOMContentLoaded', () => {
    // Add success icon style if not already in CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .features-list { list-style: none; padding-left: 0; }
        .features-list li { margin-bottom: 10px; display: flex; align-items: flex-start; }
        .success-icon { color: var(--success); margin-right: 10px; margin-top: 5px; }
        .project-image-container { margin-bottom: 20px; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        .project-modal-image { width: 100%; height: auto; object-fit: cover; }
        .modal-section h4 { 
            display: flex; 
            align-items: center; 
            color: var(--primary); 
            margin-bottom: 15px;
            font-size: 1.2rem;
        }
        .modal-section h4 i { 
            margin-right: 10px; 
            color: var(--accent);
        }
        .modal-body { max-height: 70vh; overflow-y: auto; }
        .modal-body::-webkit-scrollbar { width: 8px; }
        .modal-body::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.3); border-radius: 10px; }
        .modal-body::-webkit-scrollbar-track { background: transparent; }
    `;
    document.head.appendChild(style);
});


// ===== TOAST NOTIFICATION EXAMPLE (if needed) =====

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'toast-notification';
    
    // Inline styling for the toast, for simplicity
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Smooth scroll to element
 */
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}