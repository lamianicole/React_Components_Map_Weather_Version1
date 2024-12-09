import Tag from "../tag/Tag";

const Weekly = () => {
    const days: string[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    const temperatures: string[] = ["22", "19", "24", "18", "21", "12", "11"];
    const conditions: string[] = ["Sonnig", "Wolkig", "Sonnig", "Regnerisch", "Teilweise bewölkt", "Wolkig", "Sonnig"];
    const emojis: string[] = ["☀️", "☁️", "☀️", "☔", "⛅", "☁️", "☀️"];

    return (
        <div className="wrap">
            {days.map((day, index) => (
                <Tag 
                    key={index} 
                    day={day} 
                    temperature={temperatures[index]} 
                    condition={conditions[index]} 
                    emoji={emojis[index]} 
                />
            ))}
        </div>
    );
}

export default Weekly;
