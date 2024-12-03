import { useEffect, useState } from "react";

const useTestimonials = (limit = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://mrquickfix-dashboard-v2-1.onrender.com/api/testimonial/");
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();

        const testimonialsData = Array.isArray(jsonData) ? jsonData : jsonData.data;

        let validatedData = testimonialsData.filter(
          (item) =>
            item &&
            item.jobID &&
            item.status === "Published" && // change to "Published"
            item.feedbackMessage &&
            item.createdAt
        );

        validatedData = validatedData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        if (limit) {
          validatedData = validatedData.slice(0, limit);
        }

        setData(validatedData);
      } catch (error) {
        console.error("Error loading JSON:", error);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]);

  return { data, error, loading };
};

export default useTestimonials;
