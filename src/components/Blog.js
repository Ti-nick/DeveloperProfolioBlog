// src/components/Blog.jsx
import { useEffect, useMemo, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Calendar, Clock, ChevronLeft, ChevronRight, User } from "lucide-react";

export function Blog() {
  const [posts, setPosts] = useState([]); // Firestore posts
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Subscribe to BlogPost collection
  useEffect(() => {
    setLoading(true);
    setErr("");

    // Order by 'date' (YYYY-MM-DD string). You could also use: orderBy("createdAt", "desc")
    const q = query(collection(db, "BlogPost"), orderBy("date", "desc"));

    const unsub = onSnapshot(
      q,
      (snap) => {
        const data = snap.docs.map((d) => ({
          firestoreId: d.id, // Firestore doc id
          ...d.data(),
        }));
        setPosts(data);
        // keep index in range if posts length changed
        setCurrentIndex((i) =>
          data.length ? Math.min(i, data.length - 1) : 0
        );
        setLoading(false);
      },
      (e) => {
        setErr(e?.message || "Failed to load posts.");
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  const hasPosts = posts.length > 0;
  const post = useMemo(
    () => (hasPosts ? posts[currentIndex] : null),
    [hasPosts, posts, currentIndex]
  );

  const goPrev = () => {
    if (!hasPosts) return;
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const goNext = () => {
    if (!hasPosts) return;
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading posts…</p>
        </div>
      </section>
    );
  }

  if (err) {
    return (
      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">{err}</p>
        </div>
      </section>
    );
  }

  if (!hasPosts) {
    return (
      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Developer Blog</h2>
          <p className="text-muted-foreground">
            No posts yet. Add one from your Add Blog page.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Developer Blog</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Insights, thoughts, and reflections
          </p>
        </div>

        {/* Blog Post Content */}
        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {/* Change author if you store it on the doc */}
                {post.authorName || "Nick Choi"}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date
                  ? new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "—"}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime || "—"}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl mb-4">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {(post.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            <hr className="mb-8 border-border" />
          </header>

          {/* Banner Image */}
          {post.bannerImage ? (
            <div className="aspect-[16/9] mb-8 rounded-lg overflow-hidden">
              <img
                src={post.bannerImage}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ) : null}

          {/* Post Content */}
          <div
            className="prose prose-neutral max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
            style={{ lineHeight: "1.7" }}
          />

          <hr className="mb-8 border-border" />

          {/* Post Navigation with Numbers in the Middle */}
          <div className="flex items-center justify-between">
            <button
              onClick={goPrev}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            {/* Numbered Navigator */}
            <div className="flex items-center gap-2">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    index === currentIndex
                      ? "text-gray-900 underline underline-offset-1"
                      : "text-gray-600 hover:underline hover:underline-offset-1"
                  }`}
                  aria-label={`Go to post ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium shadow-sm hover:bg-gray-100"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
