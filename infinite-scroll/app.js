const API_BASE_URL = 'https://www.algoexpert.io/api/testimonials';
const PER_PAGE = 5;

// Write your code here.
const myUrl = new URL(API_BASE_URL);
myUrl.searchParams.set('limit', PER_PAGE);

async function testimonials() {
  const data = await fetch(myUrl, { mode: "cors" });
  console.log(data);
}

testimonials();
