interface ITagProps {
    day: string;
    temperature: string;
    condition: string;
    emoji: string;
    }

    const Tag: React.FC<ITagProps> = ({ day, temperature, condition, emoji }) => {
    return (
        <div className="wrap-tag">
            <h3>{day}</h3>
            <h1>{temperature}°C</h1>
            <p>{condition}</p>
            <p>{emoji}</p>
        </div>
    );
}

export default Tag;
