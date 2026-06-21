"use client";

import { useState, useMemo, useCallback } from "react";
import { Column, Flex, Heading, Text } from "@once-ui-system/core";
import { ProjectCardCompact } from "@/components/ProjectCardCompact";
import styles from "./ProjectGalleryGrid.module.scss";

interface GalleryItem {
  slug: string;
  type: "project" | "blog";
  href: string;
  metadata: {
    title: string;
    summary: string;
    images: string[];
    techStack?: string[];
    /** For projects: category mapped to tag. For blogs: the original tag field. */
    tag?: string;
    publishedAt: string;
  };
}

interface ProjectGalleryGridProps {
  items: GalleryItem[];
}

const ALL_LABEL = "All";

export default function ProjectGalleryGrid({ items }: ProjectGalleryGridProps) {
  const [activeTag, setActiveTag] = useState<string>(ALL_LABEL);
  const [activeType, setActiveType] = useState<"all" | "project" | "blog">("all");
  const [search, setSearch] = useState("");

  // Collect unique tags across all items
  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const item of items) {
      if (item.metadata.tag) set.add(item.metadata.tag);
    }
    return [ALL_LABEL, ...Array.from(set).sort()];
  }, [items]);

  // Filter logic
  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchTag =
        activeTag === ALL_LABEL || item.metadata.tag === activeTag;
      const matchType =
        activeType === "all" || item.type === activeType;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        item.metadata.title.toLowerCase().includes(q) ||
        (item.metadata.summary || "").toLowerCase().includes(q) ||
        (item.metadata.techStack || []).some((t) => t.toLowerCase().includes(q));
      return matchTag && matchType && matchSearch;
    });
  }, [items, activeTag, activeType, search]);

  const handleTagClick = useCallback((tag: string) => {
    setActiveTag(tag);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setActiveTag(ALL_LABEL);
  }, []);

  const handleClear = useCallback(() => {
    setSearch("");
    setActiveTag(ALL_LABEL);
    setActiveType("all");
  }, []);

  const projectCount = items.filter((i) => i.type === "project").length;
  const blogCount = items.filter((i) => i.type === "blog").length;

  return (
    <Column fillWidth gap="32">
      {/* Header */}
      <Column gap="8">
        <Heading as="h1" variant="display-strong-s">
          Gallery
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          A visual showcase of everything I&apos;ve built and written — projects, case studies, and blog posts all in one place.
        </Text>
      </Column>

      {/* Search Bar */}
      <div className={styles.searchWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by name, tech, or keyword..."
          value={search}
          onChange={handleSearchChange}
        />
        {search && (
          <button className={styles.clearBtn} onClick={handleClear} type="button" aria-label="Clear search">
            ✕
          </button>
        )}
      </div>

      {/* Type Toggle — Projects / Blog / All */}
      <Flex gap="8" wrap>
        <button
          type="button"
          className={`${styles.pill} ${activeType === "all" ? styles.pillActive : ""}`}
          onClick={() => setActiveType("all")}
        >
          All ({items.length})
        </button>
        <button
          type="button"
          className={`${styles.pill} ${activeType === "project" ? styles.pillActive : ""}`}
          onClick={() => setActiveType("project")}
        >
          🛠️ Projects ({projectCount})
        </button>
        <button
          type="button"
          className={`${styles.pill} ${activeType === "blog" ? styles.pillActive : ""}`}
          onClick={() => setActiveType("blog")}
        >
          📝 Blog Posts ({blogCount})
        </button>
      </Flex>

      {/* Tag Filter Pills */}
      <Flex gap="8" wrap>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`${styles.tagPill} ${activeTag === tag ? styles.tagPillActive : ""}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </Flex>

      {/* Results count */}
      {(search || activeTag !== ALL_LABEL || activeType !== "all") && (
        <Text variant="body-default-s" onBackground="neutral-weak">
          Showing <strong>{filtered.length}</strong> of {items.length} items
          {activeTag !== ALL_LABEL && (
            <> tagged <strong>{activeTag}</strong></>
          )}
        </Text>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map((item) => (
            <div key={`${item.type}-${item.slug}`} className={styles.gridItem}>
              <ProjectCardCompact
                href={item.href}
                images={item.metadata.images}
                title={item.metadata.title}
                description={item.metadata.summary}
                techStack={item.metadata.techStack}
                category={item.metadata.tag}
                badge={item.type === "blog" ? "Blog" : undefined}
              />
            </div>
          ))}
        </div>
      ) : (
        <Column fillWidth gap="16" padding="64" style={{ alignItems: "center", textAlign: "center" }}>
          <Text variant="heading-default-m">🔎 No items found</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Try a different search term, type, or tag.
          </Text>
          <button className={styles.clearBtn} onClick={handleClear} type="button">
            Clear filters
          </button>
        </Column>
      )}
    </Column>
  );
}
