import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL, gallery, person } from "@/resources";
import { getPosts } from "@/app/utils/utils";
import ProjectGalleryGrid from "@/components/gallery/ProjectGalleryGrid";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  const rawProjects = getPosts(["src", "app", "work", "projects"]);
  const rawBlogs = getPosts(["src", "app", "blog", "posts"]);

  // Normalise projects: use category as the tag field
  const projects = rawProjects.map((p) => ({
    ...p,
    type: "project" as const,
    href: `/work/${p.slug}`,
    metadata: {
      ...p.metadata,
      tag: p.metadata.category ?? "Project",
    },
  }));

  // Normalise blogs: tag already exists, link to /blog/[slug]
  const blogs = rawBlogs.map((b) => ({
    ...b,
    type: "blog" as const,
    href: `/blog/${b.slug}`,
    metadata: {
      ...b.metadata,
      // ensure techStack is always an array (blog posts may not have it)
      techStack: b.metadata.techStack ?? [],
    },
  }));

  const allItems = [...projects, ...blogs].sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  return (
    <Column maxWidth="l" paddingX="l" paddingY="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ProjectGalleryGrid items={allItems} />
    </Column>
  );
}
