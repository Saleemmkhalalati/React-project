/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#2BC2F7",
        SecondaryColor: "#5A81FD",
        colorTop: "#2BC2F7",
        colorBottom: "#5A81FD",
        OrangeColor: "#FAA209",
        GreenColor: "#00A66F",
        DeleteClearColor: "#ED5565",
        backgroundColor: "#FFFFFF",
        LineOutlineColor: "#EEEEEE",
        TitleTextColor: "#000000",
        IconsColor: "#434343",
        TextOtherColor: "#7B7B7B",
        TextDashboardColor: "#C4C4C4",
        TitleTabelColor: "#1AB394",
        BackColor: "#1AB394",
      },
    },
  },
  plugins: [],
};
