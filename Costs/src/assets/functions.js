export function customClass(styles, array) {
  let classNames = "";
  if (array) {
    classNames = array.map((className) => styles[className]).join(" ");
  }

  return classNames;
}

export async function fetchAPI({ fetchURL, method, headers }) {
  try {
    const response = await fetch(fetchURL, {
      method: method,
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
