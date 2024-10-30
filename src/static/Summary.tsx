function Summary() {
  return (
    <>
      <p className="text-4xl mb-8">About me</p>
      <article
        className="desktop:text-xl mobile:text-md"
        itemScope
        itemType="https://schema.org/author"
      >
        <p className="mb-5">
          I&apos;m a fullstack developer with a bachelors degree in Computer
          Science🎓. So far I&apos;ve made multiple projects. I&apos;ve keen
          interest in Artificial Intelligence and Machine Learning{" "}
        </p>
      </article>
    </>
  );
}

export default Summary;
