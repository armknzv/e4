function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const first = {
    name: "Vanya",
    City: "SPB",
    age: 30,
    sport: "football"
  };


  console.log(showProps(first, "same"));
  console.log(showProps(first, "name"));