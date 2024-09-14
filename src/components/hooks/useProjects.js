import { useEffect, useState } from "react";

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/SampleData/ProjectData.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();

        // Validate and filter data
        let validatedData = jsonData.filter(
          (item) =>
            item &&
            item.id &&
            item.date &&
            item.thumbnail &&
            item.name &&
            item.category
        );

        // Sort projects by date
        validatedData = validatedData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        // Filter by category if not 'Latest'
        if (selectedCategory && selectedCategory !== "Latest") {
          validatedData = validatedData.filter((project) =>
            project.category.includes(selectedCategory)
          );
        }

        setTotalProjects(validatedData.length);

        if (projectsPerPage) {
          const startIndex = (currentPage - 1) * projectsPerPage;
          const endIndex = startIndex + projectsPerPage;
          validatedData = validatedData.slice(startIndex, endIndex);
        }

        // Limit the number of projects if limit is specified
        if (limit) {
          validatedData = validatedData.slice(0, limit);
        }

        setData(validatedData);
      } catch (error) {
        console.error("Error loading JSON:", error);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, selectedCategory, projectsPerPage, currentPage]);

  return { data, totalProjects, error, loading };
};

export default useProjects;