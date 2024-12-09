import { useState } from 'react';

interface Topic {
  id: number;
  title: string;
  content: string;
}

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  // takes in an array ot topic objects as its Props
  const [visibleTopicId, setVisibleTopicId] = useState<number | null>(null);
  // initializes visibleTopicId as state for component and its setter function
  const handleClick = (id: number) => {
    setVisibleTopicId((prevId) => (prevId === id ? null : id));
  }; // a function handle click that takes in one argument, a number, id
  // if the previous VisibleTopicId === id, set VisibleTopicId to null
  // otherwise set VisibleTopicId to id

  return (
    <div className="flex flex-col items-center">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isVisible={visibleTopicId === topic.id}
          handleClick={() => handleClick(topic.id)}></TopicCard>
      ))}
    </div>
    // map every topic in its topics array from its props to a TopicCard component
    // TopicCard key = topic object id property
    // TopicCard topic = topic object itself
    // TopicCard isVisible = boolean value based on whether visibleTopicId === topic object id property
    // TopicCard handleClick = function that calls the handleClick function with the topic id property as parameter
  );
}

type TopicCardProps = {
  topic: Topic;
  isVisible: boolean;
  handleClick: () => void;
};
function TopicCard({ topic, isVisible, handleClick }: TopicCardProps) {
  // TopicCard Props consist of a topic object, an isVisible boolean, and a handleClick function with a return type of void
  return (
    <>
      <div
        onClick={handleClick}
        className="bg-grey-300 w-96 border text-center">
        {topic.title}
      </div>
      {isVisible && (
        <div className="w-96 border text-center">{topic.content}</div>
      )}
    </>
    // we return a div with an onClick event handler that executes the handleClick function from props
    // classes to style with using tailwind
    // text content of the topic object from Props's title property
    // if isVisible from props is true, also render another div with text contant of the topic object from Props' content property
  );
}
