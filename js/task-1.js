const liItemElements = document.querySelectorAll(".item");
console.log(`Number of catgories: ${liItemElements.length}`);

liItemElements.forEach(el => {
    const subTitle = el.querySelector('h2').textContent;
    console.log(`Category: ${subTitle}`);
    const liItems = el.querySelectorAll('li').length;
    console.log(`Elements: ${liItems}`);
});