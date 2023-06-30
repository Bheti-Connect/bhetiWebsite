module.exports = {
  apps: [
    {
      name: "preview site",
      script: "serve -s build -l 2003",
      watch: "."
    },
  ]
};
