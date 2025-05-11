"use client";

import React, { useEffect, useState } from 'react';
import { AnimatedSection } from '~/components/layout/animated-section';

const ArticlePage = () => {
  const [articleContent, setArticleContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Adjust the path to where your actual HTML file is located
        // Fetch content from the static path in the public directory
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
        const response = await fetch(`${basePath}/blog/our-dac-technology/article-content.html`);
        if (!response.ok) {
          throw new Error(`Failed to fetch article: ${response.statusText} (${response.status})`);
        }
        const html = await response.text();
        setArticleContent(html);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        console.error("Error fetching article:", err);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchArticle();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <AnimatedSection delay={0.2}>
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          {isLoading && <p>Loading article content...</p>}
          {error && <p className="text-red-500">Error loading article: {error}</p>}
          {articleContent && (
            <div dangerouslySetInnerHTML={{ __html: articleContent }} />
          )}
        </article>
      </AnimatedSection>
    </div>
  );
};

export default ArticlePage;