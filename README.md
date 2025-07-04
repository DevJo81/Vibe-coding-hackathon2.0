# 📚 Peerly — Learn from Each Other

## 📝 Description
Welcome to **Peerly**! This collaborative study app was built for the Vibe Coding Hackathon 2.0 using Bolt and Supabase. Peerly helps you join or create study groups, chat, share posts, and level up your learning in a fun, modern environment. 🚀

## ✨ Features
- 👥 Join and create study groups
- 📝 Share posts, ask questions, and help others
- 💬 Real-time chat with group members
- 🔒 Secure authentication (Supabase Auth)
- 📚 Discover trending topics and sessions
- 🎨 Beautiful, modern UI

## 🚀 Live Demo
Check out the live application: [Peerly](https://peerly-c3987f.netlify.app/)

## 🎯 Pitch Deck
[Peerly](https://www.canva.com/design/DAGr5tQb6Pc/WhuAmRakWhdpaZ_6MCbKDQ/edit?utm_content=DAGr5tQb6Pc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 🛠️ Tech Stack
- Frontend: React.js, Expo (Bolt export)
- Backend: Supabase (Database, Auth, Realtime)
- Styling: Tailwind CSS (if web)
- Other Tools: Bolt, Git, VS Code

## 🏗️ Project Structure
```
Vibe-coding-hackathon2.0/
├── src/                # Source files (components, pages, supabaseClient.js)
├── .bolt/              # Bolt project config
├── package.json        # Project dependencies
├── README.md           # This file
└── ...
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
```bash
git clone https://github.com/DevJo81/Vibe-coding-hackathon2.0.git
cd Vibe-coding-hackathon2.0
```
2. Install dependencies
```bash
npm install
# or
yarn
```
3. Set up Supabase
- Create `src/supabaseClient.js` with your Supabase URL and Anon Key:
```js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```
4. Run the app
```bash
npm start
# or
expo start
```

## 👥 Team Members
- [Joan Francis] - Founder and Product Designer

## 🏆 Hackathon Achievements
- Built a collaborative study platform in record time
- Integrated real-time chat and group features
- Used Supabase for secure auth and data
- Designed a modern, user-friendly interface

## 🔮 Future Improvements
- Mobile app version for iOS/Android
- Push notifications for group activity
- Enhanced group discovery and recommendations
- In-app quizzes and AI-powered study tools
- More customization for user profiles

## 🙏 Acknowledgments
- Vibe Coding Hackathon organizers
- Bolt and Supabase teams for awesome tools
- All testers and early users for feedback
- Open source community for libraries and inspiration

---
Made with ❤️ during the Vibe Coding Hackathon 2.0

