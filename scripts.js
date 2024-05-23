const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

const articles = [
    {
        id: 1,
        title: "Mental Health Stigma: The Silent Epidemic",
        summary: "Despite growing awareness, mental health issues remain stigmatized. This article delves into why we still struggle to openly discuss mental health and how it affects those suffering in silence. ",
        content: "In the 21st century, despite unprecedented connectivity and access to information,  a silent epidemic persists - the stigma surrounding mental health. This stigma encompasses discrimination, prejudice, and ignorance, hindering individuals from seeking assistance and perpetuating a harmful cycle of silence and distress. The stigma surrounding mental health has a lengthy and intricate history deeply ingrained in societal norms and cultural beliefs. Despite advancements in understanding and addressing mental health conditions, individuals affected by mental illness often face shame, marginalization, or mistreatment due to societal structures and beliefs. Mental health stigma is a global issue that transcends geographical boundaries and persists throughout history. However, the article specifically mentions examples from the Philippines, where cultural factors such as resilience and independence can contribute to underestimating mental health issues. Mental health stigma originates from societal structures and beliefs, perpetuated by media representations and reinforced stereotypes. The results and effects include shame, marginalization, mistreatment, and underestimation of mental health issues, leading to barriers in seeking assistance and perpetuating misconceptions about mental illness.",
        category: "Society",
        image: "mental-health.jpg"
    },
    {
        id: 2,
        title: "Racism and Privilege: Unpacking Systemic Inequality",
        summary: "Racism and privilege continue to shape our society in profound ways. This article examines the roots of systemic inequality and the uncomfortable truths we must face to create real change.",
        content: "In the fabric of our society, racism and privilege are not just abstract concepts but powerful forces shaping the lived experiences of individuals. This article delves deep into the roots of systemic inequality, unraveling the intricate web of historical, social, and economic factors that sustain it. From discriminatory policies and practices to implicit biases woven into the fabric of institutions, systemic racism manifests in myriad forms, perpetuating disparities in opportunities, outcomes, and access to resources. Confronting systemic racism requires confronting uncomfortable truths and acknowledging the deep-seated injustices embedded within our societal structures. It demands a critical examination of power dynamics, historical legacies, and implicit biases that perpetuate inequality and marginalization. By shedding light on these uncomfortable truths, we lay the groundwork for genuine transformation and the pursuit of real change. This article serves as a call to action, urging individuals and institutions to engage in introspection, dialogue, and proactive measures to dismantle systemic racism. Through education, advocacy, and collective action, we can challenge entrenched systems of privilege and oppression, striving towards a more equitable and inclusive society for all.",
        category: "Politics",
        image: "racism.jpg"
    },
    {
        id: 3,
        title: "Climate Change: Our Role in a Dying Planet",
        summary: "Climate change is accelerating, yet many of us remain indifferent. This article explores our responsibility and the actions needed to mitigate its effects before it's too late.",
        content: "Climate change is a long-term alteration in global or regional climate patterns, primarily attributed to increased levels of atmospheric carbon dioxide resulting from the use of fossil fuels. This phenomenon affects everyone on Earth, with its impacts being felt worldwide. Both natural processes and human activities, particularly since the Industrial Revolution, have contributed to the acceleration of climate change. Industrial emissions, vehicle emissions, and deforestation have altered solar and infrared radiation, leading to heat retention in the atmosphere and changes in surface temperatures in every nation. Climate change manifests through various mechanisms, including alterations in ocean temperatures, changes in precipitation patterns, and increased frequency of extreme weather events. It has profound effects on nearly every aspect of our environment, such as increased flooding and widening droughts, as well as pollution and destruction of shorelines due to soil erosion. Taking global warming seriously is imperative because it not only affects air temperatures but also leads to rising ocean temperatures, impacting marine ecosystems. While the scientific community has observed a plateau in air temperature rise, the warming of the oceans continues, with events like El Nino and La Nina oscillations influencing surface temperatures. Overall, climate change is becoming increasingly extreme, highlighting the urgent need for action to mitigate its effects.",
        category: "Environment",
        image: "climate.jpg"
    },
    {
        id: 4,
        title: "Injustice in Palestine: A Struggle for Peace and Rights",
        summary: "The ongoing conflict in Palestine continues to cause widespread suffering. This article highlights the human rights violations and the daily struggles faced by Palestinians.",
        content: "Recent events in Occupied East Jerusalem and the Occupied West Bank have reignited tensions, shedding light on the ongoing struggle faced by Palestinians for peace and rights in the region. Israeli forces' violent suppression of demonstrations in these areas has resulted in the deaths of four young Palestinian men and approximately 400 injuries among Palestinians. The tension escalated following the implementation of new security measures at the Al-Aqsa compound, including the installation of metal detectors, after a deadly shooting incident. The decision to install metal detectors came in response to a shooting incident earlier in the week but was met with outrage among Palestinians, who viewed it as a violation of their rights and a further encroachment on their religious freedom. Israeli authorities' insistence on maintaining these security measures despite opposition from intelligence services and government officials underscores the underlying tensions and power dynamics at play. The demonstrations and clashes involved Palestinian protesters and Israeli security forces, predominantly youths expressing their opposition to the new security measures. They occurred primarily in Occupied East Jerusalem and the Occupied West Bank, following the implementation of the security measures at the Al-Aqsa compound, with confrontations and casualties resulting from the use of force by Israeli forces. The ongoing unrest highlights the deep-rooted issues of injustice and oppression faced by Palestinians in their struggle for peace and rights in Palestine.",
        category: "World",
        image: "palestine.jpg"
    },
    {
        id: 5,
        title: "Homelessness: The Human Faces Behind the Crisis",
        summary: "Homelessness is often ignored or misunderstood. This article reveals the personal stories behind the statistics and calls for compassionate solutions.",
        content: "In cities around the world, homelessness remains a pressing issue, affecting individuals and families from all walks of life. Who are the homeless? They are individuals who lack a fixed, regular, and adequate nighttime residence, often living in shelters, cars, or on the streets. What is homelessness? It's a state of vulnerability and instability, where individuals lack the security of a permanent home, facing daily challenges of survival. When did homelessness become a widespread concern? While homelessness has been a longstanding issue, it gained prominence in the late 20th century due to economic downturns, lack of affordable housing, and systemic issues such as poverty and mental illness. Where does homelessness occur? It's a problem found in urban and rural areas alike, with homeless populations visible in city centers, parks, and makeshift shelters. Why does homelessness persist? It's a complex issue influenced by economic inequality, lack of access to affordable housing, systemic failures, and social stigma. Despite efforts to address homelessness, it often remains ignored or misunderstood. This article aims to shed light on the personal stories behind the statistics, highlighting the humanity of those affected, and advocates for compassionate solutions that address the root causes of homelessness.",
        category: "Society",
        image: "home.jpg"
    },
    {
        id: 6,
        title: "Income Inequality: The Growing Divide",
        summary: "The gap between the rich and the poor is widening. This article explores the causes and consequences of income inequality and what can be done to bridge the divide.",
        content: "Income inequality has become a significant concern in contemporary society, with the gap between the rich and the poor widening at an alarming rate. Who is affected by income inequality? It impacts individuals and families across various socioeconomic backgrounds, exacerbating disparities in wealth and opportunity. What is income inequality? It's the unequal distribution of income among individuals or households within an economy, resulting in a disproportionate share of wealth held by a small percentage of the population. When did income inequality start to escalate? While income inequality has been present throughout history, it has escalated in recent decades due to factors such as globalization, technological advancements, and changes in labor markets. Where does income inequality manifest? It's prevalent in both developed and developing countries, manifesting in disparities in wages, access to education, healthcare, and social services. Why is income inequality growing? It's driven by various factors, including regressive tax policies, stagnant wages for the working class, corporate greed, and lack of investment in social safety nets. This article delves into the causes and consequences of income inequality while exploring potential solutions to bridge the growing divide. By understanding the complexities of income inequality and its far-reaching impacts, we can work towards creating a more equitable society for all.",
        category: "Politics",
        image: "income.jpg"
    }
];

