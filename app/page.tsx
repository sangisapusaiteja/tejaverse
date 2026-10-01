import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  return (
    <>
      <Hero postCount={posts.length} />
      <Projects />
      <Blog posts={posts} />
      <About />
      <Contact />
    </>
  );
}
