export const useContentful = () => {
  const config = useRuntimeConfig();

  const getEntries = async () => {
    return await $fetch(
      `https://cdn.contentful.com/spaces/${config.public.contentfulSpace}/environments/master/entries`,
      {
        headers: {
          Authorization: `Bearer ${config.public.contentfulToken}`,
        },
      }
    );
  };

  return { getEntries };
};
