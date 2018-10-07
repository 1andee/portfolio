const defaultQuery = `
  # My name is Ian Duke and I am a Full Stack Developer from Canada
  #
  # I enjoy working with JavaScript (Node, React, Angular). I also have
  # experience with PHP (Slim/Laravel) and making cross-platform
  # mobile apps with NativeScript.
  #
  # This portfolio was made to explore the GraphQL API! Here is a sample query:

  {
    name,
    email,
    github,
    twitter,
    linkedin,
    employed,
    projects {
      name
      description
      github
      website
    },
    jobs {
      company
      title
      started
      finished
    },
    education {
      school
      program
      started
      finished
    }
  }
`;
export default defaultQuery
