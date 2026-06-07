console.log("MDN reading time script loaded");

function renderReadingTime() {
  const article = document.querySelector("main");
  const heading = document.querySelector("h1");

  console.log("article:", article);
  console.log("heading:", heading);

  if (!article || !heading) {
    return;
  }

  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);

  const badge = document.createElement("p");

  badge.textContent = `⏱️ ${readingTime} min read`;

  heading.insertAdjacentElement("afterend", badge);
}

renderReadingTime();
