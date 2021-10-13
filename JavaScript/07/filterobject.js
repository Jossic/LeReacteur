const user = {
    firstname: "Peter",
    lastname: "Parker",
    alias: "Spiderman",
    nationality: "American",
    height: 178,
    favoriteColor: "red"
  };
  
  console.log(filterObject(user, ["firstname", "alias"]));
  // Must returns { firstname: "Peter", alias: "Spiderman" }
  
  console.log(filterObject(user, ["nationality", "favoriteColor"]));
  // Must returns { nationality: "American", favoriteColor: "red"}
  
  console.log(filterObject(user));
  // Must returns entire user object.
  
  console.log(filterObject(user, []));
  // Must returns entire user object.