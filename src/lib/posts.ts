import { getCollection, type CollectionEntry } from "astro:content";
import { siteConfig } from "../data/site.ts";

export type BlogPost = CollectionEntry<"blog">;

export async function getPublishedPosts() {
  const posts = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  return posts.sort((a, b) => {
    return b.data.pubDate.getTime() - a.data.pubDate.getTime();
  });
}

export function getPostSlug(post: BlogPost) {
  return post.id.replace(/\.(md|mdx)$/, "");
}

export function getPostUrl(post: BlogPost) {
  return `/posts/${getPostSlug(post)}/`;
}

export function getCategoryLabel(categorySlug: string) {
  return (
    siteConfig.categories.find((category) => category.slug === categorySlug)
      ?.title ?? categorySlug
  );
}

export function formatPostDate(date: Date) {
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
