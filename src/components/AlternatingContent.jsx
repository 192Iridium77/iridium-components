export default function AlternatingContent({ image, title, description }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } mt-12`}
    >
      <div
        className="lg:w-6/12 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: `url(image.href || '')`,
          minHeight: "300px",
        }}
      ></div>
      <div className="lg:w-6/12 bg-primary-600 text-white p-8">
        <h3 className="mt-2 lg:mt-4">{title}</h3>
        <p> {description} </p>
      </div>
    </div>
  );
}
