
/* =========================================
   1. CONFIGURATION
========================================= */

const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';

const forumTopicUrl =
  'https://forum.freecodecamp.org/t/';

const forumCategoryUrl =
  'https://forum.freecodecamp.org/c/';

const avatarUrl =
  'https://cdn.freecodecamp.org/curriculum/forum-latest';


/* =========================================
   2. FORUM CATEGORIES
========================================= */

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Back-End Development', className: 'backend' }
};


/* =========================================
   3. DOM ELEMENTS
========================================= */

const postsContainer =
  document.getElementById('posts-container');


/* =========================================
   4. TIME FORMATTER
========================================= */

function timeAgo(timestamp) {
  const currentTime = new Date();
  const pastTime = new Date(timestamp);

  const difference = currentTime - pastTime;

  const minutes = Math.floor(difference / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `${minutes}m ago`;
  }

  if (hours < 24) {
    return `${hours}h ago`;
  }

  return `${days}d ago`;
}


/* =========================================
   5. VIEW COUNT FORMATTER
========================================= */

function viewCount(views) {
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`;
  }

  return views;
}


/* =========================================
   6. CATEGORY GENERATOR
========================================= */

function forumCategory(id) {
  const category = Object.hasOwn(allCategories, id)
    ? allCategories[id]
    : {
        category: 'General',
        className: 'general'
      };

  return `
    <a
      class="category ${category.className}"
      href="${forumCategoryUrl}${category.className}/${id}"
    >
      ${category.category}
    </a>
  `;
}


/* =========================================
   7. USER AVATAR GENERATOR
========================================= */

function avatars(posters, users) {
  return posters.map(poster => {
    const user = users.find(
      user => user.id === poster.user_id
    );

    if (!user) {
      return '';
    }

    let imageUrl = user.avatar_template.replace(
      '{size}',
      '30'
    );

    if (imageUrl.startsWith('/')) {
      imageUrl = avatarUrl + imageUrl;
    }

    return `
      <img
        src="${imageUrl}"
        alt="${user.name}"
        width="34"
        height="34"
        loading="lazy"
      >
    `;
  }).join('');
}


/* =========================================
   8. DISPLAY LATEST FORUM TOPICS
========================================= */

function showLatestPosts(data) {
  const { users, topic_list } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics.map(topic => {
    const {
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      category_id,
      bumped_at
    } = topic;

    return `
      <tr>
        <td>
          <a
            class="post-title"
            href="${forumTopicUrl}${slug}/${id}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ${title}
          </a>

          ${forumCategory(category_id)}
        </td>

        <td>
          <div class="avatar-container">
            ${avatars(posters, users)}
          </div>
        </td>

        <td>${posts_count - 1}</td>

        <td>${viewCount(views)}</td>

        <td>${timeAgo(bumped_at)}</td>
      </tr>
    `;
  }).join('');
}


/* =========================================
   9. FETCH LATEST FORUM DATA
========================================= */

async function fetchData() {
  try {
    const response = await fetch(forumLatest);

    const data = await response.json();

    showLatestPosts(data);

  } catch (error) {
    console.log(error);
  }
}


/* =========================================
   10. INITIALIZE APPLICATION
========================================= */

fetchData();
