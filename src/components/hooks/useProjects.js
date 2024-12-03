import { useEffect, useState, useRef } from "react";

const useProjects = ({
  limit = null,
  selectedCategory = "Latest",
  projectsPerPage = 6,
  currentPage = 1,
} = {}) => {
  const [data, setData] = useState([]);
  const [totalProjects, setTotalProjects] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const cache = useRef({});

  useEffect(() => {
    const cacheKey = `${selectedCategory}-${projectsPerPage}-${limit}`;

    if (cache.current[cacheKey]) {
      const cachedData = cache.current[cacheKey];

      setTotalProjects(cachedData.totalProjects);
      setLoading(false);

      const startIndex = (currentPage - 1) * projectsPerPage;
      const paginatedData = cachedData.data.slice(startIndex, startIndex + projectsPerPage);

      setData(paginatedData);
    } else {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch("https://mrquickfix-dashboard-v2-1.onrender.com/api/projects/");
          if (!response.ok) throw new Error("Network response was not ok");
          const jsonData = await response.json();
          const projectsData = Array.isArray(jsonData) ? jsonData : jsonData.data;

          let validatedData = projectsData.filter(
            (item) =>
              item &&
              item.projectID &&
              item.createdAt &&
              item.projectThumbnail &&
              item.projectName &&
              item.projectServices
          );

          validatedData = validatedData.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          if (selectedCategory && selectedCategory !== "Latest") {
            validatedData = validatedData.filter((project) =>
              project.projectServices.includes(selectedCategory)
            );
          }

          if (limit) {
            validatedData = validatedData.slice(0, limit);
          }

          cache.current[cacheKey] = {
            data: validatedData,
            totalProjects: validatedData.length,
          };

          setTotalProjects(validatedData.length);

          const startIndex = (currentPage - 1) * projectsPerPage;
          const paginatedData = validatedData.slice(startIndex, startIndex + projectsPerPage);

          setData(paginatedData);
        } catch (error) {
          console.error("Error loading JSON:", error);
          setError(error.message || "Failed to load projects.");
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [limit, selectedCategory, projectsPerPage, currentPage]);

  return { data, totalProjects, error, loading };
};

export default useProjects;
