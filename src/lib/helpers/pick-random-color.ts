export default function pickRandomColor() {
    // yellow: "#FFCE5B",
    // red: '#A21038',
    // gold: '#C7A16D',
    const colors = ['#FFCE5B',  '#A21038', '#C7A16D'];

    return colors[Math.floor(Math.random() * colors.length)];
}