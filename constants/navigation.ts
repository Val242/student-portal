export const ROUTES = {
  // Auth routes
  LOGIN: "/(auth)/login",
  SIGNUP: "/(auth)/signup",
  FORGOT_PASSWORD: "/(auth)/forgot-password",

  // Main app routes
   TABS: "/(tabs)",
  SCHEDULE: "/(tabs)/schedule",
  PROFILE: "/(tabs)/profile",
  WIDGETS: "/(tabs)/widgets",
  TASKS: "/(tabs)/tasks",
//   LYRICS_GENERATOR: "/(tabs)/createPost/lyricsGenerator",
//   POST: "/(tabs)/createPost/post",
//   UPLOAD_SONG: "/(tabs)/createPost/uploadSong",
//   CREATE: "/(tabs)/createPost",
} as const;