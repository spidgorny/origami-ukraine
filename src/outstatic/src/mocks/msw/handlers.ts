import { graphql, HttpResponse } from "msw";

export const handlers = [
  // Collections query. Use the owner to determine the possible response
  // to get from GitHub's API
  graphql.query("Collections", ({ query, variables }) => {
    const { owner } = variables;

    if (owner === "msw::collections::not-implemented") {
      return HttpResponse.json({
        errors: [
          {
            message: "MSW - Not implemented",
          },
        ],
      });
    }

    // happy path, return a set of collections
    // https://docs.github.com/en/graphql/overview/explorer
    // {"owner": "avitorio", "name": "outstatic", "contentPath": "main:examples/blog/outstatic/content"}
    return HttpResponse.json({
      data: {
        repository: {
          id: "R_kgDOID1vsA",
          object: {
            __typename: "Tree",
            entries: [
              {
                type: "tree",
                name: "pages",
              },
              {
                type: "tree",
                name: "posts",
              },
              {
                type: "tree",
                name: "projects",
              },
            ],
          },
        },
      },
    });
  }),
];
