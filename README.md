# Ocean's Overlook - Endangered Animals Conservation Website

A comprehensive web platform dedicated to raising awareness about endangered animals through education, gamification, and e-commerce. Every purchase supports wildlife conservation efforts worldwide.

## 🌟 Features

### 🏠 Home Page
- **Hero Section**: Compelling introduction to wildlife conservation
- **Features Overview**: Three main pillars of the platform
- **Statistics**: Impact metrics and conservation achievements
- **Call-to-Action**: Direct links to explore animals and take quizzes

### 🦁 Endangered Animals Database
- **Comprehensive Information**: Detailed profiles of endangered species
- **Search & Filtering**: Find animals by name, category, or conservation status
- **Conservation Details**: Threats, population numbers, and protection efforts
- **Interactive Cards**: Hover effects and detailed information display

### 🎯 Gamified Learning
- **Interactive Quizzes**: Multiple-choice questions about endangered animals
- **Scoring System**: Track performance and earn badges
- **Progress Tracking**: Real-time score, time, and streak monitoring
- **Achievement System**: Unlock badges based on performance
- **Educational Explanations**: Learn from detailed answer explanations

### 🛍️ Conservation Shop
- **Eco-Friendly Products**: Sustainable merchandise supporting conservation
- **Shopping Cart**: Full e-commerce functionality
- **Conservation Impact**: Each product shows its environmental benefit
- **Category Filtering**: Browse by product type
- **Trust Indicators**: Quality guarantees and conservation commitments

## 🚀 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router for navigation
- **Build Tool**: Create React App

## 🎨 Design System

### Color Palette
- **Ocean**: Blue tones for marine themes
- **Forest**: Green tones for terrestrial themes  
- **Coral**: Red tones for alerts and highlights
- **Neutral**: Gray scale for text and backgrounds

### Components
- **Cards**: Consistent product and animal information display
- **Buttons**: Primary and secondary action buttons
- **Navigation**: Responsive header with mobile menu
- **Forms**: Search, filtering, and quiz interfaces

## 📱 Responsive Design

- **Mobile First**: Optimized for all screen sizes
- **Touch Friendly**: Mobile-optimized interactions
- **Progressive Enhancement**: Enhanced features on larger screens
- **Accessibility**: Screen reader friendly and keyboard navigation

## 🛠️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oceansoverlook
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build files will be created in the `build/` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Main page components
│   ├── Home.tsx        # Landing page
│   ├── Animals.tsx     # Endangered animals database
│   ├── Quiz.tsx        # Interactive quiz system
│   └── Shop.tsx        # E-commerce shop
├── App.tsx             # Main app component with routing
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Key Features Implementation

### Quiz System
- **Question Management**: Structured question format with explanations
- **Scoring Algorithm**: Points, streaks, and accuracy tracking
- **Badge System**: Achievement-based rewards
- **Progress Persistence**: Session-based progress tracking

### E-commerce
- **Product Catalog**: Comprehensive product database
- **Shopping Cart**: Full cart functionality with quantity management
- **Conservation Impact**: Each product shows environmental benefits
- **Responsive Design**: Mobile-optimized shopping experience

### Animal Database
- **Rich Information**: Scientific names, habitats, threats, and facts
- **Search & Filter**: Advanced filtering by multiple criteria
- **Conservation Status**: IUCN Red List classifications
- **Interactive Elements**: Hover effects and detailed information

## 🌍 Conservation Impact

- **95% of Proceeds**: Direct funding for wildlife protection
- **Habitat Restoration**: Support for ecosystem rehabilitation
- **Anti-Poaching**: Funding for wildlife protection programs
- **Research Support**: Scientific study funding
- **Education**: Public awareness and conservation education

## 🔧 Customization

### Adding New Animals
1. Update the `animals` array in `Animals.tsx`
2. Include all required fields (name, status, threats, etc.)
3. Add appropriate emoji or image representation

### Adding New Quiz Questions
1. Update the `questions` array in `Quiz.tsx`
2. Ensure correct answer indexing (0-based)
3. Add detailed explanations for learning value

### Adding New Products
1. Update the `products` array in `Shop.tsx`
2. Include conservation impact metrics
3. Add appropriate tags and categories

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Framework preset: Create React App
3. Build command: `npm run build`

### AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload `build/` contents to S3 bucket
3. Configure CloudFront distribution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Wildlife Conservation Organizations**: For providing accurate information
- **IUCN Red List**: For conservation status classifications
- **Open Source Community**: For the amazing tools and libraries
- **Conservationists Worldwide**: For their tireless work protecting wildlife

## 📞 Support

For questions or support:
- **Email**: support@oceansoverlook.com
- **Conservation Hotline**: 1-800-SAVE-WILD
- **GitHub Issues**: Report bugs or request features

---

**Together, we can make a difference for endangered species worldwide.** 🌍🦁🐬🦅
