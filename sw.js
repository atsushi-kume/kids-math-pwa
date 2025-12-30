self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("math-cache").then(c =>
      c.addAll(["index.html"])
    )
  );
});
