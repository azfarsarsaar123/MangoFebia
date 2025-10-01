<div align="center">

# 🎬 Disney+ Hotstar Clone

<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
<img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes">
<img src="https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform">

**A stunning recreation of Disney+ Hotstar streaming platform with modern web technologies**

[🚀 Live Demo](#) | [📖 Documentation](#features) | [🛠️ Installation](#installation) | [🤝 Contributing](#contributing)

---

### ✨ **Experience the magic of streaming entertainment**

</div>

## 🌟 **Project Overview**

This project is a pixel-perfect clone of Disney+ Hotstar, one of India's leading streaming platforms. Built with modern React.js and enhanced with cloud-native deployment capabilities, this application demonstrates advanced frontend development skills and full-stack architecture knowledge.

### 🎯 **Key Highlights**

- 🎨 **Pixel-Perfect UI** - Faithfully recreated Disney+ Hotstar interface
- 📱 **Responsive Design** - Seamless experience across all devices
- 🎬 **Real Movie Data** - Integrated with TMDB API for authentic content
- ☁️ **Cloud-Ready** - Docker containerized with Kubernetes deployment
- 🚀 **Production-Grade** - Terraform infrastructure as code
- ⚡ **Modern Stack** - Built with latest React.js and best practices

---

## 🏗️ **Architecture & Tech Stack**

<div align="center">

### **Frontend Technologies**
| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | Core Framework | 18.2.0 |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Programming Language | ES6+ |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling & Animations | CSS3 |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white) | HTTP Client | 1.5.1 |

