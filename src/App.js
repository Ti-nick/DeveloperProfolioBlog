import { Routes, Route } from "react-router-dom";
import { Layout } from "./routes/Layout";
import { Home } from "./routes/Home";
import { AboutPage } from "./routes/AboutPage";
import { ProjectsPage } from "./routes/ProjectsPage";
import { BlogPage } from "./routes/BlogPage";
import { ContactPage } from "./routes/ContactPage";
import { NotFound } from "./routes/NotFound";
import ScrollToTop from "./routes/ScrollToTop";
import { LoginPage } from "./routes/LoginPage";
import AddBlog from "./routes/AddBlog";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
