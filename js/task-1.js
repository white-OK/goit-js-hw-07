const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    const titleSection = category.querySelector("h2").textContent;
    console.log(`Category: ${titleSection}`);
    const listCount = category.querySelectorAll("li").length;
    console.log(`Elements: ${listCount}`);
});