### **DevOps & Deployment**
| Technology | Purpose | Usage |
|------------|---------|-------|
| ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white) | Containerization | Application packaging |
| ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white) | Orchestration | Container management |
| ![Terraform](https://img.shields.io/badge/Terraform-623CE4?style=flat&logo=terraform&logoColor=white) | Infrastructure | AWS EKS provisioning |
| ![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazon-aws&logoColor=white) | Cloud Platform | EKS deployment |

</div>

---

## ✨ **Features**

### 🎬 **Content & Entertainment**
- **🔥 Trending Content** - Discover what's hot this week
- **🎭 Genre Categories** - Browse by Action, Comedy, Horror, Romance, Documentaries
- **⭐ Top Rated Movies** - Curated collection of highest-rated films
- **🎪 Netflix Originals** - Exclusive original content showcase
- **🔍 Search Functionality** - Find your favorite movies and shows

### 🎨 **User Experience**
- **📱 Responsive Design** - Perfect on mobile, tablet, and desktop
- **🎪 Interactive UI** - Smooth animations and hover effects
- **🌙 Modern Interface** - Clean, intuitive design language
- **⚡ Fast Loading** - Optimized performance and lazy loading
- **🎯 User Profiles** - Personalized experience and watchlists

### 🏗️ **Technical Features**
- **🔗 API Integration** - Real-time data from TMDB API
- **🎪 Component Architecture** - Modular and reusable React components
- **🎨 Custom Styling** - Hand-crafted CSS with modern design patterns
- **📦 Docker Ready** - Containerized for easy deployment
- **☸️ Kubernetes Native** - Scalable cloud deployment
- **🏗️ Infrastructure as Code** - Terraform AWS EKS setup

---

## 🚀 **Installation**

### **Prerequisites**
```bash
# Node.js (v16 or higher)
node --version

# npm or yarn
npm --version
```

### **Quick Start**
```bash
# Clone the repository
git clone https://github.com/azfarsarsaar123/MangoFebia.git

# Navigate to project directory
cd MangoFebia/HotstarClone

# Install dependencies
npm install

# Start development server
npm start
```

### **🐋 Docker Deployment**
```bash
# Build Docker image
docker build -t hotstar-clone .

# Run container
docker run -p 3000:3000 hotstar-clone
```

### **☸️ Kubernetes Deployment**
```bash
# Apply Kubernetes configurations
kubectl apply -f K8S/deployment.yml
kubectl apply -f K8S/service.yml

# Check deployment status
kubectl get pods
kubectl get services
```

### **🏗️ AWS EKS with Terraform**
```bash
# Navigate to Terraform directory
cd EKS_TERRAFORM

# Initialize Terraform
terraform init

# Plan deployment
terraform plan

# Apply infrastructure
terraform apply
```

---

## 📁 **Project Structure**

```
HotstarClone/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 components/         # React components
│   │   ├── 🎪 Banner.jsx      # Hero banner component
│   │   ├── 🎭 Genre.jsx       # Genre selection
│   │   ├── 🌐 Language.jsx    # Language selector
│   │   ├── 🏠 NavBar.jsx      # Navigation sidebar
│   │   ├── 📱 Platforms.jsx   # Platform showcase
│   │   ├── 📊 Row.jsx         # Content rows
│   │   └── 🦶 Footer.jsx      # Footer component
│   ├── 🔧 App.js              # Main application
│   ├── 🎨 App.css             # Global styles
│   ├── 🌐 request.jsx         # API configurations
│   └── 📡 tmdbAxiosInstance.js # Axios instance
├── 📁 K8S/                    # Kubernetes manifests
├── 📁 EKS_TERRAFORM/          # Terraform configs
├── 🐋 Dockerfile             # Container configuration
└── 📦 package.json           # Dependencies
```

---

## 🎨 **Component Gallery**

### **🎪 Banner Component**
- Hero section with featured content
- Dynamic background images
- Call-to-action buttons

### **🎭 Navigation System**
- Collapsible sidebar navigation
- Modern glassmorphism design
- Interactive hover effects

### **📊 Content Rows**
- Horizontal scrolling movie rows
- Genre-based categorization
- Responsive card layouts

### **🦶 Footer Section**
- Multi-column layout
- Social media integration
- App download links

---

## 🔧 **API Integration**

### **TMDB API Endpoints**
```javascript
const API_ENDPOINTS = {
  trending: '/trending/all/week',
  topRated: '/movie/top_rated',
  actionMovies: '/discover/movie?with_genres=28',
  comedyMovies: '/discover/movie?with_genres=35',
  horrorMovies: '/discover/movie?with_genres=27',
  // ... more endpoints
}
```

### **Environment Variables**
```bash
# Create .env file
REACT_APP_TMDB_API_KEY=your_api_key_here
REACT_APP_API_BASE_URL=https://api.themoviedb.org/3
```

---

## 🚀 **Deployment Options**

### **1. 🌐 Vercel/Netlify (Frontend Only)**
```bash
# Build for production
npm run build

# Deploy to your preferred platform
```

### **2. 🐋 Docker Container**
```yaml
# docker-compose.yml
version: '3.8'
services:
  hotstar-clone:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

### **3. ☸️ Kubernetes Cluster**
```yaml
# Horizontal Pod Autoscaling
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: hotstar-clone-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: hotstar-clone
  minReplicas: 2
  maxReplicas: 10
```

---

## 🛠️ **Development**

### **Available Scripts**
```bash
npm start          # Development server
npm test           # Run test suite
npm run build      # Production build
npm run eject      # Eject from Create React App
```

### **Code Quality**
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Jest** - Unit testing framework

---

## 🤝 **Contributing**

We welcome contributions! Here's how you can help:

### **🐛 Bug Reports**
1. Check existing issues
2. Create detailed bug report
3. Include screenshots/logs

### **✨ Feature Requests**
1. Discuss in issues first
2. Follow coding standards
3. Add tests for new features

### **🔧 Development Workflow**
```bash
# Fork the repository
git clone https://github.com/your-username/MangoFebia.git

# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and commit
git commit -m "Add amazing feature"

# Push to branch
git push origin feature/amazing-feature

# Open Pull Request
```

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **Disney+ Hotstar** - Original design inspiration
- **TMDB API** - Movie and TV show data
- **React Community** - Amazing ecosystem and tools
- **Open Source Contributors** - Making this project possible

---

## 📞 **Contact & Support**

<div align="center">

**Developer:** Azfar Sarsaar

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/azfarsarsaar123)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](#)

**⭐ Star this repository if you found it helpful!**

</div>

---

<div align="center">

### 🎬 **"Entertainment at its finest - Recreated with passion"**

*Made with ❤️ by Azfar Sarsaar*

</div>