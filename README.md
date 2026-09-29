# 📰 Blog Application

A full-featured blog platform built with **React 19**, **Redux Toolkit**, **Tailwind CSS** and **Appwrite**. Users can sign up, log in, write rich-text posts with featured images, and manage their own content, all in a fast, responsive UI powered by **Vite**.

Built as part of my learning journey while following the **Chai aur React** series by Hitesh Choudhary.

---

## 🚀 Features

- 🔐 **Authentication**: sign up, log in and log out with Appwrite Auth
- ✍️ **Rich-text editor**: write and format posts using TinyMCE
- 🖼️ **Image uploads**: attach a featured image to every post (Appwrite Storage)
- 📝 **Full CRUD**: create, read, update and delete posts
- 🔗 **Auto-generated slugs**: URL-friendly slugs are created from the post title
- 👁️ **Post status**: mark posts as `active` or `inactive`
- 🛡️ **Protected routes**: only logged-in users can add, edit or view all posts
- 📱 **Responsive design**: works across mobile, tablet and desktop
- ⚡ **Fast dev experience**: Vite with hot module replacement

---

## 🛠 Tech Stack

| Category         | Technology                                                       |
| ---------------- | ---------------------------------------------------------------- |
| Frontend         | [React 19](https://react.dev/), [Vite](https://vitejs.dev/)      |
| Styling          | [Tailwind CSS 4](https://tailwindcss.com/)                       |
| State Management | [Redux Toolkit](https://redux-toolkit.js.org/), React Redux     |
| Routing          | [React Router](https://reactrouter.com/)                         |
| Forms            | [React Hook Form](https://react-hook-form.com/)                  |
| Rich Text Editor | [TinyMCE](https://www.tiny.cloud/) (`@tinymce/tinymce-react`)    |
| Backend (BaaS)   | [Appwrite](https://appwrite.io/) (Auth, Database, Storage)       |
| Utilities        | `html-react-parser`, `react-icons`                               |

---

## 📁 Project Structure

```
src/
├── appwrite/        # Appwrite services (auth.js, config.js)
├── components/      # Reusable UI components
│   ├── Header/      # Header and logout button
│   ├── Footer/
│   ├── Container/
│   └── post-form/   # Create / edit post form
├── conf/            # Environment variable config
├── pages/           # Route pages (Home, Login, Signup, AllPosts, AddPost, EditPost, Post)
├── store/           # Redux store and auth slice
├── App.jsx
└── main.jsx         # App entry point and router setup
```

---

## 🗺️ Routes

| Path               | Access    | Description                  |
| ------------------ | --------- | ---------------------------- |
| `/`                | Public    | Home page                    |
| `/login`           | Guests    | Log in                       |
| `/signup`          | Guests    | Create an account            |
| `/post/:slug`      | Public    | View a single post           |
| `/all-posts`       | Logged in | Browse all posts             |
| `/add-post`        | Logged in | Create a new post            |
| `/edit-post/:slug` | Logged in | Edit an existing post        |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- An [Appwrite](https://appwrite.io/) project (Cloud or self-hosted)
- A [TinyMCE](https://www.tiny.cloud/) API key

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/blog-application.git
cd blog-application
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Appwrite

In your Appwrite console:

1. Create a **Project** and add a **Web platform** (use `localhost` for development).
2. Create a **Database** with a **Collection** containing these attributes:

   | Attribute       | Type   | Required |
   | --------------- | ------ | -------- |
   | `title`         | String | Yes      |
   | `content`       | String | Yes      |
   | `featuredImage` | String | Yes      |
   | `status`        | String | Yes      |
   | `userId`        | String | Yes      |

3. Add an index on `status` (needed for filtering active posts).
4. Create a **Storage bucket** for featured images.
5. Set appropriate **permissions** on the collection and bucket so authenticated users can create, read, update and delete.

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_RTE_APIKEY=your_tinymce_api_key
```

> ⚠️ Never commit your `.env` file. Make sure it is listed in `.gitignore`.

### 5. Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the development server      |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint                        |

---

## 📸 Screenshots

> Add screenshots or a demo GIF here.

<!-- ![Home Page](./screenshots/home.png) -->

---

## 🔮 Future Improvements

- Comments and likes on posts
- Search and category filters
- User profile pages
- Draft autosave

---

## 🙏 Acknowledgements

- [Hitesh Choudhary](https://www.youtube.com/@chaiaurcode) and the **Chai aur Code** community for the React series
- [Appwrite](https://appwrite.io/) for the backend services
- [TinyMCE](https://www.tiny.cloud/) for the rich text editor

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).