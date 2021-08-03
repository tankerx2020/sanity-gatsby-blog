export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6109bdb85af65412f7c8b465",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8k13486t",
                  apiId: "16d9cac6-bd75-4567-a993-a980785b9d0d",
                },
                {
                  buildHookId: "6109bdb80b2c371a1647dc26",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-i8a9rydu",
                  apiId: "b8184118-13ae-4088-9527-397bbe76e98d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tankerx2020/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-i8a9rydu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
