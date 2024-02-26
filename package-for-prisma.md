"scripts" : {
  https://www.youtube.com/watch?v=vwSlYG7hFk0   time 34:48
  "build": "prisma db push && build",
  "build": "prisma db push && prisma generate && tsc", //auto
}

"prisma" : {
  "generate": "prisma generate", // auto
  "seed" : "prisma db seed --preview-feature", // auto

  "seed" : "ts-node --compiler-options 
   {\"module\":\"CommonJs\"} prisma/seed.ts", // manual

},