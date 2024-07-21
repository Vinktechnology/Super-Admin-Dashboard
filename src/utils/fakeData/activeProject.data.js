import faker from "faker";

import { mockImgCover } from "../mockImages";

export const activeProjectData = [
  {
    id: faker.datatype.uuid(),
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(1),
    postedAt: faker.date.soon(),
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(2),
    postedAt: faker.date.soon(),
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(3),
    postedAt: faker.date.soon(),
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(4),
    postedAt: faker.date.soon(),
  },
  {
    id: faker.datatype.uuid(),
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: mockImgCover(5),
    postedAt: faker.date.soon(),
  },
];