const trendingTopics = [
    "Mental Health",
    "Climate Change",
    "Palestine",
    "Homelessness",
    "Income Inequality"
];

document.addEventListener("DOMContentLoaded", () => {
    const featuredArticleContainer = document.getElementById("featured-article");
    const latestArticlesContainer = document.getElementById("latest-articles");
    const politicsArticlesContainer = document.getElementById("politics-articles");
    const environmentArticlesContainer = document.getElementById("environment-articles");
    const societyArticlesContainer = document.getElementById("society-articles");
    const worldArticlesContainer = document.getElementById("world-articles");
    const trendingTopicsContainer = document.getElementById("trending-topics");
    const relatedArticlesContainer = document.getElementById("related-articles");

    const featuredArticle = articles[0];
    featuredArticleContainer.innerHTML = `
        <article>
            <img src="${featuredArticle.image}" alt="${featuredArticle.title}">
            <h3>${featuredArticle.title}</h3>
            <p>${featuredArticle.summary}</p>
            <a href="article.html?id=${featuredArticle.id}">Read more</a>
        </article>
    `;

    articles.slice(1).forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="article.html?id=${article.id}">Read more</a>
        `;
        latestArticlesContainer.appendChild(articleElement);
    });

    articles.filter(article => article.category === "Politics").forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="article.html?id=${article.id}">Read more</a>
        `;
        politicsArticlesContainer.appendChild(articleElement);
    });

    articles.filter(article => article.category === "Environment").forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="article.html?id=${article.id}">Read more</a>
        `;
        environmentArticlesContainer.appendChild(articleElement);
    });

    articles.filter(article => article.category === "Society").forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="article.html?id=${article.id}">Read more</a>
        `;
        societyArticlesContainer.appendChild(articleElement);
    });

    articles.filter(article => article.category === "World").forEach(article => {
        const articleElement = document.createElement("article");
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <a href="article.html?id=${article.id}">Read more</a>
        `;
        worldArticlesContainer.appendChild(articleElement);
    });

    trendingTopics.forEach(topic => {
        const topicElement = document.createElement("li");
        topicElement.innerHTML = `<a href="#">${topic}</a>`;
        trendingTopicsContainer.appendChild(topicElement);
    });

    // Example related articles
    const relatedArticles = articles.slice(1, 4); // Example: picking some articles as related articles
    relatedArticles.forEach(article => {
        const relatedArticleElement = document.createElement("li");
        relatedArticleElement.innerHTML = `<a href="article.html?id=${article.id}">${article.title}</a>`;
        relatedArticlesContainer.appendChild(relatedArticleElement);
    });
});

// Example modification in JavaScript
articleElement.innerHTML = `
    <h3>${article.title}</h3>
    <p>${article.summary}</p>
    <a href="article.html?id=${article.id}" class="read-more">Read more</a>
`;

setTimeout(() => {
    const tickerContent = document.querySelector('.ticker-content');
    const newHeadline = document.createElement('span');
    newHeadline.textContent = 'This is a dynamically added headline!';
    tickerContent.appendChild(newHeadline);
}, 10000);