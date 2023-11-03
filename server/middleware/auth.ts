export default defineEventHandler((event) => {
  const auth = getCookie(event, "pokemon");

  const url = getRequestURL(event);
  if (auth || url.pathname === "/login") {
    return;
  }
  return sendRedirect(event, "/login", 302);
});
