/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2BC2F7",
                secondary: "#5A81FD",
                warning: "#FAA209",
                success: "#00A66F",
                error: "#ED5565",
                "myGray-100": "#EEEEEE", // for outline
                "myGray-200": "#F8FAFB", // for bg-Field
                "myGray-400": "#C4C4C4", // for textDashboard
                "myGray-500": "#7B7B7B", // for textOther
                "myGray-600": "#434343", // for textOther
                mySlate: "#2F4050", // for titleTabel
                white:"#FFFFFF" // for bg-box in dashborad 
            },
            fontFamily: {
                alegreya: ["Alegreya", "sans-serif"],
            },
            backgroundImage: {
                linear: "linear-gradient(154.83deg, #2BC2F7 21.91%, #5A81FD 72.02%)",
                gradientInput : "linear-gradient(0deg, #F8FAFB, #F8FAFB),linear-gradient(0deg, #EEEEEE, #EEEEEE)"
            },
            boxShadow : {
                verfictionShadow: "0px 0.5px 6px 0px rgba(43, 194, 247, 0.24)"
            }
        },
    },
    plugins: [],
};

