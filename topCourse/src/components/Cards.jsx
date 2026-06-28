import { useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      return Object.values(courses).flat();
    }

    return courses[category];
  };

  return (
    <div className="max-w-7xl mx-auto px-5 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getCourses().map((course) => (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;