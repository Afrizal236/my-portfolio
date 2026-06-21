"use client";

import React from "react";
import clsx from "classnames";
import { Heading, Flex, RevealFx } from "@once-ui-system/core";
import styles from "./TechStackArsenal.module.scss";

export function TechStackArsenal() {
  const tech = [
    // Languages
    { name: "JavaScript", slug: "javascript" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Python", slug: "python" },
    { name: "Dart", slug: "dart" },
    { name: "PHP", slug: "php" },
    { name: "C++", slug: "cplusplus" },

    // Frontend
    { name: "React.js", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Material UI", slug: "mui" },
    { name: "React Query", slug: "reactquery" },
    { name: "Axios", slug: "axios" },
    { name: "Leaflet.js", slug: "leaflet" },

    // Backend & API
    { name: "Node.js", slug: "nodedotjs" },
    { name: "Express.js", slug: "express" },
    { name: "NestJS", slug: "nestjs" },
    { name: "FastAPI", slug: "fastapi" },
    { name: "Socket.IO", slug: "socketdotio" },
    { name: "NextAuth.js", slug: "nextauth" },

    // Mobile
    { name: "Flutter", slug: "flutter" },
    { name: "Firebase", slug: "firebase" },

    // Database & Storage
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MySQL", slug: "mysql" },
    { name: "Redis", slug: "redis" },
    { name: "SQLite", slug: "sqlite" },
    { name: "Cloudflare R2", slug: "cloudflare" },

    // AI / ML & Data
    { name: "PyTorch", slug: "pytorch" },
    { name: "TensorFlow", slug: "tensorflow" },
    { name: "scikit-learn", slug: "scikitlearn" },
    { name: "OpenCV", slug: "opencv" },
    { name: "Streamlit", slug: "streamlit" },
    { name: "Google Gemini", slug: "googlegemini" },

    // DevOps & Tools
    { name: "Docker", slug: "docker" },
    { name: "Git", slug: "git" },
    { name: "Figma", slug: "figma" },
  ];

  // Duplicate for seamless infinite marquee loop
  const duplicatedTech = [...tech, ...tech];

  const renderTrackContent = (isColor = false) => (
    <div className={styles.marqueeTrack} aria-hidden={isColor}>
      {duplicatedTech.map((t, idx) => (
        <div key={idx} className={styles.techLogoWrapper}>
          <img
            src={
              isColor
                ? `https://cdn.simpleicons.org/${t.slug}`
                : `https://cdn.simpleicons.org/${t.slug}/gray`
            }
            alt={t.name}
            className={clsx(styles.techLogo, !isColor && styles.techLogoGrayscale)}
            loading="lazy"
          />
          <span className={clsx(styles.techName, isColor && styles.techNameColor)}>
            {t.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <RevealFx translateY="16" delay={0.6}>
      <Flex fillWidth direction="column" gap="24" className={styles.techSection}>
        <Flex fillWidth horizontal="center">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            Core Tech Stack & Tools
          </Heading>
        </Flex>
        <div className={styles.marqueeContainer}>
          {/* Background Layer: Grayscale */}
          {renderTrackContent(false)}

          {/* Foreground Layer: Original Colors (controlled by CSS mask in the center) */}
          <div className={styles.marqueeColorLayer}>
            {renderTrackContent(true)}
          </div>
        </div>
      </Flex>
    </RevealFx>
  );
}
