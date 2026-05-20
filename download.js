const fs = require('fs');
const urls = [
"https://lh3.googleusercontent.com/pw/AP1GczPdIeNpc1LpFnIu9FTzIqvEh6t6vBe5Yy-5T-CJodueQ7pM8_u6-WmkbV_Q8pP5oji9nf3rreRA3iNHUUSIagbe_rOt-SDVu3WI44B4c7bAXOxGUwnO0CHJyWLBfW6LG11swtDdIURwNKwtVuXJfDkO=w1175-h923-s-no-gm?authuser=0",
"https://lh3.googleusercontent.com/pw/AP1GczPxJvhPpICfC9rjMMeXNugQ8mJoP78z7Cl8IBmnys8rOyH5iSQMy-eIYBB-Kafpa2bib9GB5ohw0RTn8Hz4-jtbgRIXbHCilkF-6Ynk59ft58OI9qU9VybvAAMwhtCwZIWUkrX3MRVskhwoTR0pyRQq=w1383-h923-s-no-gm?authuser=0",
"https://lh3.googleusercontent.com/pw/AP1GczM4AqrXNKqGs5E5XhKdh7sDrDsvgq8_kyDjjRBwRTqRlUzh4AnIqYcAT4dG_-LSz4xuaNcN4ifnizO7OUgXjujK9moaWL3apP-GeJQKgl1WM6LnS4jzTUvdJH7jqZ6MRsIDdbQz3XDBt0IcVbGcB4kd=w999-h923-s-no-gm?authuser=0",
"https://lh3.googleusercontent.com/pw/AP1GczO7US70UCwnsIcyEeluQ0f-dn32y--TGSbAwPvBBH6EkvF8ICJUY4YxYGlbNuQxEPTPFeg6WIQpy9CrR-upqx_to3M2qReMudUzcm7qJxDF2w8b_ALn1ZRQi7ZwQlh12gpcRrDiCdXWaoAx3-U0dXdZ=w1247-h847-s-no-gm?authuser=0",
"https://lh3.googleusercontent.com/pw/AP1GczO4pA1UHngfqZ0u8uWuEJKyZCI9V4lys3gkIzUWJghgS410DFdKWf54KSMcECGLohsv_E9tmCYM7h0KSuGT64cyhvQ43mc6XCpoP1hshw520A36MIr2GlU_N1A5_bkpms8J9c5g33nqr-rjfQfUY52w=w1384-h923-s-no-gm?authuser=0"
];

const files = [
  "images/gallery1.jpg",
  "images/gallery2.jpg",
  "images/gallery3.jpg",
  "images/gallery4.jpg",
  "images/gallery5.jpg"
];

async function run() {
  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(files[i], Buffer.from(buffer));
    console.log("Downloaded " + files[i]);
  }
}

run();
