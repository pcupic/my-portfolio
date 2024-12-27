import TimelineEvent from "./TimelineEvent";

const VerticalTimeline = () => {
    return (
        <div className="flex flex-col justify-start bg-white opacity-40 h-90 w-80 rounded-3xl p-9">
            <h2 className="text-xl text-black text-center mb-4">Timeline</h2>
            <ul>
                <TimelineEvent date="2002." content="Birth"/>
                <TimelineEvent date="2016." content="High school enrollment"/>
                <TimelineEvent date="2020." content="High school graduation"/>
                <TimelineEvent date="2020." content="Faculty enrollment"/>
            </ul>
        </div>
    );
};

export default VerticalTimeline;