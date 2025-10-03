// src/routes/AddBlog.jsx  (or AddBlogPage.jsx)
import { useEffect, useMemo, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function calcReadTime(textOrHtml) {
  const text = textOrHtml.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function normalizeTags(input) {
  return input
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

export default function AddBlogPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // YYYY-MM-DD
  const [readTime, setReadTime] = useState("");
  const [tagsText, setTagsText] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [content, setContent] = useState("");
  const [touched, setTouched] = useState(false);
  const [useAutoReadTime, setUseAutoReadTime] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState("");

  const autoReadTime = useMemo(() => calcReadTime(content), [content]);
  useEffect(() => {
    if (useAutoReadTime) setReadTime(autoReadTime);
  }, [autoReadTime, useAutoReadTime]);

  const errors = useMemo(() => {
    const e = {};
    if (!title.trim()) e.title = "Title is required.";
    if (!excerpt.trim() || excerpt.trim().length < 20)
      e.excerpt = "Excerpt should be at least 20 characters.";
    if (!date) e.date = "Date is required.";
    if (!bannerImage.trim()) e.bannerImage = "Banner image URL is required.";
    if (!content.trim() || content.replace(/<[^>]+>/g, "").trim().length < 50)
      e.content = "Content should be at least 50 characters.";
    if (!readTime.trim()) e.readTime = "Read time is required.";
    return e;
  }, [title, excerpt, date, bannerImage, content, readTime]);

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    setSaveError("");
    setSaveSuccess("");

    if (!isValid) return;

    const post = {
      // your local id is fine to keep if you use it elsewhere
      id: Number(String(Date.now()).slice(-9)),
      title: title.trim(),
      excerpt: excerpt.trim(),
      date, // YYYY-MM-DD
      readTime: readTime.trim(),
      tags: normalizeTags(tagsText),
      bannerImage: bannerImage.trim(),
      content, // HTML string
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    try {
      setSaving(true);
      await addDoc(collection(db, "BlogPost"), post); // creates collection if missing
      setSaveSuccess("Post saved successfully!");
      alert("Post saved successfully!");

      // Reset form
      setTitle("");
      setExcerpt("");
      setDate(new Date().toISOString().slice(0, 10));
      setReadTime("");
      setTagsText("");
      setBannerImage("");
      setContent("");
      setTouched(false);
    } catch (err) {
      setSaveError(err?.message || "Failed to save the post.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Create New Blog Post</h2>

        {saveError && (
          <div className="mb-4 rounded-md border border-red-300 bg-red-50 p-3 text-red-700 text-sm">
            {saveError}
          </div>
        )}
        {saveSuccess && (
          <div className="mb-4 rounded-md border border-green-300 bg-green-50 p-3 text-green-800 text-sm">
            {saveSuccess}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setTouched(true)}
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="e.g. Building Scalable React Applications"
              />
              {touched && errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="excerpt">
                Excerpt
              </label>
              <textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                onBlur={() => setTouched(true)}
                rows={3}
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Short summary that appears under the title..."
              />
              {touched && errors.excerpt && (
                <p className="mt-1 text-sm text-red-600">{errors.excerpt}</p>
              )}
            </div>

            {/* Date & Read time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="date">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onBlur={() => setTouched(true)}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
                {touched && errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date}</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium mb-1" htmlFor="readTime">
                    Read Time
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      checked={useAutoReadTime}
                      onChange={(e) => setUseAutoReadTime(e.target.checked)}
                    />
                    auto
                  </label>
                </div>
                <input
                  id="readTime"
                  type="text"
                  value={readTime}
                  onChange={(e) => setReadTime(e.target.value)}
                  onBlur={() => setTouched(true)}
                  disabled={useAutoReadTime}
                  className="w-full rounded-md border px-3 py-2 text-sm disabled:opacity-60"
                  placeholder="e.g. 8 min read"
                />
                {touched && errors.readTime && (
                  <p className="mt-1 text-sm text-red-600">{errors.readTime}</p>
                )}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="tags">
                Tags (comma separated)
              </label>
              <input
                id="tags"
                type="text"
                value={tagsText}
                onChange={(e) => setTagsText(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="React, Architecture, Performance"
              />
            </div>

            {/* Banner Image */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="banner">
                Banner Image URL
              </label>
              <input
                id="banner"
                type="url"
                value={bannerImage}
                onChange={(e) => setBannerImage(e.target.value)}
                onBlur={() => setTouched(true)}
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="https://images.unsplash.com/..."
              />
              {touched && errors.bannerImage && (
                <p className="mt-1 text-sm text-red-600">{errors.bannerImage}</p>
              )}
              {bannerImage && (
                <div className="mt-3 rounded-lg overflow-hidden border">
                  <img
                    src={bannerImage}
                    alt="Banner preview"
                    className="w-full h-40 object-cover"
                  />
                </div>
              )}
            </div>

            {/* Content (HTML) */}
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium mb-1" htmlFor="content">
                  Content (HTML)
                </label>
                <span className="text-xs text-gray-500">
                  Supports headings, lists, paragraphs, etc.
                </span>
              </div>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onBlur={() => setTouched(true)}
                rows={12}
                className="w-full rounded-md border px-3 py-2 text-sm font-mono"
                placeholder={`<p>Your article...</p>\n<h3>Section</h3>\n<ul><li>Point</li></ul>`}
              />
              {touched && errors.content && (
                <p className="mt-1 text-sm text-red-600">{errors.content}</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center rounded-md border bg-black text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90 disabled:opacity-60"
              >
                {saving ? "Saving..." : "Create Post"}
              </button>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100"
              >
                Cancel
              </button>

              {!isValid && touched && (
                <span className="text-xs text-red-600">Please fix the highlighted fields.</span>
              )}
            </div>
          </form>

          {/* PREVIEW */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Live Preview</h3>

            <div>
              <h1 className="text-2xl md:text-3xl mb-2">{title || "Post Title"}</h1>
              <div className="text-sm text-gray-500">
                <span>{date || "YYYY-MM-DD"}</span>{" • "}
                <span>{(useAutoReadTime ? autoReadTime : readTime) || "x min read"}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {normalizeTags(tagsText).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800"
                >
                  {t}
                </span>
              ))}
            </div>

            {bannerImage ? (
              <div className="rounded-lg overflow-hidden border">
                <img src={bannerImage} alt={title || "Banner"} className="w-full h-48 object-cover" />
              </div>
            ) : (
              <div className="h-48 rounded-lg border border-dashed flex items-center justify-center text-sm text-gray-500">
                Banner preview
              </div>
            )}

            <p className="text-gray-600">{excerpt || "Excerpt preview..."}</p>

            <div
              className="prose prose-neutral max-w-none"
              style={{ lineHeight: "1.7" }}
              dangerouslySetInnerHTML={{
                __html:
                  content ||
                  `<p>Your article preview will appear here. Add HTML in the content field.</p>`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}