module.exports = {
    apps: [
      {
        name: 'coral_perfumes',
        script: './index.js',
        cwd: '/var/www/coral_perfumes_react',
        watch: true,
        env: {
          NODE_ENV: 'production',
          // Add other environment variables here
        },
      },
    ],
  };