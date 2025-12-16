# 🎪 Reditto

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.2.0-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**An opinionated Reddit client built with React and Bootstrap**

*A clean, focused take on the Reddit browsing experience*

[Report Bug](https://github.com/AkshayKappala/reditto/issues) · [Request Feature](https://github.com/AkshayKappala/reditto/issues)

</div>

---

## 📋 What is Reditto? 

**Reditto** is an opinionated Reddit client that reimagines the Reddit browsing experience with a clean, streamlined interface. Built with React 18 and Bootstrap 5, it strips away the clutter to focus on what matters most: content discovery and community engagement.

This **frontend-focused** client showcases a deliberate take on Reddit's core features—curated post feeds, intuitive voting, community highlights, and distraction-free navigation—all rendered with modern React architecture. 

### 🎯 Design Philosophy

- **Clean First** - Minimal distractions, maximum content
- **Component-Driven** - Modular, maintainable React architecture  
- **Responsive by Default** - Mobile-first Bootstrap grid system
- **Familiarity Meets Fresh** - Reddit's UX patterns with modern polish

## ✨ Features

### 🎨 Refined UI Components

- **📰 Curated Feed** - Clean post cards with optimal information density
- **👍 Instant Voting** - One-click upvote/downvote with live counters
- **🏷️ Community Badges** - Visual subreddit identifiers with avatars
- **🔍 Smart Search** - Centralized header search bar
- **🔥 Content Filters** - Hot, New, Top, Rising discovery modes
- **⏰ Time-Based Sorting** - Today, Week, Month, Year, All Time filters
- **💬 Quick Actions** - Comment, Share, Save, Hide, Report
- **👤 User Controls** - Dropdown menu with Dark Mode, Help, Policies
- **📱 Mobile Optimized** - Responsive layout adapts to any screen size

### ⚡ Technical Highlights

- ⚛️ **React 18.2** - Concurrent rendering and modern React patterns
- 🎨 **Bootstrap 5.2 + React Bootstrap** - Component-based styling
- 🧩 **Modular Architecture** - Reusable, composable components
- 🎯 **Bootstrap Icons** - Consistent iconography throughout
- 🧪 **Testing Ready** - Jest and React Testing Library configured
- 🚀 **Production Optimized** - Create React App build system

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2.0 | Core UI library |
| React Bootstrap | 2.5.0 | Bootstrap components for React |
| Bootstrap | 5.2.0 | CSS framework & styling |
| Bootstrap Icons | 1.9.1 | Icon library |
| React Scripts | 5.0.1 | Build tooling (CRA) |
| Jest & Testing Library | Latest | Unit testing |

## 🚀 Quick Start

### Prerequisites

- Node.js v14 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/AkshayKappala/reditto.git
cd reditto
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```

The app will automatically open at **[http://localhost:3000](http://localhost:3000)** 🎉

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` folder, ready for deployment.

## 📁 Project Structure

```
reditto/
├── public/
│   ├── index.html          # HTML template
│   └── styles.css          # Global styles & theme
├── src/
│   ├── components/
│   │   ├── App. jsx         # Root component
│   │   ├── CommunityTitle.jsx  # Subreddit display
│   │   ├── Feed/
│   │   │   ├── Feed. jsx            # Main feed container
│   │   │   ├── PostCard.jsx        # Individual post card
│   │   │   ├── FeedFilterBar. jsx   # Hot/New/Top filters
│   │   │   ├── CardComponents/
│   │   │   │   ├── CardLeftBar.jsx      # Voting sidebar
│   │   │   │   ├── CardHeader.jsx       # Post metadata
│   │   │   │   ├── CardBody.jsx         # Post content/image
│   │   │   │   ├── CardFooter. jsx       # Action buttons
│   │   │   │   └── CardFooterButton.jsx # Individual action button
│   │   │   └── FeedFilterComponents/
│   │   │       ├── FeedFilterButton.jsx   # Filter buttons
│   │   │       └── FeedFilterDropdown.jsx # Time filter dropdown
│   │   └── Topbar/
│   │       ├── Topbar.jsx              # Navigation bar
│   │       ├── HeaderSearchBar. jsx     # Search input
│   │       ├── HeaderLoginButtons.jsx  # Login/Signup buttons
│   │       └── HeaderUserDropdown.jsx  # User menu
│   ├── images/             # Image assets
│   └── index.js            # Application entry point
├── package. json
└── README.md
```

## 🎯 Component Breakdown

### App Component

The root component that assembles the main layout:

```javascript
import React from "react";
import Feed from "./Feed/Feed";
import Topbar from "./Topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Feed />
    </div>
  );
}

export default App;
```

### PostCard Component

Displays individual Reddit-style posts with voting, metadata, content, and actions:

```javascript
function PostCard() {
  return (
    <Card>
      <Container>
        <Row>
          <CardLeftBar />      {/* Upvote/Downvote */}
          <Col md={11}>
            <CardHeader />     {/* r/community, user, time */}
            <CardBody />       {/* Post image */}
            <CardFooter />     {/* Comment, Share, Save */}
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
```

### Feed Component

Renders the main feed with filters and post cards:

```javascript
function Feed() {
  return (
    <Stack gap={2} className="col-md-4 mx-auto mt-3">
      <FeedFilterBar />  {/* Hot, New, Top, Rising */}
      <PostCard />
      <PostCard />
    </Stack>
  );
}
```

### Topbar Component

Navigation bar with branding, search, and user controls:

```javascript
function Topbar() {
  return (
    <Navbar variant="light" bg="light">
      <Container fluid>
        <Navbar.Brand>
          <i class="bi bi-suit-club-fill"></i> Reditto
        </Navbar.Brand>
        <Navbar. Text className="me-auto">
          <i class="bi bi-house-door"></i>Home
        </Navbar.Text>
        <HeaderSearchBar />
        <HeaderLoginButtons />
        <HeaderUserDropdown />
      </Container>
    </Navbar>
  );
}
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs dev server at localhost:3000 with hot reload |
| `npm test` | Launches Jest test runner in interactive watch mode |
| `npm run build` | Creates optimized production build in `build/` folder |
| `npm run eject` | Ejects from CRA (⚠️ **irreversible**) |

## 🔧 Customization

### Adding New Post Cards

Import and use the `PostCard` component:

```javascript
import PostCard from "./Feed/PostCard";

function Feed() {
  return (
    <Stack gap={2}>
      <PostCard />
      <PostCard />
      <PostCard />  {/* Add more posts */}
    </Stack>
  );
}
```

### Customizing Feed Filters

Modify the filter buttons in `FeedFilterBar.jsx`:

```javascript
<FeedFilterButton icon="bi-fire" title="Hot" />
<FeedFilterButton icon="bi-stars" title="New" />
<FeedFilterButton icon="bi-trophy" title="Best" />  {/* Custom filter */}
```

### Styling with Bootstrap Classes

All components use Bootstrap utility classes.  Example from `PostCard`:

```javascript
<Stack gap={2} className="col-md-4 mx-auto mt-3">
  {/* col-md-4: 4-column width on medium+ screens */}
  {/* mx-auto: center horizontally */}
  {/* mt-3: margin-top spacing */}
</Stack>
```

### Custom CSS

Global styles are defined in `public/styles.css`:

```css
body {
    background-color: #dae0e6;  /* Reddit-style grey background */
}

.FeedFilter {
    background-color: white;
    color: grey;
    font-weight: 600;
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Vercel automatically detects Create React App and configures everything.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build/` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://akshaykappala.github. io/reditto",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
# Option 1: Kill the process
npx kill-port 3000

# Option 2: Use a different port
PORT=3001 npm start
```

### Module Not Found Errors

```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock. json
npm install
```

### Search Bar Positioning Issue

The search bar uses absolute positioning (see `HeaderSearchBar.jsx`). For responsive improvements:

```javascript
// Replace absolute positioning with flexbox
<Form className="mx-auto" style={{ width: "30%" }}>
  <Form.Control type="search" placeholder="Search Reditto" />
</Form>
```

### Bootstrap Icons Not Showing

Ensure Bootstrap Icons CDN is loaded in `public/index.html`:

```html
<link rel="stylesheet" 
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
```

### Build Fails to Minify

Check the [CRA troubleshooting guide](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 🚧 Future Enhancements

Potential features to evolve the client:

- 🔌 Reddit API integration for live data
- 🗃️ State management (Redux/Context API)
- 🔄 Dynamic post loading from real subreddits
- 💾 Local storage for user preferences
- 🌙 Functional dark mode toggle
- 📱 Mobile-optimized navigation drawer
- 🔐 OAuth authentication with Reddit
- 📡 Real-time post updates
- ♾️ Infinite scroll pagination
- 🎨 Customizable themes

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [React Bootstrap Components](https://react-bootstrap.github.io/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.2/)
- [Create React App Docs](https://create-react-app.dev/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Reddit API Documentation](https://www.reddit.com/dev/api/)

## 📄 License

This project is licensed under the **MIT License** - see the [License](https://github.com/AkshayKappala/reditto/blob/master/License) file for details.

## 👤 Author

**Akshay Kappala**

- GitHub:  [@AkshayKappala](https://github.com/AkshayKappala)
- Project: [github.com/AkshayKappala/reditto](https://github.com/AkshayKappala/reditto)

## 🙏 Acknowledgments

- Inspired by [Reddit](https://reddit.com)'s community-driven design
- Built with [Create React App](https://create-react-app.dev/)
- Styled with [React Bootstrap](https://react-bootstrap.github.io/)

---

<div align="center">

Made with ❤️ by [Akshay Kappala](https://github.com/AkshayKappala)

**⭐ Star this repo if you found it helpful!**

</div>
