import { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import localProjects, { placeholderImg } from '../data/projects';
import { DATA_SOURCE } from '../config';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const useContentful = DATA_SOURCE === 'contentful';
const client =
  useContentful && spaceId && accessToken
    ? createClient({ space: spaceId, environment: 'master', accessToken })
    : null;

export function useFetchProjects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!client) {
      if (useContentful) {
        console.warn(
          'VITE_DATA_SOURCE is "contentful" but Contentful credentials are missing. Falling back to local projects.',
        );
      }
      setProjects(localProjects);
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        const response = await client.getEntries({
          content_type:
            import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE || 'projects',
        });
        const items = response.items.map((item) => {
          const { title, url, img, tags } = item.fields;
          const id = item.sys.id;
          const imgUrl = img?.fields?.file?.url;
          return {
            title,
            url,
            id,
            img: imgUrl ? `https:${imgUrl}` : placeholderImg,
            tags: tags || [],
          };
        });
        setProjects(items);
      } catch (error) {
        console.error('Failed to fetch projects from Contentful:', error);
        setProjects(localProjects);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { loading, projects };
}
