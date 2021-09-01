import client from "./loader.js";

const controller = {
  async index(sortBy = "name") {
    const animals = await client
      .db("zoo")
      .collection("animals")
      .find()
      .sort({ [sortBy]: 1 })
      .toArray();
    return animals;
  },
};

export default controller;
