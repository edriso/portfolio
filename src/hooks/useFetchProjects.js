import { useState, useEffect, useCallback } from 'react';
import { createClient } from 'contentful';
import localProjects, { placeholderImg } from '../data/projects';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client =
  spaceId && accessToken
    ? createClient({ space: spaceId, environment: 'master', accessToken })
    : null;

export function useFetchProjects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = useCallback(async () => {
    if (!client) {
      setProjects(localProjects);
      setLoading(false);
      return;
    }

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
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return { loading, projects };
}
