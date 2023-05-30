const subjects = {
  science: [
    {
      code: 101,
      name: "Bangla",
    },
    {
      code: 107,
      name: "English",
    },
    {
      code: 109,
      name: "Math",
    },
    {
      religions: [
        {
          code: 111,
          name: "Islam",
        },
        {
          code: 112,
          name: "Hindu",
        },
        {
          code: 113,
          name: "Buddha",
        },
        {
          code: 114,
          name: "Christian",
        },
      ],
    },
    {
      code: 154,
      name: "ICT",
    },
    {
      code: 150,
      name: "BGS",
    },
    {
      main: [
        {
          code: 136,
          name: "Physics",
        },
        {
          code: 137,
          name: "Chemistry",
        },
        {
          code: 138,
          name: "Biology",
        },
        {
          code: 139,
          name: "Higher Math",
        },
        {
          code: 134,
          name: "Agriculture",
        },
      ],
    },
    {
      main: [
        {
          code: 137,
          name: "Chemistry",
        },
        {
          code: 136,
          name: "Physics",
        },
        {
          code: 138,
          name: "Biology",
        },
        {
          code: 139,
          name: "Higher Math",
        },
        {
          code: 134,
          name: "Agriculture",
        },
      ],
    },
    {
      main: [
        {
          code: 138,
          name: "Biology",
        },
        {
          code: 137,
          name: "Chemistry",
        },
        {
          code: 136,
          name: "Physics",
        },
        {
          code: 139,
          name: "Higher Math",
        },
        {
          code: 134,
          name: "Agriculture",
        },
      ],
    },
    {
      optional: [
        {
          code: 139,
          name: "Higher Math (4th subject)",
        },
        {
          code: 138,
          name: "Biology (4th subject)",
        },
        {
          code: 134,
          name: "Agriculture (4th subject)",
        },
      ],
    },
  ],
  business: [
    {
      code: 101,
      name: "Bangla",
    },
    {
      code: 107,
      name: "English",
    },
    {
      code: 109,
      name: "Math",
    },
    {
      religions: [
        {
          code: 111,
          name: "Islam",
        },
        {
          code: 112,
          name: "Hindu",
        },
        {
          code: 113,
          name: "Buddha",
        },
        {
          code: 114,
          name: "Christian",
        },
      ],
    },
    {
      code: 154,
      name: "ICT",
    },
    {
      code: 150,
      name: "BGS",
    },
    {
      subs: [
        {
          code: 146,
          name: "Accounting",
        },
        {
          code: 152,
          name: "Finance & Banking",
        },
        {
          code: 143,
          name: "Business Entrepreneurship",
        },
      ],
    },
    {
      subs: [
        {
          code: 152,
          name: "Finance & Banking",
        },
        {
          code: 146,
          name: "Accounting",
        },
        {
          code: 143,
          name: "Business Entrepreneurship",
        },
      ],
    },
    {
      subs: [
        {
          code: 143,
          name: "Business Entrepreneurship",
        },
        {
          code: 146,
          name: "Accounting",
        },
        {
          code: 152,
          name: "Finance & Banking",
        },
      ],
    },
    {
      optional: [
        {
          code: 134,
          name: "Agriculture (4th subject)",
        },
        {
          code: 149,
          name: "Music (4th subject)",
        },
        {
          code: 151,
          name: "Home Science (4th subject)",
        },
      ],
    },
  ],
  humanities: [
    {
      code: 101,
      name: "Bangla",
    },
    {
      code: 107,
      name: "English",
    },
    {
      code: 109,
      name: "Math",
    },
    {
      religions: [
        {
          code: 111,
          name: "Islam",
        },
        {
          code: 112,
          name: "Hindu",
        },
        {
          code: 113,
          name: "Buddha",
        },
        {
          code: 114,
          name: "Christian",
        },
      ],
    },
    {
      code: 154,
      name: "ICT",
    },
    {
      code: 150,
      name: "BGS",
    },
    {
      main: [
        {
          code: 110,
          name: "Geography",
        },
        {
          code: 140,
          name: "Civics & Citizenship",
        },
        {
          code: 141,
          name: "Economics",
        },
      ],
    },
    {
      main: [
        {
          code: 153,
          name: "History of Bangladesh",
        },
        {
          code: 100,
          name: "Other",
        },
      ],
    },
    {
      main: [
        {
          code: 140,
          name: "Civics & Citizenship",
        },
        {
          code: 110,
          name: "Geography",
        },
        {
          code: 141,
          name: "Economics",
        },
      ],
    },
    {
      optional: [
        {
          code: 134,
          name: "Agriculture (4th subject)",
        },
        {
          code: 149,
          name: "Music (4th subject)",
        },
        {
          code: 151,
          name: "Home Science (4th subject)",
        },
      ],
    },
  ],
};
const groups = ["science", "business", "humanities"];

export {subjects, groups}