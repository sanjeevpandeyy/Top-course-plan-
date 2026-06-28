import { FcLike } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

function Card({
  course,
  likedCourses,
  setLikedCourses,
}) {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) =>
        prev.filter((cid) => cid !== course.id)
      );

      toast.warning("Like Removed");
    } else {
      setLikedCourses((prev) => [
        ...prev,
        course.id,
      ]);

      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative">
        <img
          src={course.image.url}
          alt={course.image.alt}
          className="w-full h-56 object-cover"
        />

        <button
          onClick={clickHandler}
          className="absolute bottom-3 right-3 bg-white rounded-full p-3 shadow-md"
        >
          {likedCourses.includes(course.id) ? (
            <FcLike size={28} />
          ) : (
            <FaHeart
              size={24}
              className="text-gray-500"
            />
          )}
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-slate-800 mb-3">
          {course.title}
        </h2>

        <p className="text-gray-600 leading-7">
          {course.description.length > 120
            ? course.description.substring(0, 120) +
              "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;