const Heading = ({ title }) => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12 relative">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
            <p className="mb-2 text-center font-semibold text-pink-500 md:mb-3 lg:text-lg">
              Account
            </p>

            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              {title}
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
