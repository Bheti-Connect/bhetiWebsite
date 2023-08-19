module.exports = {
  apps: [
    {
      name: "bheti-site",
      script: "serve -s build -l 2003",
      watch: "."
    },
  ]
};